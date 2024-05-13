import fs from 'fs';
export default function categoriesReadDBService() {
	const content = fs.readFileSync('./categoriesList.json', 'utf-8');
	return JSON.parse(content);
}
