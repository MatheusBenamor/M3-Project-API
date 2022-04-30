//pacotes
const { Router } = require("express");

//modelos
const Analysis = require("../models/Analysis.model");
const User = require("../models/User.model");

//executar o router para gerar as rotas
const router = Router();

//POST - Vai criar uma nova análise e publicá-la no banco de dados
//Não precisa por o /analysis porque no meu app.js eu já coloquei a raiz, então basta por o '/'
router.post("/", async (req, res) => {
  const { id }= req.user;
  try {
    const analysis = await Analysis.create({ ...req.body, userId: id})
    res.status(200).json(analysis)
} catch (error) {
    res.status(500).json({ message: "Error while trying to create a new analysis", error})
}
})

//GET - Vai trazer TODAS as análises do DB
router.get('/', async (req, res) => {
  try {
      const allAnalysis = await Analysis.find()
      res.status(200).json(allAnalysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to get all analysis", error})
  }
})

//GET - Vai trazer as análises daquele user específico
router.get('/:analysisId', async (req, res) => {
  const { analysisId } = req.params
  try {
      const analysis = await Analysis.findById(analysisId)
      res.status(200).json(analysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to get an Id analysis", error})
  }
})

//PUT - Altera a análise de um user específico
router.put('/:analysisId', async (req, res) => {
  const { analysisId } = req.params
  try {
      const updatedAnalysis = await Analysis.findByIdAndUpdate(roomId, req.body, { new: true})
      res.status(200).json(updatedAnalysis)
  } catch (error) {
      res.status(500).json({ message: "Error while trying to update analysis", error})
  }
})

//DELETE - Delete uma análise de um user específico
router.delete('/:analysisId', async (req, res) => {
  const { analysisId } = req.params
  try {
      await Room.findByIdAndDelete(analysisId)
      await Review.deleteMany({ analysisId })
      res.status(204).json()
  } catch (error) {
      res.status(500).json({ message: "Error while trying to delete analysis", error})
  }
})


module.exports = router;


/*GET - Vai puxar a análise salva da pessoa
router.get("/profile", async (req, res) => {
  try {
    const userId = req.user.id;
    const allAnalysis = await Analysis.find({ user: userId });
    res.status(200).json(allAnalysis);
  } catch (error) {
    res.status(error.status || 500).json({
        place: "Cannot find user analysis in DB, maybe there is none",
        error: error.message,
      });
  }
});*/

/*//PUT - Vai poder alterar a análise
router.put("/profile", async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
  try {
    const updatedAnalysis = await Todo.findOneAndUpdate({_id: id, user: userId}, req.body, {
    new: true,
});
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(error.status || 500).json({
        place: "Cannot update user analysis",
        error: error.message,
    });
}
});

//DELETE - Vai deletar a análise feita pelo usuário
router.delete("/profile", async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
  try {
    const analysisForDelete = await Todo.findById(id);
    analysisForDelete.delete();
    res.status(204).json();
} catch (error) {
    res.status(error.status || 500).json({
        place: "Cannot delete this user analysis",
        error: error.message,
    });
}
});*/

/* Estava testando no insomnia assim
{
"analysisName": "teste",
"strengths": "[str1, str2, str3, str4, str5]",
"weaknesses": "[weak1, weak2, weak3, weak4, weak5]",
"opportunities": "[opp1, opp2, opp3, opp4, opp5]",
"threats": "[thr1, thr2, thr3, thr4, thr5]"	
}
*/
