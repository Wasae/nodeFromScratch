let express=require('express')
const app=express()
let productRoutes=require('./productRoutes')

app.use('/products',productRoutes)

module.exports=app