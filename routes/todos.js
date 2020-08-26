const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    await res.render('index', {
        title: 'Index page title',
        isIndex: true,
        todos,
    });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create page title',
        isCreate: true,
    });
})

router.post('/create', async (req, res) => {
    const title = req.body.title;
    const todo = new Todo({
        title,
    })
    await todo.save();
    res.redirect('/');


})

module.exports = router;