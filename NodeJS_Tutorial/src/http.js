const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello world from nodeJS')
        res.end() // Important for sending response
    } else {
        res.write('Hellow again from nodeJS\nYou are not requesting from root domain.')
        res.end()
    }
})

server.listen('3000');