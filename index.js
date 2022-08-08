const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 5500 })

let users = []
let messages = []
let i = 0;

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
