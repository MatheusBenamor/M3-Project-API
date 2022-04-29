//configurações
require('dotenv').config();
const connect  = require('./configs/db.config');
connect();

//pacotes
const express = require('express');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//rotas públicas
app.use('/auth', require('./routes/auth.routes'));

//middlewares de rotas
app.use(require('./middlewares/auth.middleware'));

//rotas privadas
app.use('/user', require('./routes/user.routes'));
app.use('/analysis', require('./routes/analysis.routes'));


app.listen(process.env.PORT, () => {
    console.log(`Server is Running =) on PORT ${process.env.PORT}`);
})