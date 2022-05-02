var express = require('express')
var app = express()
var mongodb = require('mongodb')
var mongoClient  = mongodb.MongoClient;
var dburl = "mongodb://localhost:27017/";
app.get("/insert",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    nam1 = req.query.songname;
    nam2 = req.query.artistname;
    du = req.query.duration;
    mongoClient.connect(dburl,function(err,db){
        if (err) throw err;
        var dbo = db.db("playlistDB")
        myobj = {songname:nam1, artistname:nam2, duration:du};
        //myobj = {}
        dbo.collection("song").insertOne(myobj,function(err,result){
            if (err) throw err;
            res.json({
                message:true,
                result:"inserted"
            });
            db.close();
        })
    })
})
app.get("/view",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    mongoClient.connect(dburl,function(err,db){
        if (err) throw err;
        var dbo = db.db("playlistDB")
        dbo.collection("song").find({}).toArray(function(err,result){
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })
})
app.get("/update",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    mongoClient.connect(dburl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playlistDB");
        var m = req.query.songname;
        var myquery = {songname:m};    
        var newdur = req.query.duration;          
        var newvalues = { $set: {name:m, duration:newdur } };
        dbo.collection("song").updateOne(myquery, newvalues, function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
        });
      });
})  
app.get("/delete",function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    mongoClient.connect(dburl,function(err,db){
        if (err) throw err;
        var dbo = db.db("playlistDB");
        var dec = req.query.songname;
        var de = {
            songname:dec
        }
        dbo.collection("song").deleteOne(de,function(err,result){
            if(err) throw err;
            res.json({
                message:"true"
            })
            db.close();
        })
    })  
})
app.get("/viewartistname",function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
    mongoClient.connect(dburl,function(err,db){
        if (err) throw err;
        var dbo = db.db("playlistDB")
		var a = req.query.artistname;
		var address = {artistname:a}
        dbo.collection("song").find(address).toArray(function(err,result){
            if (err) throw err;
            res.json(result);
            db.close();
        })
    })	
})
app.listen(5000)
console.log("server is running on port 5000")