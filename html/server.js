var express = require('express');
var morgan = require('morgan');
var path = require('path');
var mysql = require('mysql');

var app = express();
app.use(morgan('combined'));

var index = {

	title:'Home || Attendance Inspector',
	content:`
			<ul class="menu">
			<li class="menu"><a class="active" href="/">Home</a></li>
			<li class="menu"><a class="menu2" href="/login">Login</a></li>
			<li class="menu"><a class="menu2" href="/signup">Sign Up</a></li>
			<li class="menu"><a class="menu2" href="/about">About</a></li>
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
		<button class="button, button1" onclick="window.location.href='/login'"><h3>Login</h3></button>
		<button class="button, button1" onclick="window.location.href='/signup'"><h3>Sign Up</h3></button> `
}
var login = {
	title:'Login || Attendance Inspector',
	content:`
			<ul class="menu">
			<li class="menu"><a  href="/">Home</a></li>
			<li class="menu"><a class="active" href="/login">Login</a></li>
			<li class="menu"><a  href="/signup">Sign Up</a></li>
			<li class="menu"><a  href="/about">About</a></li>
			</ul>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>

			<form class="center" name="LoginForm" action="login.php" method='post'>
			Enter your Username: <input type="text" name="username" id="username" size="25" maxlength="15" value="user">
			<br>
			Enter your Password: <input type="password" name="password" id="password" size="25" maxlength="20" value="password">
			<br>
			<input type="submit" name="submit" value="LOGIN">
			<br> `
}
function createTemplate (data) {

	var title = data.title;
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
app.get('/login', function (req, res) {
  res.send(createTemplate(login));
});
app.get('/signup', function (req, res) {
  res.send(createTemplate(signup));
});
app.get('/about', function (req, res) {
  res.send(createTemplate(about));
});
app.get('/defstyle.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'defstyle.css'));
});
app.get('/login.php', function (req, res) {
  res.sendFile(path.join(__dirname, '/', 'login.php'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Attendance App listening on port ${port}!`);
});
