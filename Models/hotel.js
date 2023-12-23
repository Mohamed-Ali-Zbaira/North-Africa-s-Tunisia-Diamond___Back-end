const mongoose = require('mongoose');

const Hotel = mongoose.model('Hotel', {
    id: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    phone: {
        type: String
    },
    description: {
        type: String
    },
    avis: {
        type: String
    },
    localisation: {
        type: String
    },
    image: {
        type: String
    },
    rangshotel: {
        type: Array
    },


})

module.exports=Hotel;