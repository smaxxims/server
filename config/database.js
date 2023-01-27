import mysql from "mysql2";

const db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

export default db;