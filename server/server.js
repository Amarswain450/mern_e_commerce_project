const express = require('express');
const env = require('./config/envConfig');
const bodyParser = require('body-parser');
const app = express();
const port = env.PORT || 5000;

//config database
const connect = require('./config/db');
connect();

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//config router
const router = require('./routes/users');
app.use('/api', router);


app.listen(port, () => {
    console.log(`server running on port number ${port}`);
});