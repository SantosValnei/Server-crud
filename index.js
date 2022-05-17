const express = require("express");
const app = express();
const mysql = require('mysql2');
const port = 8080;
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud-simples"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { usuario } = req.body;

    let SQL = "INSERT INTO pessoas ( name, usuario ) VALUES (?, ?)";

    db.query(SQL, [name, usuario], (err, result) => {
        console.log(err)
    })
});

app.get("/listar", (req, res) => {
    
    let SQL = "SELECT * FROM pessoas";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(port)
