const graphAPI = require('./graphAPI')

module.exports = (event) => {
  const senderId = event.sender.id
  const payload = event.postback.payload

  graphAPI.sendMessage(senderId, {text: payload})
}
