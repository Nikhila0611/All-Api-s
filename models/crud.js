const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    EmpID:{type:String,unique:true},
    EmpName:{type:String,required:true},
    Role:{type:String,required:true},
    Teamlead:{type:String,required:true},
    MailID:{type:String,required:true}
    
});

module.exports = mongoose.model('crud',userSchema);