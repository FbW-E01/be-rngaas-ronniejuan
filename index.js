import http from 'http'

const server = http.createServer((req, res)=>{
    console.log("Hello welt")

    const randomNumber = Math.random()
    res.end(randomNumber.toString())

    
    


    

})

server.listen(8081)

