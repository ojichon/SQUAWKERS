const express = require('express');

const app = express();

const path = require('path')

app.use(express.json());
app.use(express.static('/public'))
app.use(express.static(__dirname + '/public' ));
app.use(express.static(path.join(__dirname, "/public")));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const PORT = 3000;




app.get('/', function(req,resp,next) {
    resp.render('signup')
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


