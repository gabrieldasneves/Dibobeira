/* 
função pronta para printar no terminal
console.log("hello world");
*/

/*
basico de javascript:
    variaveis:
        const mensagem = "oi" // string
        console.log(mensagem);

        cons number = 15 //int
        console.log(number);
    
    funções:
        function soma(numero1, numero2){
            console.log(numero1 + numero2);
        }

        soma(1,2);

    objetos:
        const xicara = {
            cor: white,
            tamanho: 10,
            receber(){
                <logica>
            }
        }
        console.log(xicara);
        console.log(xicara.cor);
*/

// usando o express para criar e configurar o servidor
const express = require("express") // dizendo que vou usar o express
const server = express()
const db = require("./db") 

// configurar arquivos estaticos
server.use(express.static("public"))


//habilitar uso do request.body para o server.post
server.use(express.urlencoded({extended: true}))

// vou usar o nunjucks (npm i nunjucks) para poder declarar variaveis no html
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
    
})

// criando uma rota "/"  e captura o pedido de clientepara responder
server.get("/", function(request, response){

    db.all(`SELECT * FROM ideas`,function(err, rows){
        if (err){
            console.log(err)
            return response.send("Erro no banco de dados")
        } 

        const reversedIdeas = [...rows].reverse()
        const lastIdeas = []
        for (idea of reversedIdeas){
            if(lastIdeas.length < 2){
                lastIdeas.push(idea)
            }
        }    
        return response.render("index.html", {ideas: lastIdeas})        
       
    })
   
})



server.get("/ideias", function(request, response){

    db.all(`SELECT * FROM ideas`,function(err, rows){
        if (err){
            console.log(err)
            return response.send("Erro no banco de dados")
        } 
        
        const reversedIdeas = [...rows].reverse()
        return response.render("ideias.html", {ideas: reversedIdeas})

    })

    
})


server.post("/", function(request,response){
    const query = `INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
) VALUES (?,?,?,?,?);`

const values =[
request.body.image,
request.body.title,
request.body.category,
request.body.description,
request.body.link]  

db.run(query, values, function(err){
    if (err){
        console.log(err)
        return response.send("Erro no banco de dados")
    }  
    return response.redirect("/ideias")
})
})

// ligando o servidor na porta 3000
server.listen(3000)

/*
para evitar ficar iniciando o servidor toda hora, 
baixe o nodemon (npm i nodemon)
e, no arquivo server.js, troque o start pelo nodemon server.js
*/
