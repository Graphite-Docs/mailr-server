const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrgModel = new Schema({
    orgId: String, 
    creator: String, 
    creatorEmail: String,
    apiKey: String
});

module.exports = Org = mongoose.model('Organization', OrgModel);