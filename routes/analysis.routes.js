//pacotes
const { Router } = require('express');

//modelos
const Analysis = require("../models/Analysis.model");

//executar o router para gerar as rotas
const router = Router();

//POST - Vai criar uma nova análise e publicá-la no banco de dados
router.post('/profile', async (req, res) => {


try {
    
} catch (error) {
    
}
});

//GET - Vai puxar a análise salva da pessoa
router.get('/profile', async (req, res) => {
   try {
    const userId = req.user.id;
    const allAnalysis = await Analysis.find({user: userId})
    res.status(200).json(allAnalysis)
   } catch (error) {
    res.status(error.status || 500).json({ place: "Cannot find user analysis in DB, maybe there is none", error: error.message })  
   } 
});


//PUT - Vai poder alterar a análise
router.put('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

//DELETE - Vai deletar a análise feita pelo usuário
router.delete('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});