//pacotes
const { Router } = require('express');

//modelos
const Feedback = require('../models/Feedback.model');

const router = Router();

//Nessa rota os métodos serão todos do tipo GET, trazendo as 3 possíveis respostas, se a análise é segura, moderada ou arriscada.
//GET - Vai puxar a análise salva da pessoa
router.get("/", async (req, res) => {
   
   try {
      const allFeedbacks = await Feedback.find()
      res.send('Análise segura')
      res.status(200).json(allFeedbacks)
   } catch (error) {
      res
      .status(500)
      .json({ message: "Error trying to get a feedback answer", error: error.message });
  }
   
  });

  module.exports = router;