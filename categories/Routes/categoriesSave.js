import slugify from 'slugify';
import updateCategories from '../CategoriesUpdater.js';
import Category from '../Category.js';

export default function categoriesSave(req, res) {
	let title = req.body.title;
	if (title != undefined) {
		Category.create({
			title: title,
			slug: slugify(title),
		}).then(() => {
			updateCategories();
			res.redirect('/admin/categories');
		});
	} else {
		res.redirect('/admin/categories/new');
	}
}
