const express= require("express")
const { save,  getList, deleteFly, updatelist, updatelistadmin } = require("../controllers/list.controller")
// const { updatelist } = require("../middlewares/updatelist")
const router =express.Router()


router.post('/save',save)
router.delete('/deleteFly/:x',deleteFly)
router.put('/updatelist/:x',updatelist)
router.put('/updatelistadmin/:x',updatelistadmin)
router.post('/getList',getList)






module.exports = router