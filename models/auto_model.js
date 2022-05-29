const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoSchema = new Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    anio: {
        type: Number,
        required: true 
    },
    patente: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required:true
    },
    propietario: {
        type: Schema.Types.ObjectId, ref: 'Propietario'
    }

});

module.exports = mongoose.model('Auto', autoSchema);