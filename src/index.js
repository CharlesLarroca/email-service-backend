const fastify = require('fastify')
const server= fastify()

const EmailRoutes = require('./routes/emailRoutes')

server.register(EmailRoutes)

server.listen({
    port: process.env.PORT || 3000
}, () => console.log('http://localhost:3000'))