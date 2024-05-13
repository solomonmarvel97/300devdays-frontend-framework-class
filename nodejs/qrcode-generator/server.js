const http = require('http')
const url = require('url')


let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Mary Doe" }
]


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true)

    if (req.method === "GET") {
        if (parsedUrl.pathname === '/users') {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(users))
        }
    }
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})