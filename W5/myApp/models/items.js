var ItemModel = require('../schemas/items')

module.exports = {
    list:async()=>{
        var list = await ItemModel.find({}).exec();
        return list;
    },
    getById:async(id) => {
        var item = await ItemModel.findById(id).exec();
        return item;
    },
    add:(params) => {
        var result = ItemModel(params);
        result.save();
        return result;
    },
}