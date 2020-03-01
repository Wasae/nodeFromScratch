let express=require('express')
let app=express.Router();

app.get('/',function(req,res){
    console.log(req.query)
    res.send("hell products")
})

module.exports=app