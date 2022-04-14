//pacotes
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
res.status(500).json({message: 'Error creating user', error: error.message})
}
});

router.post('/login', async (req, res) => {
const { username, password } = req.body;
try {
//verifica se as informações existem
  if (!username || !password) {
    throw new Error('You need to put a username and a password');
  }
  
//verifica se o nome de usuário existe
const userFromDB = await User.findOne({username});
if(!userFromDB) {
throw new Error('You need to put a valid username and password')
}

//valida a senha
const validation = bcrypt.compareSync(password, userFromDB.passwordHash);

if(!validation) {
    throw new Error('Wrong username or password')
}

//crio informações para o token carregar (Dentro do token tem essas informações)
const payload = {
id: userFromDB._id,
username: userFromDB.username
};

//criação do token que vai carregar a informação de Login
const token = jwt.sign(payload, process.env.JWT_SECRET)
} catch (error) {


}
})

module.exports = router;