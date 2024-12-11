import { getMongoClient } from '@/app/utils/mongodb';
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        
        const client = await getMongoClient();
        const db = client.db('your_database_name');
        
        // Find user
        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return Response.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Verify password
        const isValidPassword = await compare(password, user.password);
        if (!isValidPassword) {
            return Response.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Create session/token
        const token = await new SignJWT({ userId: user._id.toString() })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('24h')
            .sign(new TextEncoder().encode(process.env.JWT_SECRET));

        return Response.json({ token });
    } catch (error) {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
} 