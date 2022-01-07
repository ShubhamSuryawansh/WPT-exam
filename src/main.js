const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors());

const {selectUser,addMessages}=require("./user");



app.get("/messages", async (req,res)=>{
    const list=await selectUser();
    res.json(list);
})


app.post("/addmessages", async (req,res)=>{
    const message=req.body;
    await addMessages(message);
    res.json("messages send Successfully!!")
})
app.listen(4000,()=>console.log("server Started"))