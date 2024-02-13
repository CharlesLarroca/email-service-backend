async function EmailRoutes(server){
    server.get('/', () => 'Hello World')
}

module.exports = EmailRoutes