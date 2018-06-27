var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var xx = require('./mang2.js')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
/*app.use(User.urlencoded({ extended: false}));
app.use(User.json());*/

app.use(express.static(__dirname))
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/cheps', function (req, res) {
//console.log(req)
    var user = new xx({
        "Name": req.body.Name,
        "Email": req.body.Email,
        "Subject": req.body.Subject,
        "Message": req.body.Message
    });
console.log(user)
    user.save(function (err, data) {
        console.log(data)
        res.json(data);
    })
});
app.get('/chekps', function (req, res) {
    res.render('cheps');
});


console.log("oii")

app.use('/mini', express.static(path.join(__dirname, 'mini')))
app.use(express.static(__dirname));
console.log(__dirname)

app.listen(4000)