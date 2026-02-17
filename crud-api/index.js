import sqlite3 from 'sqlite3';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


const db = new sqlite3.Database('./emp_database.db', (err) => {
    if (err) {
        console.log(err)
    } else {
        db.run(`CREATE TABLE "employees" (
            "id"    INTEGER PRIMARY KEY AUTOINCREMENT,
            "name"    TEXT,
            "phoneNumber"    TEXT NOT NULL UNIQUE,
            "position"    TEXT,
            "email"    TEXT NOT NULL UNIQUE
        )`, (err) => {
            console.log(err)
            if (err) {
                console.log(`Table Already Exists`)
            }

            // let insert = `INSERT INTO employees VALUES (?, ?, ?, ?, ?)`
            // db.run(insert, [null, "FAISAL", "08973123123", "SE", "TESTING@gmail.com"], (err) => {
            //     if(err){
            //         console.log(err)
            //         console.log("SEED DATA FAILED")
            //     }else {
            //         console.log("SEED DATA SUCCESS")
            //     }
            // })
        })
    }
})


app.get("/employees", (req, res, next) => {
    db.all("SELECT * FROM employees", [], (err, data) => {
        if (err) {
            res.status(500).json({
                "error": err.message
            })

            return
        }

        res.status(200).json({
            data,
            message: "Success Get All Employee"
        })
    })
})

// create employee
app.post("/employees", (req, res, next) => {
    let body = req.body

    console.log(req.body, "Creating BODY")

    let insert = `INSERT INTO employees VALUES (?, ?, ?, ?, ?)`
    db.run(insert, [null, body.name, body.phone, body.position, body.email], (err) => {
        if (err) {
            res.status(500).json({
                "error": err.message
            })
        } else {
            res.status(200).json({
                data: body,
                message: "Success Creating Employee"
            })
        }
    })

})

// patch employee
app.put("/employees", (req, res, next) => {
    const body = req.body

    const update = `UPDATE employees SET name = ?, phoneNumber = ?, position = ?, email = ? WHERE id = ?`
    db.run(update, [body.name, body.phoneNumber, body.position, body.email, body.id], (err) => {
        if (err) {
            res.status(500).json({
                "error": err.message
            })
        } else {
            res.status(200).json({
                data: body,
                message: "Updated Data Successfull"
            })
        }
    })
})



// delete employee
app.delete("/employees/:id", (req, res, next) => {
    const params = req.params

    const deleteData = `DELETE FROM employees WHERE id = ?`
    db.run(deleteData, [params.id], (err) => {
        if (err) {
            res.status(500).json({
                "error": err.message
            })
        } else {
            res.status(200).json({
                data: params,
                message: "Deleted Data Successfull"
            })
        }
    })
})