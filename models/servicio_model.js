const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Servicio', servicioSchema);