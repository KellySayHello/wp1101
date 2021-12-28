const WebSocket = require('ws')
const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const mongoose = require('mongoose')
const dotenv = require('dotenv-defaults')
const bodyParser = require('body-parser')
const { sendData, sendStatus, initData } = require('./wssConnect')
const db = require('./mongo.js')
const Message = require('./models/message.js')

const port = process.env.PORT || 4000

dotenv.config()
const broadcastMessage = (data, status) => {
  wss.clients.forEach((client) => {
    sendData(data, client)
    sendStatus(status, client)
  })
}
console.log('hello world')
db.once('open', () => {
  wss.on('connection', (ws) => {
    // Define WebSocket connection logic
    console.log('wss connected!')
    ws.onmessage = async (byteString) => {
      const { data } = byteString
      const [task, payload] = JSON.parse(data)
      switch (task) {
        case 'input':
          {
            const { name, body } = payload
            const message = new Message({ name, body })
            try {
              await message.save()
            } catch (e) {
              throw new Error('Message DB save error: ' + e)
            }
            broadcastMessage(['output', [payload]], {
              type: 'success',
              msg: 'Message sent',
            })
          }
          break

        case 'clear': {
          Message.deleteMany({}, () => {
            sendData(['cleared'], ws)
            sendStatus(
              {
                type: 'info',
                msg: 'Message cache cleared.',
              },
              ws,
            )
          })
          break
        }
        default:
          break
      }
    }
  })
  server.listen(port, () => {
    ;`Listening on http://localhost:${port}`
  })
})
