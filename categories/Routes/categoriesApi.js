import fs from 'fs';
export default function categoriesApi(req, res) {
	res.send(JSON.parse(fs.readFileSync('./categories/services/categoriesList.json')));
}
