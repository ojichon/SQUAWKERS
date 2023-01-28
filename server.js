const express = require('express');
const { Sequelize }= require('sequelize');
const sequelize = new Sequelize('postgres://squawkers_user:NQaoSlynknTUtS9jUV2snM5AzeBMKQtk@dpg-cf9kefcgqg47p3vie890-a/squawkers')
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port:4000 })

// wss.on("connection", ws => {
//     console.log("New client connected!");

//     ws.on("close", () => {
//         console.log("Client has disconnected!");
//     });
// });



const app = express();

const path = require('path')

app.use(express.json());
app.use(express.static('/public'))
app.use(express.static(__dirname + '../public' ));
app.use(express.static(path.join(__dirname, "/public")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const PORT = 3000;


app.get('/signup', function(req,resp,next) {
    resp.render('signup')
})

app.get('/index', function(req,resp,next) {
    resp.render('index')
})

app.get('/login', function(req,resp,next) {
    resp.render('login')
})


app.post('/post', (req,resp,next) => {
    console.log(req.body);
    form.push(req.body);
    resp.send({
        message:"sqweek posted"
    })
})

app.listen(3000, ()=> {
    console.log(`server is listening at port ${PORT}`)
})


