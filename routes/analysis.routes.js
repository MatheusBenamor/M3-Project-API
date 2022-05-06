//pacotes
const { Router } = require("express");

//modelos
const Analysis = require("../models/Analysis.model");

//executar o router para gerar as rotas
const router = Router();

//POST - Vai criar uma nova análise e publicá-la no banco de dados
//Não precisa por o /analysis porque no meu app.js eu já coloquei a raiz, então basta por o '/'
router.post('/', async (req, res) => {
  const { id }= req.user;
  try {
    const analysis = await Analysis.create({ ...req.body, userId: id})
    res.status(200).json(analysis)
} catch (error) {
    res.status(500).json({ message: "Error while trying to create a new analysis", error})
}
})

//GET - Vai trazer TODAS as análises do user
router.get('/', async (req, res) => {
  const { id }= req.user;
  try {
      const alluserAnalysis = await Analysis.find({userId: id})
      res.status(200).json(alluserAnalysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to get all analysis", error})
  }
})

//No insomnia colocar o localhost na URL pq ele não vai conseguir fazer processos que precisam do ID no deploy, sem que sejam atualizados.
//GET - Vai trazer as análises daquele user específico
router.get('/:analysisId', async (req, res) => {
  const { analysisId } = req.params;
  try {
      
      const analysis = await Analysis.findById(analysisId)
      res.status(200).json(analysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to get an Id analysis", error})
  }
})

//PUT - Altera a análise de um user específico
router.put('/:analysisId', async (req, res) => {
  const { analysisId } = req.params;
  try {
      const updatedAnalysis = await Analysis.findByIdAndUpdate(analysisId, req.body, { new: true})
      res.status(200).json(updatedAnalysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to update analysis", error})
  }
})

//DELETE - Delete uma análise de um user específico
router.delete('/:analysisId', async (req, res) => {
  const { analysisId } = req.params;
  try {
      await Analysis.findByIdAndDelete(analysisId)
      res.status(204).json()
  } catch (error) {
      res.status(500).json({ message: "Error while trying to delete analysis", error:error.response})
  }
})
/*
//DELETE teste - Delete uma análise de um user específico
router.delete('/:id', async (req, res) => {
  const { id }= req.params;
  const userId = req.user.id;
  
  try {
    const analysis = await Analysis.findById(id);
    if(analysis.user.toString() !== userId) {
      throw new Error('cannot delete another user\'s analysis')
  }
      analysis.delete();
      res.status(204).json()
  } catch (error) {
      res.status(500).json({ message: "Error while trying to delete analysis", error:error.response})
  }
})*/




module.exports = router;