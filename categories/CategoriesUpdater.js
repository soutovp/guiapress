import Category from './Category.js';
import fs from 'fs';

export let categoriesList = {};
async function updateCategories() {
	console.log('Atualizando Categorias...');
	await Category.findAll().then((categories) => {
		fs.writeFileSync('./categories/services/categoriesList.json', JSON.stringify(categories), 'utf-8');
		categoriesList = JSON.stringify(categories);
		console.log('Categories atualizados..');
	});
}
export default updateCategories;
