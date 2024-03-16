// Import the required Redis client library
import redis from 'redis';

// Define the RedisClient class
class RedisClient {
  constructor() {
    // Create a new Redis client instance
    this.client = redis.createClient();

    // Add event listener for error handling
    this.client.on('error', (error) => {
      console.error('Error connecting to Redis:', error);
    });
  }

  // Method to check if Redis connection is alive
  isAlive() {
    return new Promise((resolve, reject) => {
        this.client.ping((error, result) => {
            if (error) {
                console.error('Error pinging Redis:', error);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
  }

  // Method to set a value in Redis for a given key with expiration
  async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (error, result) => {
                if (error) {
                    console.error('Error getting value from Redis:', error);
                    resolve(null);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // Implement other methods like 'set', 'del', etc.
}

const redisClient = new RedisClient();

export default redisClient;
