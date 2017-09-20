// TODO: Store token in a environment variable
const request = require('request')
const config = require('../config')

const api = request.defaults({
  url: config.FACEBOOK_GRAPH_URL,
  qs: { access_token: config.FACEBOOK_PAGE_TOKEN },
  method: 'POST'
})

module.exports.sendMessage = (senderId, data) => {
  return api({
    json: {
      recipient: { id: senderId },
      message: data
    }
  })
}

module.exports.sendTypingOn = (senderId, data) => {
  return api({
    json: {
      recipient: { id: senderId },
      sender_action: 'typing_on'
    }
  })
}
