const express= require("express")
const { save,  getList, deleteFly, updatelist, updatelistadmin } = require("../controllers/list.controller")
const { authorisation } = require("../middlewares/authorisation")
// const { updatelist } = require("../middlewares/updatelist")
const router =express.Router()


router.post('/save',save)
router.delete('/deleteFly/:x',deleteFly)
router.put('/updatelist/:x',authorisation,updatelist)
router.put('/updatelistadmin/:x',updatelistadmin)
router.post('/getList',getList)






module.exports = router