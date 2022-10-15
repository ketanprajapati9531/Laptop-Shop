const path=require("path");
const express=require("express");
const app=express();
const hbs=require("hbs");

const staticPath = path.join(__dirname,"./app");
const templatePath = path.join(__dirname,"./templates/views");
const partialsPath = path.join(__dirname,"./templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath)); 

app.get("",(req,res)=>{
    res.render('index');
});
app.get("/home",(req,res)=>{
    res.render('index');
});
app.get("/offer",(req,res)=>{
    res.render('offer');
});

app.get("/accessories",(req,res)=>{
    res.render('accessories');
});

app.get("/support",(req,res)=>{
    res.render('support');
});
app.get('/offer/*',(req,res)=>{
    res.render("404",{
        errorcomment :"Oops this about us page couldn't be found"
    });
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Oops page couldn't be found"
    });
});
app.listen(9012,()=>{
    console.log('listing to the port');
});