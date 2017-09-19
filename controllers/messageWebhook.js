const processMessage = require('../helpers/processMessage')
const processPayload = require('../helpers/processPayload')

module.exports = (req, res) => {
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        console.log(event)
        if (event.message && event.message.text) {
          processMessage(event)
        } else if (event.postback && event.postback.payload) {
          processPayload(event)
        }
      })
    })

    res.status(200).end()
  }
}
