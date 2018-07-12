
var cors         = require('cors');
var morgan       = require('morgan');
var express      = require('express');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var { server }    = require('../configuration');

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
  ].join(' ')
})

var app  = express();
var http = require('http').Server(app);

app.use(morgan('combined'));
app.use(cors({origin:true,credentials:true}));
app.options(cors({origin:true,credentials:true}));

//  Environment variables
//app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  next();
});

//  Routes
app.use('/api', require('../routes/api'));
app.use('/',    require('../routes/public'));

app.set('port', server.port);
app.set('name', server.name);

process.on("uncaughtException", function (err) {
  console.log({data: 'uncaughtException', error: err.stack});
});

http.listen(app.get('port'), function () {
  console.log('\033[0;32m[SERVER]\033[0m ' + app.get('name') + ' server running...');
  console.log('\033[0;32m[SERVER]\033[0m Port: ' , app.get('port'));
  console.log('\033[0;32m[SERVER]\033[0m Mode: ' , process.env.NODE_ENV ? 'development':'production');
  console.log('\033[0;32m[SERVER]\033[0m ' + new Date());
});

process.on('SIGTERM', function () {
    process.exit(0);
});
