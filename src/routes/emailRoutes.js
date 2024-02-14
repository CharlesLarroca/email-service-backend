const EmailController = require('../controllers/EmailController')

async function EmailRoutes(server){
    server.post('/send', EmailController.sendEmail)
}

module.exports = EmailRoutes