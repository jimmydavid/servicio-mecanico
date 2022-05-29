const Servicio = require('../models/servicio_model');

const getServicio = async (req, res) => {
    const id_servicio = req.params.id;
    const servicio = await Servicio.findById(id_servicio)
        .then((servicio) => {
            return res.status(200).json({ servicio});
        })
        .catch((err)=> {
            return res.status(404).send('Dato no encontrado')
        });
};

const getServicios = async (req, res) => {
    const servicios = await Servicio.find({})
        .then((servicios) => {
            return res.status(200).json({ servicios });
        })
        .catch((err) => {
            return res.status(404).json({ err });
        });

};

const addServicio = async (req, res) => {
    const data = req.body;
    const inserted = await Servicio.create(data)
        .then((inserted) => {
            return res.status(201).json({inserted})
        })
        .catch((err) => {
            return res.status(400).json({ err })
        });
};

module.exports = { getServicio, getServicios, addServicio}