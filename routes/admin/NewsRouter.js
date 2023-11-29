//所有新聞相關

var express = require('express');
var Newsrouter = express.Router();

const NewsController = require('../../controllers/admin/NewsController');
// 圖片上傳模塊
const multer = require('multer')
// 放在靜態資源文件夾下前端才能抓到
const upload = multer({ dest: 'public/newsuploads/' })


// 涉及文件上傳 需要加上multer中間件
Newsrouter.post("/adminapi/news/add", upload.single('file'), NewsController.add)

Newsrouter.get("/adminapi/news/list", NewsController.getList)
Newsrouter.get("/adminapi/news/list/:id", NewsController.getList)
// 涉及文件上傳 需要加上multer中間件
Newsrouter.post("/adminapi/news/list", upload.single('file'), NewsController.updateList)

Newsrouter.put("/adminapi/news/publish", NewsController.publish)

Newsrouter.delete("/adminapi/news/list/:id", NewsController.delList)



module.exports = Newsrouter;
