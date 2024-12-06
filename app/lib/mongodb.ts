import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || '');

export async function getMongoClient() {
    try {
        await client.connect();
        return client;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
} 