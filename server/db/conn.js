const mongoose = require("mongoose");

const DB = "mongodb+srv://vedantnaik09:cloudimg@cluster0.d76yysn.mongodb.net/";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((error)=> console.log("error",error))