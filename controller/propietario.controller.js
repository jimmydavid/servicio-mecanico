const Propietario = require('../models/propietario_model');

const getPropietario = async (req, res) => {
    const id_propietario = req.params.id;
    const propietario = await Propietario.findById(id_propietario)
        .then((propietario) => {
            return res.status(200).json({ propietario});
        })
        .catch((err)=> {
            return res.status(404).send('Dato no encontrado')
        });
};

const getPropietarios = async (req, res) => {
    const propietarios = await Propietario.find({})
        .then((propietarios) => {
            return res.status(200).json({ propietarios });
        })
        .catch((err) => {
            return res.status(404).json({ err });
        });
};

const addPropietario = async (req, res) => {
    const data = req.body;
    const inserted = await Propietario.create(data)
        .then((inserted) => {
            return res.status(201).json({inserted})
        })
        .catch((err) => {
            return res.status(400).json({ err })
        });
};

module.exports = {getPropietario, getPropietarios, addPropietario};