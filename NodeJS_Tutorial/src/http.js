const http = require('http')
const fs = require('fs')

// const server = http.createServer((req,res) => {
//     if (req.url === '/') {
//         res.write('Hello world from nodeJS')
//         res.end() // Important for sending response
//     } else {
//         res.write('Hellow again from nodeJS\nYou are not requesting from root domain.')
//         res.end()
//     }
// })

// server.listen('3000');


http.createServer((req, res) => {
    const readStream = fs.createReadStream('./NodeJS_tutorial/src/exampleFiles/index.html')
    res.writeHead(200, {'content-type': 'text/html'})
    readStream.pipe(res)
}).listen(3000)