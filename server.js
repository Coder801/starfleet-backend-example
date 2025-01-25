// import Fastify from "fastify";
// import cors from "@fastify/cors";

// const INTERVAL = 10000;
// const PORT = 6006;

// const fastify = Fastify();
// fastify.register(cors, {
//   origin: "*",
//   methods: ["GET"],
// });

// const generateRandomValue = () => ({
//   value: Math.floor(Math.random() * 1000),
//   timestamp: new Date().toISOString(),
// });

// let latestValue = generateRandomValue();

// setInterval(() => {
//   latestValue = generateRandomValue();
//   fastify.log.info(`New value: ${JSON.stringify(latestValue)}`);
// }, INTERVAL);

// fastify.get("/random", async (request, reply) => {
//   reply.type("application/json").send(latestValue);
// });

// const start = async () => {
//   try {
//     await fastify.listen({ port: PORT });
//     console.log(`Server running on port ${6006}`);
//   } catch (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
// };

// start();
