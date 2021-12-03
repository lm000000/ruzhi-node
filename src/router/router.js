const express = require("express")
const router = express.Router()
const dataBase = require("../dataBase/user")
const object = require("../common/common.js")
const setToken = require("../token/index")

router.get("/login",function(req,res){
    
    var username = 'slj';
	var userid = "111";
    // 返回token
	setToken.setToken(username,userid).then((data)=>{
        res.send(data)
	})
})

router.post("/user",function(req,res){
    let request = req.body
    let flag = false
    object.findAll(dataBase.User).then((data) => {
        data.forEach(item => {
            if(item.username === request.username && item.password === request.password){
               res.send(item) 
               flag = true
            }
        })
        if(!flag){
            res.send("账号或密码错误")
        }
    })
})



module.exports = router
