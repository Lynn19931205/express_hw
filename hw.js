const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<h1>首頁</h1>');
});

app.get('/api/query', function(req, res) {
    res.json(req.query);
});

app.get('/api/users/:number', function(req, res) {
    var a = {
        "id": 1,
        "name": "Joe",
        "age": 18
    };
    var b = {
        "id": 2,
        "name": "John",
        "age": 22
    };
    if (req.params.number == 1) {
        res.json(a);
    } else if (req.params.number == 2) {
        res.json(b);
    } else {
        res.send('NOT FOUND');
    }
});

app.post('/api/body', function(req, res) {
    res.json(req.body);
});
//全大寫: 呼叫json library
//小寫: res裡面的function是js

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
    res.status(404).send('not found');
});

app.listen(3000);
