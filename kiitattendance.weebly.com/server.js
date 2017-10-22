
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var index = {

	title='Home || Attendance Inspector';
	heading='Home';
	content = `abcd `;
}
function createTemplate (data) {
	
	var title = data.title;
	var heading = data.heading;
	var content = data.content;

		var htmltemp =
		`
		 <!DOCTYPE html>
		<html>
		  <head>
		    <meta charset="UTF-8">
		    <title>${title}</title>
		  </head>
		  <body>
		  ${content}
		  </body>
		</html>

		`;
return htmltemp;
}

app.get('/', function (req, res) {
  res.send(createTemplate(index));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'style.css'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Attendance App listening on port ${port}!`);
});
