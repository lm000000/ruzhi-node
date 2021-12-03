const express = require("express")
const app = express()
const router = require("./router/router")

var vertoken = require('./token/index');
var expressJwt = require('express-jwt');
app.use("/public/",express.static("../public/"))


// post 请求参数  res.body  可以不用body-parser  
// urlencoded解析body中的urlencoded字符， 只支持utf-8的编码的字符,也支持自动的解析gzip和 zlib，
app.use(express.urlencoded({ extended: false }))
// json这个方法返回一个仅仅用来解析json格式的中间件 能接受任何body中任何Unicode编码的字符
app.use(express.json())

// app.use(function(req, res, next)  中间件  所有路径都会匹配到  相当于拦截器
// 解析token获取用户信息
app.use(function(req, res, next) {
	var token = req.headers['authorization'];
	if(token == undefined){
		return next();
	}else{
		vertoken.verToken(token).then((data)=> {
            // data   用户信息
			return next();
		}).catch((error)=>{
			return next();
		})
	}
});

//验证token是否过期并规定哪些路由不用验证
app.use(expressJwt({
	secret: 'mes_qdhd_mobile_xhykjyxgs',
    algorithms:["HS256"]
}).unless({
	path: ['/login'] //除了这个地址，其他的URL都需要验证
}));


//当token失效返回提示信息
app.use(function(err, req, res, next) {
	if (err.status == 401) {
		return res.status(401).send('token失效');
	}
});

app.use(router)

app.listen(3000,function(){
    console.log("runing")
})