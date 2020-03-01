const http=require('http')
const app=require('./routers/firstrouter')

http.createServer(app).listen(3090)


