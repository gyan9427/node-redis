const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const redis = require("redis")

//set Port
const Port = 3000;

const app = express();

//view engine
app.engine('handlebars',exphbs.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//methodOverride
app.use(methodOverride('_method'));

app.get('/',function(req,res,next){
    res.render('searchusers')
})

app.listen(Port,()=>{
    console.log("app running at port: ",Port);
})