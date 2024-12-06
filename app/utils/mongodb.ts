import { MongoClient } from 'mongodb';

let client: MongoClient | null = null;

export async function getMongoClient() {
    if (client) {
        return client;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('Please add MONGODB_URI to your environment variables');
    }

    try {
        client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        return client;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

export async function closeMongoConnection() {
    if (client) {
        await client.close();
        client = null;
    }
} 