const express = require("express");
const mysql = require('mysql2');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'storage',
    password: 'K@123hushwant'
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM input";
    try {
        connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    } catch (err) {
        return res.json("An Error Occured")
    }
})

app.post("/comment", (req, res) => {
    const sql = "INSERT INTO input (`content`) VALUES (?)";
    const values = [req.body.content];
    if(values != "")
    connection.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

// The Update function doesn't work currently
// app.put("/update/:id", (req, res) => {
//     const sql = "UPDATE input SET `content`=? WHERE id=?"
//     const id = req.params.id;
//     connection.query(sql, [req.body.content, id], (err, res) => {
        
//     })
// })

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM input WHERE id = ?";
    const id = req.params.id;
    console.log(id);
    connection.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: `Error Inside Server`})
        return res.json(result)
    })
})


app.listen(8080, () => {
    console.log("listening");
})