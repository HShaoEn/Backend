// 利用這個模塊生成token

const jsonwebtoken = require("jsonwebtoken")
const secret = "Huang"
const JWT = {
    generate(value, exprires) {
        return jsonwebtoken.sign(value, secret, { expiresIn: exprires })
    },
    verify(token) {
        try {
            return jsonwebtoken.verify(token, secret)
        } catch (error) {
            return false
        }
    }
}

/*const token = JWT.generate({ name: "huaaa" }, "3s")
console.log(token)
console.log(JWT.verify(token))
setTimeout(() => {
    console.log(JWT.verify(token))
},4000)
*/


module.exports = JWT