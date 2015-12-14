var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

var server = app.listen(8081, function () {
  //
  // var XLSX = require('xlsx');
  // var workbook = XLSX.readFile('xlsx/Barlenn_Sandwichclasscamp.xlsx');
  // var sheet_name_list = workbook.SheetNames;
  // sheet_name_list.forEach(function(y) {
  //     var worksheet = workbook.Sheets[y];
  //     var headers = {};
  //     var data = [];
  //     for(z in worksheet) {
  //         if(z[0] === '!') continue;
  //         //parse out the column, row, and value
  //         var col = z.substring(0,1);
  //         var row = parseInt(z.substring(1));
  //         var value = worksheet[z].v;
  //
  //         //store header names
  //         if(row == 1) {
  //             headers[col] = value;
  //             continue;
  //         }
  //
  //         if(!data[row]) data[row]={};
  //         data[row][headers[col]] = value;
  //     }
  //     //drop those first two rows which are empty
  //     data.shift();
  //     data.shift();
  //
  //     //console.log(data);
  //     data = JSON.stringify(data);
  //     //var data2 = console.log(data);
  //     fs.writeFile('json/products.json', data, function(err) {
  // 	    if(err) {
  // 	        return console.log(err);
  // 	    }
  //
  // 	    console.log("The file was saved!");
  // 	});
  //
  // });


  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static(__dirname + '/public/app'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/listProducts', function (req, res, next) {
   fs.readFile( "json/products.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


app.post('/postProducts', function (req, res, next) {
   // First read existing users.
   console.log(req.body);
		fs.writeFileSync( "json/products.json", JSON.stringify(req.body));
    res.end(JSON.stringify(req.body) );
})
