import express from 'express';
export const router = express.Router();
import updateCategories from './CategoriesUpdater.js';
//Routes
import categoriesApi from './Routes/categoriesApi.js';
import categories from './Routes/categories.js';
import categoriesDelete from './Routes/categoriesDelete.js';
import categoriesSave from './Routes/categoriesSave.js';
import categoriesNew from './Routes/categoriesNew.js';
import categoriesEdit from './Routes/categoriesEdit.js';
import categoriesUpdate from './Routes/categoriesUpdate.js';

router.get('/admin/categories', categories);
router.get('/admin/categories/new', categoriesNew);
router.get('/admin/categories/api', categoriesApi);
router.get('/admin/categories/edit/:id', categoriesEdit);
router.post('/categories/save', categoriesSave);
router.post('/categories/delete', categoriesDelete);
router.post('/categories/update', categoriesUpdate);
updateCategories('./categories/services/categoriesList.json');
