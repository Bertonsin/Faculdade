import { fastify } from './main.js'

export async function startServer(){
  try {
    await fastify.listen({port: 3000})
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)  
  }
}