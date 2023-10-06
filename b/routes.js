const {Router} = require("express");

const {getbank,createBank,updateBank,Transfer} = require("./controller")

const router = Router()

router.get('/get',getbank)
router.post('/create',createBank)
router.patch('/update/:id',updateBank)
router.patch('/transfer/:id1/:id2',Transfer)


module.exports = router;