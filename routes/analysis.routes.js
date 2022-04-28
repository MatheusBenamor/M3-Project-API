//pacotes
const { Router } = require("express");

//modelos
const Analysis = require("../models/Analysis.model");

//executar o router para gerar as rotas
const router = Router();

//POST - Vai criar uma nova análise e publicá-la no banco de dados
router.post("/analysis", async (req, res) => {
  try {
    const userId = req.user.id;
    const newAnalysis = await Analysis.create({ ...req.body, user: userId });
    await User.findByIdAndUpdate(userId, { $push: { Analysis: newAnalysis._id } });
    res.status(200).json(newAnalysis);
} catch (error) {
    res.status(error.status || 500).json({
        place: "Error trying to create a new analysis",
        error: error.message,
      });
  }
});

//GET - Vai puxar a análise salva da pessoa
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
});

//PUT - Vai poder alterar a análise
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
});

module.exports = router;