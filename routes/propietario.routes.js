const router = require('express').Router();
const Propietario = require('../models/propietario_model');
const {
     getPropietario,
     addPropietario,
     getPropietarios,
} = require('../controller/propietario.controller');

router.get('/:id', getPropietario);
router.get('/',getPropietarios)
router.post('/',addPropietario);

module.exports = router;