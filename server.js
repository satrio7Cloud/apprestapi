const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// call routes
const routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});