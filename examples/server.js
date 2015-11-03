var express = require('express');
var rewrite = require('express-urlrewrite');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var WebpackConfig = require('./webpack.config');

var app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
    publicPath: '/__build__/',
    stats: {
        colors: true
    }
}));

var fs = require('fs');
var path = require('path');


app.use(rewrite(path.join(__dirname, '/app/index.html'), '/index.html'));

app.use(express.static(__dirname));

app.listen(9000, function () {
    console.log('Server listening on 9000, Ctrl+C to stop')
});
