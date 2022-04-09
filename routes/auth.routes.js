//pacotes
const { Router } = require('express');
const bcrypt = require('bcryptjs');

//modelos
const User = require('../models/User.model')

//executar o router para gerar as rotas
const router = Router();

router.post('/signup', async (req, res) => {
    //informações que quero receber
const { username, password } = req.body;
try {
    //verificar se as informações existem
    if ( !username || !password ) {
        throw new Error('Missing username or password');
    }

    //verificar se o usuário já existe no banco e se sim, jogar um erro
    const userFromDB = await User.findOne({username});
    if (userFromDB) {
        throw new Error('This username already exists, try a new one');
    }

    //Caso não exista, continua o processo de criação

   //criptografa a senha
   const salt = bcrypt.genSaltSync(12);
   const passwordHash = bcrypt.hashSync(password, salt);

   //criar usuário no banco de dados
   await User.create({
       username,
       passwordHash,
   })

   //se não houver erros até aqui
   res.status(201).json('User created!')
} catch (error){
res.status(500).json({message: 'Error creating user', error})
}
})

module.exports = router;