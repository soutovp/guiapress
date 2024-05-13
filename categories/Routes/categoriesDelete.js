import updateCategories from '../CategoriesUpdater.js';
import Category from '../Category.js';

export default function categoriesDelete(req, res) {
	const id = req.body.id;
	if (id != undefined && !isNaN(id)) {
		Category.destroy({
			where: {
				id: id,
			},
		}).then(() => {
			updateCategories();
			res.redirect('/admin/categories');
		});
	} else {
		res.redirect('/admin/categories');
	}
}
