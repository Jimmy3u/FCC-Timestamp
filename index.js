// index.js
// where your node app starts

function parseDate(req, res){

}

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:date?", (req, res) => {
 
  dateString = Number(req.params.date) ? Number(req.params.date) : req.params.date;
  date =  new Date(dateString);

  if (req.params.date === undefined) date = new Date();
  
  if (date == 'Invalid Date')
    res.json({error: 'Invalid Date'})
  else
    res.json({
      unix: Date.parse(date),
      utc: date.toUTCString()
    })
  }
);



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port 127.0.0.1:' + listener.address().port);
});
