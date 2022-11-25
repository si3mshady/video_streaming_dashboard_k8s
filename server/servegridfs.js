const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require('mongodb');
// const url = 'mongodb://root:example@streamdb:27017';
const url = 'mongodb://root:example@localhost:27017?authSource=admin'


const port = 8080;


app.get('/init', (req,res)   => {



    mongodb.MongoClient.connect(url, function (error, client) {

        if (error) {
            console.log(error)
           
        }
    
    
        const db = client.db('streamshady2');
       
        const bucket = new mongodb.GridFSBucket(db);
    
        console.log('Bucket created')
    
        // const  files = ["0.mp4","1.mp4","2.mp4","4.mp4"]
    
        // files.forEach(async (path) => {
        //     console.log(`creating stream ${path}`),
        //     await fs.createReadStream(path).
        //     pipe(await bucket.openUploadStream(path, {
        //         chunkSizeBytes: 1048576
        //     }))
        
    
        // }

       
        const videoUploadStream = bucket.openUploadStream('stream');
        const videoReadStream = fs.createReadStream('./0.mp4');
        
        videoReadStream.pipe(videoUploadStream);
        

        
    
        res.status(200).send("Done...")
        
        
        
    
    })
}) 





app.get('/video/:id/play', (req,res) => {

    mongodb.MongoClient.connect(url, function (error, client) {

        if (error) {
            console.log(error)
           
        }

        const range = req.headers.range;
        console.log('header range',req.headers.range)
        if (!range) {
          res.status(400).send("Request must include range header. Please try again.")
        }

        const db = client.db('streamshady2');
        // GridFS Collection
        db.collection('fs.files').findOne({}, (err, video) => {
          if (!video) {
            res.status(404).send("No video uploaded!");
            return;
          }
    
          else if (video) {
            console.log('There is a video')
          }











     
          // const videoPath = __dirname +  "/ThirdChild.mp4"
          // const videoPath = __dirname + "/assets/ryu_stream_sample.mp4"
          const videoPath = `assets/${req.params.id}.mp4`
          console.log(videoPath)
      
          // get size of video 
          const videoSize = fs.statSync(videoPath).size
          console.log(videoSize)
          const CHUNK_SIZE = 10 ** 6; //1mb
          //parse the range 
          //Example "bytes=8823-"
          
          const start = Number(range.replace(/\D/g,"")) //replace all non digit characters with nothing
          console.log(start)
          const end = Math.min(start + CHUNK_SIZE, videoSize - 1) //end will continue to increase 
          console.log('start',start)
          console.log('end',end)
      
          const contentLength = end - start + 1
          const headers = {
              "Content-Range": `bytes ${start}-${end}/${videoSize}`,
              "Accept-Ranges": "bytes",
              "Content-Length": contentLength,
              "Content-Type": "video/mp4"
          }
      
          res.writeHead(206,headers); //tells browswer that partial data is being sent
        //   const videoStream = fs.createReadStream(videoPath, {start,end})
        //   videoStream.pipe(res)
      
        const bucket = new mongodb.GridFSBucket(db);
        
       
        const downloadStream = bucket.openDownloadStreamByName('stream', {
          start
        });
    
        downloadStream.pipe(res);













        })
    



    








    })


  
    





  })
  









app.listen(port, () => console.log(`Listening on port : ${port}`))
// docker run -p 27017:27017 -v /Users/ellarnol/localTwitterDB:/data/db  mongo:latest©

// https://stackoverflow.com/questions/62414739/mongodb-authentication-failing-on-accessing-database-while-using-docker