const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseModel = new Schema({
    listId: String,
    responses: Array,
    orgId: String
});

module.exports = Response = mongoose.model('Response', ResponseModel);