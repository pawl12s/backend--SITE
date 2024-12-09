import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/produtos", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "mysql-marketplace-estudante-57dd.f.aivencloud.com",
            user: process.env.dbuser ? process.env.dbuser : "avnadmin",
            password: process.env.dbpassword ? process.env.dbpassword : "AVNS_0a_3E2vf_5P_Q1FJapL",
            database: process.env.dbname ? process.env.dbname : "defaultdb",
            port: process.env.dbport ? parseInt(process.env.dbport) : 13293
        })
        const [result, fields] = await connection.query("SELECT * from produtos")
        await connection.end()
        res.send(result)
    } catch (e) {
        res.status(500).send("Server ERROR")
    }
})
app.post("/produtos", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "mysql-marketplace-estudante-57dd.f.aivencloud.com",
            user: process.env.dbuser ? process.env.dbuser : "avnadmin",
            password: process.env.dbpassword ? process.env.dbpassword : "AVNS_0a_3E2vf_5P_Q1FJapL",
            database: process.env.dbname ? process.env.dbname : "defaultdb",
            port: process.env.dbport ? parseInt(process.env.dbport) : 13293
        })
        const {id,nome,descricao,preco,imagem} = req.body
        const [result, fields] = 
                    await connection.query("INSERT INTO produtos VALUES (?,?,?,?,?)",
                            [id,nome,descricao,preco,imagem])
        await connection.end()
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send("Server ERROR")
    }
})


app.get("/usuarios", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "mysql-marketplace-estudante-57dd.f.aivencloud.com",
            user: process.env.dbuser ? process.env.dbuser : "avnadmin",
            password: process.env.dbpassword ? process.env.dbpassword : "AVNS_0a_3E2vf_5P_Q1FJapL",
            database: process.env.dbname ? process.env.dbname : "defaultdb",
            port: process.env.dbport ? parseInt(process.env.dbport) : 13293
        })
        const [result, fields] = await connection.query("SELECT * from usuarios")
        await connection.end()
        res.send(result)
    } catch (e) {
        res.status(500).send("Server ERROR")
    }
})

app.get("/cadastro-carrinho", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.dbhost ? process.env.dbhost : "mysql-marketplace-estudante-57dd.f.aivencloud.com",
            user: process.env.dbuser ? process.env.dbuser : "avnadmin",
            password: process.env.dbpassword ? process.env.dbpassword : "AVNS_0a_3E2vf_5P_Q1FJapL",
            database: process.env.dbname ? process.env.dbname : "defaultdb",
            port: process.env.dbport ? parseInt(process.env.dbport) : 13293
        })
        const [result, fields] = await connection.query("SELECT * from carrinho")
        await connection.end()
        res.send(result)
    } catch (e) {
        res.status(500).send("Server ERROR")
    }
})

app.listen(8000, () => {
    console.log("Iniciei o servidor")
})