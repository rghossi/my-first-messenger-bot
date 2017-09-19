const graphAPI = require('./graphAPI')

module.exports = (event) => {
  const senderId = event.sender.id
  const message = event.message.text

  const data = {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: 'What do you mean?',
        buttons:[
          {
            type: "postback",
            title: "Bookmark Item",
            payload: "DEVELOPER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }

  graphAPI.sendMessage(senderId, data)
}
