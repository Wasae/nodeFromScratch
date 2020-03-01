const express=require('express')
const path=require('path')
let app=express()

let staticFilers=path.join(__dirname,'/public/')
app.use(express.static(staticFilers))

app.get('/whether',function(req,res){
    res.send("hello whether")
})

app.get('/template',function(req,res){
    res.render("about",{
        welcome:"from world"
    })
})

app.listen(3090,()=>{
    console.log("Server listening at port 3090")
})


//app.use(express.static)