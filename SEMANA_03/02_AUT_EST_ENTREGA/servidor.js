 const express = require('express'); 
    const bodyParser = require('body-parser');
    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'ponderada_s3.db';

    const hostname = '127.0.0.1';
    const port = 3030;
    const app = express();

    /* Colocar toda a parte estática no frontend */
    app.use(express.static("../frontend/"));

    /* Definição dos endpoints */
    /******** CRUD ************/
    app.use(express.json());

    // Retorna todos registros (é o R do CRUD - Read)
    app.get('/usuarios', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT * FROM Formação ORDER BY Curso COLLATE NOCASE';
            db.all(sql, [],  (err, rows ) => {
                if (err) {
                    throw err;
                }
                res.json(rows);
            });
            db.close(); // Fecha o banco
    });

    // Insere um registro (é o C do CRUD - Create)
    app.post('/insereUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        //`asdasd ${req.body.ID_formação}`
        sql = "INSERT INTO Formação (ID_formação, Curso, Duração, Descrição, ID_Pessoa) VALUES ('" + req.body.ID_formação + "','" + req.body.Curso + "', '" + req.body.Duração + "', '" + req.body.Descrição + "', '" + req.body.ID_Pessoa + "')";
        console.log(sql);
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }	
        });
        res.write('<p>FORMAÇÃO INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        db.close(); // Fecha o banco
        res.end();
    });

    // Monta o formulário para o update (é o U do CRUD - Update)
    app.get('/atualizaUsuario', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "SELECT * FROM Formação WHERE ID_formação="+ req.query.ID_formação;
        console.log(sql);
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    // Atualiza um registro (é o U do CRUD - Update)
    app.post('/atualizaUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "UPDATE Formação SET Curso='" + req.body.Curso + "', Duração = '" + req.body.Duração + "' , Descrição='" + req.body.Descrição + "' WHERE ID_formação='" + req.body.ID_formação + "'";
        console.log(sql);
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            res.end();
        });
        res.write('<p>FORMAÇÃO ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
        db.close(); // Fecha o banco
    });

    // Exclui um registro (é o D do CRUD - Delete)
    app.get('/removeUsuario', urlencodedParser, (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        sql = "DELETE FROM Formação WHERE ID_formação='" + req.query.ID_formação + "'";
        console.log(sql);
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            res.write('<p>FORMAÇÃO REMOVIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
            res.end();
        });
        db.close(); // Fecha o banco
    });

    app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    });