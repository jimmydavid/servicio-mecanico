const router = require('express').Router();
const Auto = require('../models/auto_model');
const {
    getAuto,
    getAutos,
    addAuto,
    deleteAuto,
} = require('../controller/auto.controller');

router.get('/:id', getAuto);
router.get('/',getAutos);
router.post('/',addAuto);
router.delete('/:id', deleteAuto);

module.exports = router;
