const { Router } = require('express')
const User = require('../models/User.model')
const uploadCloud = require('../configs/cloudinary.config')


const router = Router()

router.get('/:userId', async (req, res) => {

    try {

        const userId  =  req.user.id;
        const userFromDB = await User.findById(userId).select("username email imageProfile")
        res.status(200).json(userFromDB)

    } catch (error) {

        res.status(500).json({error: error.message})

    }

})

router.put('/image', uploadCloud.single('image'), async (req, res) => {
    const userId = req.user.id
    const { path } = req.file
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {image: path}, {new: true}).select('-passwordHash')
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

module.exports = router
