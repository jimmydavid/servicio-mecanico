const { model } = require('mongoose');
const Auto = require('../models/auto_model');

const getAuto = async (req, res) => {
    const id_auto = req.params.id;
    const auto = await Auto.findById(id_auto).populate("propietario")
        .then((auto) => {
            return res.status(200).json({ auto });
        })
        .catch((err) => {
            return res.status(404).send('Dato no encontrado');
        });

};

const addAuto = async (req, res) => {
    const data = req.body;
    const inserted = await Auto.create(data)
        .then((inserted) => {
            return res.status(201).json({ inserted })
        })
        .catch((err) => {
            return res.status(400).json({ err })
        });
};

const deleteAuto = async (req, res) => {
    const { id } = req.params;
    const deleted = await Auto.deleteOne({ _id: id })
        .then((deleted) => {
            return res.status(200).send('Borrado');
        })
        .catch((err) => {
            return res.send('No se encontró el auto')
        });
};

const getAutos = async (req, res) => {
    const autos = await Auto.find({}).populate("propietario")
        .then((autos) => {
            return res.status(200).json({ autos });
        })
        .catch((err) => {
            return res.status(404).json({ err });
        });

};

module.exports = { getAuto, getAutos, addAuto, deleteAuto };