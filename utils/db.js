import mongodb from 'mongodb';
import Collection from  'mongodb/lib/collection';
import envLoader from './env_loader';

/**
 * A mongo client
 */

class DBClient {
    /**
     * Constructor
     */
    constructor() {
        /**
         * The mongo client
         */
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';
        const dbURL = `mongodb://${host}:${port}/${database}`;
    
        this.client = new mongodb.MongoClient(dbURL, {useUnifiedTopology: true });
        this.client.connect();
    }

    isAlive() {
        /**
         * Check if the client is connected
         */
        return this.client.isConnected();
    }
    
    async nbUsers() {
        /**
         * Get the number of users
         */
        return this.client.db().collection('users').countDocuments();
    }

    async nbFiles() {
        /**
         * Get the number of files
         */
        return this.client.db().collection('files').countDocuments();
    }

}

const dbClient = new DBClient;
export default dbClient;

