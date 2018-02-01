var express   = require('express');
var app = express();
var Router = require('react-router-dom').StaticRouter;

require('babel-core/register')({
    presets: ["react", "es2015"]
})
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var RouterBack = React.createFactory(require('./public/js/routerBack'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  var AppHTML = ReactDOMServer.renderToString(RouterBack({url: '/'}));
  res.render('index', {resultat: AppHTML});
});

app.get('/shop', function(req, res) {
  var AppHTML = ReactDOMServer.renderToString(RouterBack({url:'/shop'}));
  res.render('index', {resultat: AppHTML});
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
