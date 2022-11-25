const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require('mongodb');
// const url = 'mongodb://root:example@streamdb:27017';
const url = 'mongodb://root:example@localhost:27017?authSource=admin'


const port = 8080;



mongodb.MongoClient.connect(url, function (error, client) {

    if (error) {
        console.log(error)
       
    }


    const db = client.db('streamshady2');
   
    const bucket = new mongodb.GridFSBucket(db);

    console.log('Bucket created')

    const  files = ["0.mp4","1.mp4","2.mp4","4.mp4"]

    files.forEach((path) => {
        console.log(`creating stream ${path}`)
        fs.createReadStream(path).
        pipe(bucket.openUploadStream(path, {
            chunkSizeBytes: 1048576,
            metadata: { field: 'myField', value: 'myValue' }
        }))
    

    },

    console.log('done')
    
    
    )
  





})

app.listen(port, () => console.log(`Listening on port : ${port}`))
// docker run -p 27017:27017 -v /Users/ellarnol/localTwitterDB:/data/db  mongo:latest©

// https://stackoverflow.com/questions/62414739/mongodb-authentication-failing-on-accessing-database-while-using-docker