import { Sequelize } from 'sequelize';
import { connection } from '../database/database.js';
import Category from '../categories/Category.js';
const Article = connection.define('articles', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	slug: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});

await Article.belongsTo(Category); // Um Artigo pertence a Uma Categorias
await Category.hasMany(Article); // Uma categoria possui muitos artigos

export default Article;
