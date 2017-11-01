var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kiit"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

con.query("use attdnc", function (err, result) {
    if (err) throw err;
    console.log("Database used");
});
con.query("SELECT * FROM profiles;", function (err, result, fields) {
      if (err) throw err;
      console.log(result)
});
});
