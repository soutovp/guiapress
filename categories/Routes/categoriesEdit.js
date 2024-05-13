import Category from '../Category.js';
export default async function categoriesEdit(req, res) {
	const id = req.params.id;
	isNaN(id) ? res.redirect('/admin/categories') : '';
	await Category.findByPk(id)
		.then((category) => {
			category != undefined ? res.render('admin/categories/edit', { category: category }) : res.redirect('/admin/categories');
		})
		.catch((err) => {
			console.log(err);
			res.redirect('/admin/categories');
		});
}
