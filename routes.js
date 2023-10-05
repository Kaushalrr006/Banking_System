const {Router} = require("express");

const {getbank,createBank,updateBank} = require("./controller")

const router = Router()

router.get('/get',getbank)
router.post('/create',createBank)
router.patch('/update/:id',updateBank)


module.exports = router;