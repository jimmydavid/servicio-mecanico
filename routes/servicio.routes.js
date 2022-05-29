const router = require('express').Router();
const Servicio = require('../models/servicio_model');
const {
    getServicio,
    getServicios,
    addServicio,
} = require('../controller/servicio.controller');

router.get('/:id', getServicio);
router.get('/', getServicios);
router.post('/', addServicio);

module.exports = router;
