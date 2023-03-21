const express=require("express");
const bodyparser=require("body-parser")
const app=express();
app.use(bodyparser.urlencoded({extended: true}))
app.get("/",function (req,res) {
    res.sendFile(__dirname+ "/index.html")
})
app.post("/index.html",function (req,res) {
    var h=Number(req.body.height)
    var w=Number(req.body.weight)
    var bmi= Math.round((w/(Math.pow(h,2))*100.0))/100.0
    //21.34567 * 100 = 2134.567 => 2134 => 21.34
    res.send("Your BMI is: "+bmi)
})
app.listen(3000,function (req,res) {
    console.log('server started')
})