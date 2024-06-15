const express=require('express')
const { getHomePage } = require('../controller/homeController')
const { getAboutPage } = require('../controller/aboutController')
const router=express.Router()

router.get('/',getHomePage)
router.get('/about',getAboutPage)

module.exports=router;