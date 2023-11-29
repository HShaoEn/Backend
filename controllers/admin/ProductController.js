const ProductService = require("../../services/admin/ProductService")

const ProductController = {
    add: async (req, res) => {


        // 把前端傳來的東西解構
        const { productName, productIntroduction, productDetail } = req.body
        // 頭像地址 避免空avatar
        const productImg = req.file ? `/productuploads/${req.file.filename}` : ""
        await ProductService.add({
            productName: productName,
            productIntroduction: productIntroduction,
            productDetail: productDetail,
            productImg: productImg,
            editTime: new Date()

        })
        res.send({
            AcrionType: "OK"

        })

    },
    getList: async (req, res) => {
        const result = await ProductService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result
        })
    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await ProductService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    updateList: async (req, res) => {
        // controller整合前端數據調用service進行操作
        // console.log(req.body, req.file)
        const { productName, productIntroduction, productDetail, _id } = req.body
        // 頭像地址 避免空avatar
        const productImg = req.file ? `/productuploads/${req.file.filename}` : ""
        await ProductService.updateList({
            _id, 
            productName: productName,
            productIntroduction: productIntroduction,
            productDetail: productDetail,
            productImg: productImg,
            editTime: new Date()
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
module.exports = ProductController