const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
//View Engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Database
console.log('Se conectando ao banco de dados...')
connection.authenticate().then(()=>{
    console.log('Conexão feita com sucesso ao banco de dados!')
}).catch(e=>{
    console.log(`\n\nEncontrado o seguinte error\n\n${e}`)
})

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(80, ()=>{
    console.log('O servidor está rodando!')
})