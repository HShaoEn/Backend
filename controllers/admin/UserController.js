const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
const UserController = {
    login: async (req, res) => {
       //req.body 接收前端訊息
       console.log("req.body = ", req.body)
        var result = await UserService.login(req.body)
       // 判斷結果
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "not find User"
            })
        } else {
            // 登錄成功生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")
            // 設置header 只是為了查看有沒有設置成功 ???
            res.header("Authorization", token)
            //console.log("avatar", result[0].avatar)
            res.send({
                ActionType: "OK",
                data: {
                    username: result[0].username,
                    gender: result.gender? result[0].gender : 0,	// 性別 0 1 2
                    introduction: result[0].introduction, //簡介
                    avatar: result[0].avatar,
                    role: result[0].role // 管理員 == 1, 編輯 == 2

                }

            })
        }
    },
    upload: async (req, res) => {
        // express原生拿不到 multipart類型的資料
        // console.log(req.body, req.file)
        // 調用service 更新數據
        const token = req.headers["authorization"].split(" ")[1];
        var payload = JWT.verify(token)
        // console.log("ID = ", payload._id)
        // 把前端傳來的東西解構
        const { username, introduction, gender } = req.body
        // 頭像地址 避免空avatar
        const avatar = req.file? `/avataruploads/${req.file.filename}`: ""
        await UserService.upload({
            _id: payload._id,
            username: username,
            introduction: introduction,
            gender: Number(gender),
            avatar: avatar

        })
        if (avatar) {
            res.send({
                ActionType: "OK",
                // 返回前端訊息
                data: {
                    username: username,
                    introduction: introduction,
                    gender: Number(gender),
                    avatar: avatar

                }
            })
        } else {
            res.send({
                ActionType: "OK",
                // 返回前端訊息
                data: {
                    // 這是要更新vuex
                    username: username,
                    introduction: introduction,
                    gender: Number(gender),

                }
            })

        }
    },
    add: async (req, res) => {


        // 把前端傳來的東西解構
        const { username, introduction, gender, role, password } = req.body
        // 頭像地址 避免空avatar
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        await UserService.add({
            username: username,
            introduction: introduction,
            gender: Number(gender),
            avatar: avatar,
            role: Number(role),
            password:password

        })
        res.send({
            AcrionType:"OK"

        })

    },
    getList: async (req, res) => {
        //console.log(req.params.id)
        const result = await UserService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data : result

        })
    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await UserService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    putList: async (req, res) => {
        // 也可以用 req.params
        const result = await UserService.putList(req.body)
        res.send({
            AcrionType: "OK",
        })
    }



}
// 在app.js中註冊route
// 在route中判斷是甚麼接口
// 交給controller處理解析
// 再交給service 處理資料
// controller 返回前端
module.exports = UserController