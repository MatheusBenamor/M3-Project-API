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

app.listen(process.env.PORT, () => {
    console.log(`Server is Running =) on PORT ${process.env.PORT}`);
})