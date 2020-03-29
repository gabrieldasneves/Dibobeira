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

// criando uma rota "/"  e captura o pedido de clientepara responder
server.get("/", function(request, response){
    return response.sendFile(__dirname + "/index.html")
})

// ligando o servidor na porta 3000
server.listen(3000)

/*
para evitar ficar iniciando o servidor toda hora, 
baixe o nodemon (npm i nodemon)
e, no arquivo server.js, troque o start pelo nodemon server.js
*/
