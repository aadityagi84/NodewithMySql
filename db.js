const mysql = require("mysql2");

const dbConnect = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  });

  connection.connect(async function (err) {
    try {
      if (err) {
        console.log(err);
      } else {
        console.log("database connected ");
        // to create databse
        connection.query("CREATE DATABASE test1", async function (err, res) {
          try {
            if (err) {
              console.log(err);
            }
            console.log("Database will be created ");
            connection.query("USE test1"); // to use databse
            var sql =
              "CREATE TABLE customer(cid INT NOT NULL,cname VARCHAR(50) NOT NULL ,phone INT(10))";
            connection.query(sql, async function name(err, res) {
              try {
                if (err) {
                  console.log(err);
                }
                console.log("table created ");
              } catch (error) {
                console.log(error);
              }
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = dbConnect;
