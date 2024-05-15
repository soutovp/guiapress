import slugify from 'slugify';
import updateCategories from '../CategoriesUpdater.js';
import Category from '../Category.js';

export default function categoriesUpdate(req, res) {
	const id = req.body.id;
	const title = req.body.title;
	Category.update(
		{
			title: title,
			slug: slugify(title),
		},
		{
			where: {
				id: id,
			},
		}
	).then(() => {
		updateCategories();
		// console.log(req.socket.remoteAddress);
		res.redirect('/admin/categories');
	});
}
