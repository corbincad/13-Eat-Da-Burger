var mysql = require ("mysql2");

var connection;

if (process.env.JAWSDB_URL){
    connectioni = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306, 
        user: 'root',
        password: 'MilohReese!1',
        database: 'burger_db'
    });
}

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;