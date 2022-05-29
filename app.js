const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const routerConfig = require('./routes/index.routes');

//Conexion a la BD
mongoose.connect(config.get('configDB.HOST'), { useNewUrlParser: true, useUnifiedTopology: true }, { useFindAndModify: false })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('No se pudo conectar con MongoDB...', err));


console.log('Aplicación: ' + config.get('name'));
console.log('BD server: ' + config.get('configDB.HOST'));

const configApi = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

const configRouter = (app) => {
    console.log('entro a configurar routas');
    app.get('/', (req, res) => { res.send('Bienvenido al Servicio Mecánico');});
    app.use('/api/v1', routerConfig.apiRoutes());
};

//Seteo de puerto de la API. Si no se especifica por default el 3000
const port = process.env.PORT || 3000

const init = () => {
    const app = express();
    configApi(app);
    configRouter(app);
    app.listen(port, () => {
        console.log(`API escuchando en el puerto ${port}..`);
    });
};

init();