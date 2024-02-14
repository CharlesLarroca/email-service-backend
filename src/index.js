const fastify = require('fastify')
const server= fastify()
const EmailRoutes = require('./routes/emailRoutes')

// Objeto passado para rota
// const EmailRoute = {
//     method: 'GET',
//     url: '/send',
//     handler: () => {
//         return 'Hello World'
//     },
//     schema : {}
// }

server.register(EmailRoutes)

// Outro metodo de configuração de rotas 
// server.route(EmailRoute)

const corsOptions = {
    Credential: true,
    origin: 
}

server.listen({
    port: process.env.PORT || 3000
}, () => console.log('http://localhost:3000'))