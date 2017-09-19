// TODO: Store token in a environment variable
const FACEBOOK_ACCESS_TOKEN = 'EAAUoAMLiKiIBAOk07R74dZA8VFKB5TldtvZAJB7TIzlwT4A5JVNprhOvQ6rEaWJMMCH3s5QnznRKy3wR7JG9cRrxPeo3P9faw9Xgiu2eoBF2xcr0oQ0C1WK8ZBZB1ipWhJB3uwWJ14ZAhrb2aMWKELbU2HGyr5tdB1lMkneQ0pQZDZD'
const request = require('request')

const api = request.defaults({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
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
