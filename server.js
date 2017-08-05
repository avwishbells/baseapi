var express = require('express');
var app = express();

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get((req, res) => {
        var responseJson = { hello: "This is my api" };
        res.json(responseJson);
    });

app.use('/api', bookRouter);
var port = (process.env.PORT || 3200);
app.get('/', (req, res) => {
    res.send('welcome to my api');
});

app.listen(port, () => {
    console.log(`App is now running on port`);
});