const ProductService = require("../../services/web/ProductService")

const ProductController = {

    getList: async (req, res) => {
        const result = await ProductService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result,

        })
    }
}
// 在app.js中註冊route
// 在route中判斷是甚麼接口
// 交給controller處理解析
// 再交給service 處理資料
// controller 返回前端
module.exports = ProductController

