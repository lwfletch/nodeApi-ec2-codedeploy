let express = require('express');
let bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('welcome to Node API');
})

app.get('/healthcheck', (req, res) => {
    res.send('healthcheck is fine');
})

app.get('/githubactions', (req, res) => {
    res.send('this is my new endpoint automatically deployed');
})

let server = app.listen(8080, function () {
   let port = server.address().port
   console.log("Listening at port %s", port)
})

module.exports = app;