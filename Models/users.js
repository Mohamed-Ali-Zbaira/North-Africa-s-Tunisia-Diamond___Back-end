const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String
    },
    LastName: {
        type: String
    },
    password:{
        type:String
    },
    email: {
        type: String ,
        unique:true
    }, 
    role: {
        type: String
    },
})
module.exports=User;