import Category from '../Category.js';
import fs from 'fs';

export default async function categoriesUpdateDBService() {
	console.log('Atualizando Categorias...');
	await Category.findAll().then((categories) => {
		const data = JSON.parse(categories);
		console.log('Categorias atualizadas...');
	});
	fs.writeFileSync('./categoriesList.json', JSON.parse(categories), 'utf-8');
}
