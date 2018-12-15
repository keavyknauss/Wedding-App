var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;



var todoSchema = new Schema({

    todo: { type: String, require:true},

    priority:  {type: String, enum:['Critical','Medium','We have more time']},

    done: { type: Boolean, default: false },

    assignee: {type: Schema.Types.ObjectId}

});





module.exports = Mongoose.model('Todo', todoSchema);