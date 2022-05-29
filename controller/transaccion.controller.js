const Transaccion = require('../models/transaccion_model');
const Servicio = require('../models/servicio_model');
const Auto = require('../models/auto_model');

const addTransaccion = async (req, res) => {
    const data = req.body;
    const inserted = await Transaccion.create(data)
        .then((inserted) => {
            return res.status(201).json({ inserted })
        })
        .catch((err) => {
            return res.status(404).json({ err })
        });
};

const addServicioTransaccion = async (req, res) => {
    const id_transaccion = req.params.id;
    const id_servicio = req.body.id_servicio;
    const id_auto = req.body.id_auto;
    const transaccion = await Transaccion.findById(id_transaccion)
        .then(async (transaccion) => {
            console.log(transaccion);
            const servicio = await Servicio.findById(id_servicio)
                .then(async (servicio) => {
                    console.log(servicio);

                    const auto = await Auto.findById(id_auto)
                        .then(async (auto) => {
                            console.log(auto);
                            if (servicio.tipo == 'Pintura' && auto.color == 'Gris') {
                                return res.send('NO es permitido hacer servicio de Pintura a autos Grises')
                            } else {
                                transaccion.servicios.push(id_servicio);
                                transaccion.save();
                                return res.status(200).json(transaccion)
                            }
                        })
                        .catch((err) => {
                            return res.send('Error en auto');
                        })

                })
                .catch((err) => {
                    return res.send('Error en servicio');
                })
        })
        .catch((err) => {
            return res.send('Error en transaccion');
        });
}

const getTransaccion = async (req, res) => {
    const id_transaccion = req.params.id;
    const transaccion = await Transaccion.findById(id_transaccion).populate([{ path: 'auto', model: 'Auto' }, { path: 'servicios', model: 'Servicio' }])
        .then((transaccion) => {
            return res.status(200).json({ transaccion });
        })
        .catch((err) => {
            return res.status(404).send('Dato no encontrado')
        });
};

const getTransacciones = async (req, res) => {
    const transacciones = await Transaccion.find({})
        .then((transacciones) => {
            return res.status(200).json({ transacciones });
        })
        .catch((err) => {
            return res.status(404).json({ err });
        });
}

const getPresupuesto = async (req, res) => {
    const id_transaccion = req.params.id;
    const transaccion = await Transaccion.findById(id_transaccion).populate({path: 'servicios', model: 'Servicio'})
        .then((transaccion) => {
            const servicios = transaccion.servicios;
            let presupuesto = 0;
            servicios.forEach(servicio => {
                presupuesto = presupuesto + servicio.precio;
            });
            return res.status(200).json({ transaccion: id_transaccion, presupuesto: presupuesto });
        })
        .catch((err) => {
            return res.status(404).send('Dato no encontrado')
        });

};

module.exports = { addTransaccion, addServicioTransaccion, getTransaccion, getTransacciones, getPresupuesto }