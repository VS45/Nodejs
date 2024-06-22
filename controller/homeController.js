const { getllPersons } = require("../model/person")

exports.getHomePage=(req,res)=>{
    const personList=getllPersons()
   res.render('home',{title:'Home Page from controller',persons:personList})
}