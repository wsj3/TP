import { getMongoClient } from '@/app/utils/mongodb';
import { hash } from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        
        const client = await getMongoClient();
        const db = client.db('your_database_name');
        
        // Check if user already exists
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return Response.json({ error: 'User already exists' }, { status: 400 });
        }

        // Hash password and create user
        const hashedPassword = await hash(password, 10);
        await db.collection('users').insertOne({
            email,
            password: hashedPassword,
            createdAt: new Date()
        });

        return Response.json({ message: 'User created successfully' });
    } catch (error) {
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
} 