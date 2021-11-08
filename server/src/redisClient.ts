import { createClient } from "redis";

const redisClient = createClient(
  Number(process.env.REDIS_PORT),
  process.env.REDIS_HOST
);

redisClient.on("connect", () => {
  console.log("redis client connected");
});

export default redisClient;
