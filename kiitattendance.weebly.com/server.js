var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var index = {

	title:'Home || Attendance Inspector',
	heading:'Home',
	content:`
			<ul class="menu">
			<li class="menu"><a class="active" href="#home">Home</a></li>
			<li class="menu"><a class="menu2" href="#Login">Login</a></li>
			<li class="menu"><a class="menu2" href="#signup">Sign Up</a></li>
			<li class="menu"><a class="menu2" href="#about">About</a></li>
			</ul>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<h1 class="head">
		Welcome to KIIT Attendance Inspector
	  </h1><br>
		<button class="button, button1" onclick="window.location.href='#login'"><h3>Login</h3></button>
		<button class="button, button1" onclick="window.location.href='/signup'"><h3>Sign Up</h3></button> `
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
				<link rel="stylesheet" type="text/css" href="defstyle.css">
			  <body class="bckimg">
			  ${content}
			  </body>
			</html>
		`;
return htmltemp;
}

app.get('/', function (req, res) {
  res.send(createTemplate(index));
});

app.get('/defstyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'defstyle.css'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Attendance App listening on port ${port}!`);
});
