const fastify = require('fastify')
const server= fastify()

server.get('/', () => 'Hello World')

server.listen({
    port: process.env.PORT || 3000
}, () => console.log('http://localhost:3000'))