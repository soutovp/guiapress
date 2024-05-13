import express from 'express';
//Routes
import articlesNew from './Routes/articlesNew.js';
import articles from './Routes/articles.js';
export const router = express.Router();

router.get('/articles', articles);
router.get('/admin/articles/new', articlesNew);
