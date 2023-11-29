//所有用戶相關

var express = require('express');
var Productrouter = express.Router();

const ProductController = require('../../controllers/admin/ProductController');
// 圖片上傳模塊
const multer = require('multer')
// 放在靜態資源文件夾下前端才能抓到
const upload = multer({ dest: 'public/productuploads/' })

Productrouter.post("/adminapi/product/add", upload.single('file'), ProductController.add)



Productrouter.get("/adminapi/product/list", ProductController.getList)
Productrouter.get("/adminapi/product/list/:id", ProductController.getList)

Productrouter.post("/adminapi/product/list", upload.single('file'), ProductController.updateList)



Productrouter.delete("/adminapi/product/list/:id", ProductController.delList)


module.exports = Productrouter;
