import { getMongoClient } from '../../components/TestMongoDB';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Log the incoming request
        console.log('Received signup request');
        
        const { firstName, lastName, email, password } = await request.json();
        console.log('Parsed request data:', { firstName, lastName, email });

        try {
            const client = await getMongoClient();
            console.log('MongoDB connected');
            
            const db = client.db('therapistfriend');
            
            // Check if user already exists
            const existingUser = await db.collection('users').findOne({ email });
            if (existingUser) {
                return NextResponse.json(
                    { error: 'User with this email already exists' },
                    { status: 400 }
                );
            }

            // Hash password
            const hashedPassword = await hash(password, 10);

            // Create user
            const result = await db.collection('users').insertOne({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                createdAt: new Date(),
                updatedAt: new Date()
            });

            console.log('User created successfully');
            return NextResponse.json({
                message: 'User created successfully',
                userId: result.insertedId
            });

        } catch (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Database connection failed' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 