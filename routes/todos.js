const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Index page title',
        isIndex: true,
    });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create page title',
        isCreate: true,
    });
})

module.exports = router;