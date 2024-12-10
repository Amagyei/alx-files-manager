import { createClient } from 'redis'

class RedisClient {
    constructor() {
        this.rediscli = createClient()
        this.rediscli.on('error', function (err) {
            console.error('Redis client not connected to the server: ', err.toString());
        });
        this.rediscli.on('connect', () => {
            console.log('Redis client connected to the server');
        });
    }

    isAlive() {
        return this.rediscli.connected;
    }

    async get(key) {
        try {
            const value = await this.rediscli.get(key);
            return value;
        } catch (err) {
            console.error(`Error getting key ${key}: ${err}`);
            return null;
        }
    }

    async set(key, value, duration = 0) {
        try {
            await this.rediscli.set(key, value);
            if (duration > 0) {
                await this.rediscli.expire(key, duration);
            }
        } catch (err) {
            console.error(`Error setting key ${key}: ${err}`);
        }
    }

    async del(key) {
        try {
            await this.rediscli.del(key);
        } catch (err) {
            console.error(`Error deleting ${key}: ${err}`)
        }
    }
}

const redisClient = new RedisClient();
export default redisClient;
