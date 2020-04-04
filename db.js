const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./ws.db")

db.serialize(function() {
    //criar tabela

    db.run(`
            CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT 
            );
    `)
    
    //inserir dado na tabela

    /*const query = `
    INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
    ) VALUES (?,?,?,?,?);`

    const values =[
    'https://image.flaticon.com/icons/svg/1830/1830794.svg',
    'Cursos de Programação',
    'Estudo',
    ' Lorem ipsum dolor, sit amet consectetur',
    'https://www.google.com/'
] 

    db.run(query, values, function(err){
        if (err) return console.log(err)
        console.log(this)
    })

    
    //consultar dados na tabela

    db.all(`SELECT * FROM ideas`,function(err, rows){
        if (err) return console.log(err)
        
        console.log(rows)
    })

    // exemplo para deletar do database
    db.run(`DELETE FROM ideas WHERE id = ?`,[1], function(err){

            if (err) return console.log(err)

            console.log("deletei, deu certo", this)
    })*/ 


})

module.exports = db