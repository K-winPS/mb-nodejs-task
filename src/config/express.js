const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../api/routes/v1');
const error = require('../api/middlewares/error');

/**
* Express instance
* @public
*/
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());

app.use(methodOverride());

app.use(helmet());

app.use(cors());


app.use('/v1', routes);

app.use(error.converter);

app.use(error.notFound);

app.use(error.handler);

module.exports = app;
