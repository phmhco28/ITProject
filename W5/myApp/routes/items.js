var express = require('express');
var router = express.Router();
var ItemModel = require('../models/items');



router.get('/', async function(req, res, next) {
    var list = await ItemModel.list();
    res.status(400).json({
        success: true,
        data: list,
    });
});

router.get('/:id', async function(req, res, next) {
    var item = await ItemModel.getById(req.params.id);
    res.status(400).json({
        success: true,
        data: item,
    });
});

router.post('/add', function(req, res, next) {
    var params = {};
    params.name = req.body.name;
    params.status = req.body.status;
    params.ordering = req.body.ordering;
    params.created = req.body.created;
    params.modified = req.body.modified;
    var list = ItemModel.add(params);
    res.status(400).json({
        success: true,
        data: list
    });
});

router.put('/edit/:id', function(req, res, next) {
    res.write("EDIT item id: " + req.params.id);
    res.end();
});

module.exports = router;
