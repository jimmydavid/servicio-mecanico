const router = require('express').Router();
const Transaccion = require('../models/transaccion_model');
const {
    addTransaccion,
    addServicioTransaccion,
    getTransaccion,
    getTransacciones,
    getPresupuesto,
} = require('../controller/transaccion.controller');

router.post('/', addTransaccion);
router.post('/:id/servicio/', addServicioTransaccion); // Agrega un servicio a la trasaccion del parámetro :id
router.get('/:id', getTransaccion); // Devuelve el detalle de serivicios de la transaccion del parámetro :id 
router.get('/', getTransacciones);
router.get('/:id/presupuesto', getPresupuesto); // Calcula el presupuesto de la transaccion del parámetro :id

module.exports = router;