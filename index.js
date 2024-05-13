import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import { connection } from './database/database.js';
import { router as CategoriesController } from './categories/CategoriesController.js';
import { router as ArticlesController } from './articles/ArticlesController.js';
//Models
import Article from './articles/Article.js';
import Category from './categories/Category.js';
// connection.sync({ force: true });
//Static
app.use(express.static('public'));
//View Engine
app.set('view engine', 'ejs');
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Database
connection
	.authenticate()
	.then(() => {
		console.log('Conexão feita com sucesso ao banco de dados!');
	})
	.catch((e) => {
		console.log(e);
	});
//Controllers
app.use('/', CategoriesController);
app.use('/', ArticlesController);
app.get('/', (req, res) => {
	res.render('index');
});
//Server Listen
app.listen(80, () => {
	console.log('O servidor está rodando!');
});
