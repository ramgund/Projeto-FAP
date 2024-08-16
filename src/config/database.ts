import mysql from "mysql2/promise";

const userDb = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hoteldb",
});

export default userDb;
