import fs from 'fs';

export default function categories(req, res) {
	res.render('admin/categories/index', { categories: fs.readFileSync('./categories/services/categoriesList.json', 'utf-8') });
}
