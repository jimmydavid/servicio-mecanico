const { Router } = require('express');
const autoRoutes = require('./auto.routes');
const propietarioRoutes = require('./propietario.routes');
const servicioRoutes = require('./servicio.routes');
const transaccionRoutes = require('./transaccion.routes');

const apiRoutes = () => {
    const router = Router();
    router.use('/autos',autoRoutes);
    router.use('/propietarios',propietarioRoutes );
    router.use('/servicios', servicioRoutes);
    router.use('/transacciones', transaccionRoutes )

    return router;
};

module.exports = { apiRoutes } ;
