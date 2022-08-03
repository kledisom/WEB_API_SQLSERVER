const express = require('express');
const app = express();  
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT; //porta padrão
const sql = require('mssql');
const connStr = "Server=localhost;Database=DATA_KENSYOU;User Id=sa;Password=hiper;trustServerCertificate=true;";


//fazendo a conexão global
sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

 
//configurando o body parser para pegar POSTS 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//essa rota busca o dado através do LINE_NAME
router.get('/clientes/:nome?', (req, res) => {
    let filter = '';
    if(req.params.nome) filter = ' WHERE LINE_NAME=' + req.params.nome;
    execSQLQuery('SELECT * FROM LINE_STATUS_ALL' + filter, res);
    console.log(filter)
   });

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//função de pesquisa no SQL SERVER
function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

