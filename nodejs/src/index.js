const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Ronaldo');`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Just The Ronis here!</h1>');
})

app.listen(port, ()=> {
    console.log("Application running on " + port);
})