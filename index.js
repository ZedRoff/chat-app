const WebSocket = require('ws')
const express = require("express")
const app = express()
const config = require("./public/config.json")
const server = app.listen(5000, config.ipv4)
app.use(express.static("public"))
const wss = new WebSocket.Server({ server })

let users = []
let messages = []
let i = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/ipv4", (req, res) => {
    res.send(config.ipv4)
})
wss.on("connection", ws => {
    users.push(ws)
    i++
    ws.on("message", message => {
        
       message = message.toString()
       messages.push(message)

       users.forEach(user => {
         
            user.send(message)
        })
  
            
        

    })

})
