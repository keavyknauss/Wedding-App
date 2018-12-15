var express = require('express'),

    router = express.Router(),

    logger = require('../../config/logger'),

    mongoose = require('mongoose'),

    Todo = mongoose.model('Todo'),

    asyncHandler = require('express-async-handler');



module.exports = function (app, config) {

    app.use('/api', router);



    router.get('/todos', asyncHandler(async (req, res) => {

        logger.log('info', 'Get all ToDo List');

        let query = Todo.find();

        query.sort(req.query.order)

        await query.exec().then(result => {

            res.status(200).json(result);

        })

    }));





    router.get('/todos/:id', asyncHandler(async (req, res) => {

        logger.log('info', 'Get ToDo %s', req.params.id);

        await Todo.findById(req.params.id).then(result => {

            res.status(200).json(result);

        })

    }));





    router.post('/todos', asyncHandler(async (req, res) => {

        logger.log('info', 'Creating To Do');

        var todo = new Todo(req.body);

        const result = await todo.save()

        res.status(201).json(result);

    }));



    router.put('/todos', asyncHandler(async (req, res) => {

        logger.log('info', 'Updating To Do');

        await Todo.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })

            .then(result => {

                res.status(200).json(result);

            })

    }));



    router.delete('/todos/:id', asyncHandler(async (req, res) => {

        logger.log('info', 'Deleting To Do %s', req.params.id);

        await Todo.remove({ _id: req.params.id })

            .then(result => {

                res.status(200).json(result);

            })

    }));







};