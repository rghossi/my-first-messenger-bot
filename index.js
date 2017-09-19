const express = require('express')
const bodyParser = require('body-parser')

const verificationController = require('./controllers/verification')
const messageWebhookController = require('./controllers/messageWebhook')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/webhook', verificationController)
app.post('/webhook', messageWebhookController)

app.listen(3000, () => console.log('Webhook server is listening, port 3000'))
