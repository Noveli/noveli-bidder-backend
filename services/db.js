import { username, password } from './db_cred';
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "throughtime9",
  database: "noveli-bidder"
});

export default connection;