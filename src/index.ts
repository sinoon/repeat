import { Http, Response } from 'farrow-http'

const http = Http({
    logger: true
})

// add http middleware
http.use(() => {
    // returning response in middleware
    return Response.text(`Hello Farrow`)
})

http.listen(3000)
