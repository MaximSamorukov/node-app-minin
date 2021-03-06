const { Router } = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async (req, res) => {
    const todos = await Todo.find({}).lean()
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

router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(req.body.id);
    console.log(req.body.completed);
    console.log(!!req.body.completed);
    todo.completed = !!req.body.completed;
    console.log(todo);
    await todo.save();

    res.redirect('/');
})

module.exports = router;