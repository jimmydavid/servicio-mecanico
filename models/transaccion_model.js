const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaccionSchema = new Schema({
    auto: {
        type: Schema.Types.ObjectId, ref: 'Auto',
    },
    servicios: 
          [{ type: Schema.Types.ObjectId, ref: 'Servicio'}],
    fecha: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Transaccion', transaccionSchema);