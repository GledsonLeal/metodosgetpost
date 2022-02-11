//instalar o express
//      npm install express --save
//instalar o nodemon, para não precisar fechar o servidor e abrir novamente depois que foi feita uma alteração no arquivo
//      npm install nodemon -g a fleg -g é para instalar de forma global no sistema

const express = require("express")// framework para trabalhar com servidor web. Framework orientado a rotas
const app = express()// instância do express.
const port = 8081


app.use(express.urlencoded())
app.use(express.json())

// rota é um caminho para a minha aplicação
app.get("/", (req, res)=>{
    res.send("Página Principal")
})
app.get("/cadastro", (req, res)=>{
    res.sendFile(__dirname+ "/html/cadastroAluno.html")
})
app.post("/listar_cadastro",(req, res)=>{// não consigo acessar pela url
    res.send(`Nome Completo: ${req.body.nome} ${req.body.sobreNome} E mail: ${req.body.email} `)
    //res.send("FORMULARIO RECEBIDO")
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na url http://localhost:${port}`)
})
