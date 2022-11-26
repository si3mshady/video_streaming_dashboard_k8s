const xpress = require('express')
const fs = require('fs')
const app = xpress();
const cors = require('cors');
const thumbsupply = require('thumbsupply');
PORT = 4000

videos = [
{
    id: 0,
    thumbnail: '/video/0/thumb',
    name: 'ryu'
},
{
    id: 1,
    thumbnail: '/video/1/thumb',
    name: 'donatello'
},{
    id: 2,
    thumbnail: '/video/2/thumb',
    name: 'drone'
},
{
    id: 3,
    thumbnail: '/video/3/thumb',
    name: 'pop smoke'
},
{
    id: 4,
    thumbnail: '/video/4/thumb',
    name: 'te amo'
}


]


app.use(cors())


app.get('/kong', (req,res) => {
    res.status(200).send('KING KONG!')
})

app.get('/init', (req,res) => {
    res.json(videos)
})


app.get('/video/:id/thumb', (req,res) => {
    thumbsupply.generateThumbnail(`assets/${req.params.id}.mp4`)
    .then(thumbnail => res.sendFile(thumbnail))
})






app.get('/health', (req,res) => {

    res.status(200).send('Healthy!')
    
})


app.get('/sample', (req,res) => {

    res.sendFile('assets/0.mp4', { root: __dirname})
    
})

app.get('/video/:id/play', (req,res) => {

  const range = req.headers.range;
  console.log(req.headers.range)
  if (!range) {
    res.status(400).send("Request must include range header. Please try again.")
  }
    // const videoPath = __dirname +  "/ThirdChild.mp4"
    // const videoPath = __dirname + "/assets/ryu_stream_sample.mp4"
    const videoPath = `assets/${req.params.id}.mp4`
    console.log(videoPath)

    // get size of video 
    const videoSize = fs.statSync(videoPath).size
    const CHUNK_SIZE = 10 ** 6; //1mb
    //parse the range 
    //Example "bytes=8823-"
    
    const start = Number(range.replace(/\D/g,"")) //replace all non digit characters with nothing
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1) //end will continue to increase 
    console.log('start',start)
    console.log('end',end)

    const contentLength = end - start + 1
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
        'Acess-Control-Allow-Origin':'*'
    }

    res.writeHead(206,headers); //tells browswer that partial data is being sent
    const videoStream = fs.createReadStream(videoPath, {start,end})
    videoStream.pipe(res)

    
})


app.get('/video/:id', (req,res) => {
    thumbsupply.generateThumbnail(`assets/${req.params.id}.mp4`)
    .then(thumbnail => res.sendFile(thumbnail))
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})