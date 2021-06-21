import express from "express";

const app= express();
const port = process.env.PORT || 3000

app.get("/test",(req,res)=>{
   res.json({message:'Hello NLW'})
})
//primeira rota post
app.post("/test/post",(req,res)=>{
   res.json({message:"Hello NLW, Primeira Rota Post"})
})

app.listen(port,()=>console.log('Server is listening on port',port))

