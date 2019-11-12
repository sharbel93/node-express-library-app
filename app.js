const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.get('/', function(req, res) {
   res.send('Hello from my library app');
});

app.listen(3000, function(){
   // console.log(`listening on port ${chalk.green(3000)}`);
   debug(`listening on port ${chalk.green(3000)}`);
});
