const express=require('express');
const appRouter=require('./routes/app.routes')
const app=express();
const PORT=8080;
// set up route for application
app.set('view engine','ejs')
app.set('views','frontend')
app.use(appRouter)

app.listen(PORT,()=>{
    console.log(`app running at port ${PORT}`)
}) 