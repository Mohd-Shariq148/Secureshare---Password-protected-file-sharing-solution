const express = require('express');
const bcrypt = require("bcrypt");
require('dotenv').config();
const multer = require("multer");
const mongoose = require("mongoose");
const File = require('./models/file');
const app = express();

const PORT = process.env.PORT || 4000
app.use(express.urlencoded({extended: true}));

const upload = multer({dest: "uploads"})   //this upload function is set in app.post route
                                          //file will get saved in uploads folder destination

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

app.set("view engine","ejs");           //Setting view engine as ejs


app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/upload", upload.single("file"),async(req,res)=>{
    const fileData ={
     path: req.file.path,
     originalName:req.file.originalname,
    }

    if(req.body.password!= null && req.body.password !=="")
    {
        fileData.password = await bcrypt.hash(req.body.password,10); //password and salt    
    }

    const file = await File.create(fileData);
   
    res.render("index",{fileLink : `${req.headers.origin}/file/${file.id}`});

})

app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req,res){
    try {
        const fileId = req.params.id;
        const file = await File.findById(fileId);

        if(file.password !=null)
        {
            if(req.body.password == null)
            {
                res.render("password");
                return;
            }
        }


            if(!(await bcrypt.compare(req.body.password, file.password)))
            {
                res.render("password",{error:true});
                return 
            }

            file.downloadCount++;
            await file.save();
            res.download(file.path, file.originalName);
        }

     catch (error) {
     console.error(error);
     res.status(500).send("Internal Server Error");
    }
}


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});