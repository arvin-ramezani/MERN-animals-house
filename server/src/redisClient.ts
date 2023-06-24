import { RedisClient, createClient } from 'redis';

export let redisClient: RedisClient;

export const connectToRedis = (createClient: any) => {
  if (typeof process.env.REDIS_URL !== 'undefined') {
    redisClient = createClient(process.env.REDIS_URL);
  } else if (
    typeof process.env.REDIS_PORT !== 'undefined' &&
    typeof process.env.REDIS_HOST !== 'undefined'
  ) {
    redisClient = createClient(
      Number(process.env.REDIS_PORT),
      process.env.REDIS_HOST
    );
  } else {
    throw new Error('Please Provide Redis URL');
  }

  redisClient.on('connect', () => {
    console.log('redis client connected');
  });
};
