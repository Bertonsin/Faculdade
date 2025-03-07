import Fastify from "fastify";
import { startServer } from './server.js';
import { sendUserData } from './use-case.js';

export const fastify = Fastify({
  logger: true
})
fastify.post('/', sendUserData)
startServer()