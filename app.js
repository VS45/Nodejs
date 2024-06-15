const express=require('express')
const app=express();
const PORT=8080;
// set up route for application
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h2>About page</h2>')
})
app.listen(PORT,()=>{
    console.log(`app running at port ${PORT}`)
}) 