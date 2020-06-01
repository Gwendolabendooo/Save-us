var mysql = require('mysql');
const fs = require('fs');

 
console.log('Get connection ...');

var a = 0;
 
var conn = mysql.createConnection({
  database: 'test',
  host: "localhost",
  user: "root",
  password: ""
});

            //    conn.connect(function(err) {
            //        if (err) throw err;
              //      console.log("Connected!");
                //    var sql = "INSERT INTO clients (Mail, Mdp, Pseudo) VALUES ('test45@gmail.com', 'java', 'Antoine')";
                  //  conn.query(sql, function (err, result) {
                    //if (err) throw err;
                  // console.log("1 record inserted");
                  // });
                //});

conn.connect(function(err) {
  if (err) throw err;
  conn.query("SELECT * FROM clients, notes WHERE notes.Id_client = 2 AND clients.Id_client = 2", function (err, result, fields) {
    if (err) throw err;
    var data = JSON.stringify(result);
    fs.writeFileSync('BDD.json', data); // Ecrit dans le json la data
    console.log(result);
    while (a = 0){
      console.log(result);
    }
  });
});