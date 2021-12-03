var jwt = require('jsonwebtoken');
// 密钥 
var signkey = 'mes_qdhd_mobile_xhykjyxgs';

// 设置token
exports.setToken = function (username, userid) {
    return new Promise((resolve, reject) => {
        // 设置信息
        const token = jwt.sign({
            name: username,
            _id: userid
        }, signkey, {
            // 过期时间
            expiresIn: '1000h'
        });
        resolve(token);
    })
}

//读取token
exports.verToken = function (token) {
    return new Promise((resolve, reject) => {
        // 解密token
        var info = jwt.verify(token.split(' ')[1], signkey);
        resolve(info);
    })
}