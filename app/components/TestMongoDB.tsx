import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || '');

export async function getMongoClient() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        
        console.log('Attempting to connect to MongoDB...');
        await client.connect();
        console.log('Successfully connected to MongoDB');
        return client;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
} 