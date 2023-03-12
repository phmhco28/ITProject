var mongoose = require('mongoose');
var config = require('../configs/config')

var ItemSchema = mongoose.Schema({
    name: 'string',
    status: 'string',
    ordering: 'string',
    created: {
      userId: 'string',
      userName: 'string',
      createdAt: Date
      },
      modified: {
        userId:  'string',
        userName: 'string',
        modifiedAt: Date,
    }
  });

module.exports = mongoose.model(config.collectionName, ItemSchema);