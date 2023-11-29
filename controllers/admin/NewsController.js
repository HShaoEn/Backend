const NewsService = require("../../services/admin/NewsService")

const NewsController = {
    add: async (req, res) => {
        // controller整合前端數據調用service進行操作
        // console.log(req.body, req.file)
        const { title, content, category, isPublish } = req.body
        // 頭像地址 避免空avatar
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        await NewsService.add({
            title: title,
            content: content,
            // 因為傳過來是string
            category: Number(category),
            isPublish: Number(isPublish),
            cover: cover,
            editTime: new Date(),
            createTime: new Date()

        })
        res.send({
            AcrionType: "OK"

        })
    },
    getList: async (req, res) => {
        const result = await NewsService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result
        })
    },
    publish: async (req, res) => {
        // req.body裡面是甚麼
        await NewsService.publish({
            ...req.body,
            editTime: new Date()

        })
        res.send({
            AcrionType: "OK",
        })

    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await NewsService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    updateList: async (req, res) => {
        // controller整合前端數據調用service進行操作
        // console.log(req.body, req.file)
        const { _id,title, content, category, isPublish } = req.body
        // 頭像地址 避免空avatar
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        await NewsService.updateList({
            _id: _id,
            title: title,
            content: content,
            // 因為傳過來是string
            category: Number(category),
            isPublish: Number(isPublish),
            cover: cover,
            editTime: new Date(),
        })
        res.send({
            AcrionType: "OK"

        })
    }

}
// 在app.js中註冊route
// 在route中判斷是甚麼接口
// 交給controller處理解析
// 再交給service 處理資料
// controller 返回前端
module.exports = NewsController

