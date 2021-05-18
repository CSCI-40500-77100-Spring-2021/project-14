const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

//mongo "mongodb+srv://cluster0.v2dyk.mongodb.net/myFirstDatabase" --username admin-hridoy

mongoose.connect("mongodb+srv://admin-hridoy:skyIsLimitless007@cluster0.v2dyk.mongodb.net/gameDB", {useNewUrlParser: true, useUnifiedTopology: true});

const gameSchema = new mongoose.Schema({
    email: String,
    password: String
});

const secret = "RandomConstantUsedForEncryption.";
gameSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const Game = new mongoose.model("Game", gameSchema);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req,res) => {
    res.render("register");
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.post("/register", (req,res) => {
    const newGame = new Game({
        email: req.body.username,
        password: req.body.password
    });

    newGame.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render("landing");
        }
    });
});

app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    Game.findOne({email: username}, (err, foundGame) => {
        if(err){
            console.log(err);
            res.render("errorPage");
        } else {
            if(foundGame) {
                if(foundGame.password === password) {
                    res.render("landing");
                } else {
                    res.render("errorPage");
                }
            }
        }
    });
});


// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }
// app.listen(port);


app.listen(3000, function() {
    console.log("Server is running sucessfully");
});