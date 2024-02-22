const MailQueue = require('../queue/MailQueue')

async function sendEmail(req, reply){
  const {
    firstName,
    lastName,
    email
  } = req.body

  const template = 
    `Olá ${firstName} ${lastName}, sua assinatura foi confirmada! 
    Para acessar os recursos exclusivos você precisa clicar aqui.`

    try {
      await MailQueue.add({
        to:email,
        from: 'gdsvahl@inf.upel.edu.br',
        subject: 'Confirmação de Assinatura',
        text: template
      })

      return reply.code(200).send(template)
    } catch {
      return reply.code(500).send('Internal Server Error!')
    }
}

module.exports = {
  sendEmail
}