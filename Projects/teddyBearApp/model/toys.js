const mongoose = require('mongoose')
let newToy = new mongoose.Schema({
    imagePath:String,
    saleBuy:String,
    category:String,
    proName: String,
    ItemStatus: String,
    price: String,
    description: String, 
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments'
    }]
})
const Toy = mongoose.model('Toy', newToy);
module.exports = Toy;


