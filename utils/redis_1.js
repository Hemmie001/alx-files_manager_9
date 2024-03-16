// Import the required Redis client library
const redis = require('redis');

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
    // Check if the Redis client is connected
    return this.client.connected;
  }

  // Method to get value from Redis for a given key
  async get(key) {
    return new Promise((resolve, reject) => {
      // Get the value for the key from Redis
      this.client.get(key, (error, value) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  }

  // Method to set a value in Redis for a given key with expiration
  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      // Set the value in Redis with expiration
      this.client.setex(key, duration, value, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  // Method to delete a value from Redis for a given key
  async del(key) {
    return new Promise((resolve, reject) => {
      // Delete the value from Redis for the key
      this.client.del(key, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

// Create an instance of RedisClient
const redisClient = new RedisClient();

// Export the redisClient instance
module.exports = redisClient;
