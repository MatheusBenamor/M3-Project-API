const { Router } = require("express");

const router = Router()

router.get('/', (req, res) => {
    res.send('SWOT API test')
})

module.exports = router;