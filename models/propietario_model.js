const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propietatioSchema = new Schema({
    apellido: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Propietario', propietatioSchema);