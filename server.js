const express=require("express");
const app=express();
//--protected route
const protected=(req,res,next)=>{
      //console.log("hello");
      let userLoginDetails={
            isLogin: true,
            username:"Rhey"
      };
      if(userLoginDetails.isLogin){
            next();
      }else{
            return res.json("You must Login first Dude!");
      }
};
//--require isAdmin route middleware
const isAdmin=(req,res,next)=>{
      //console.log("hello");
      let userType={
            isAdmin: true,
            username:"Rhey"
      };
      if(userType.isAdmin){
            console.log(`Welcome $userType.username}`);
            next();
      }
      else{
            return res.json("you must be an admin!");
      }
};
//--app.use protected
//--home route
app.get("/",(req,res)=>{
      res.send("home page");
});
//--middle chained
//-login route
app.get("/login",protected,(req,res)=>{
      res.send("login successful");
});
//--@rote authenticated users
//--create post route
app.get("/create-post",protected,(req,res)=>{
      res.json({message:"Post created"});
});
//@role: public users
//--fetch all post route
app.get("/post",(req,res)=>{
      res.json({message:"fetch all post"});
});
//--role admin
//--delete route
app.delete("/post/:id",protected, isAdmin,(req,res)=>{
      res.json({message:"Post Deleted"});
});
app.listen(3000,()=>{
      console.log("Server running at post 3000");
});