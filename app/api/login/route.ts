import { getMongoClient } from '../../components/TestMongoDB';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        
        const client = await getMongoClient();
        const db = client.db('therapistfriend');
        
        // Find user by email
        const user = await db.collection('users').findOne({ email });
        
        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Compare passwords
        const passwordMatch = await compare(password, user.password);
        
        if (!passwordMatch) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Return user data (excluding password)
        const { password: _, ...userWithoutPassword } = user;
        
        // Set HTTP-only cookie for session
        const response = NextResponse.json({
            message: 'Login successful',
            user: userWithoutPassword
        });

        response.cookies.set('isLoggedIn', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 