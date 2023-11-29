//所有用戶相關

var express = require('express');
var Userrouter = express.Router();

const UserController = require('../../controllers/admin/UserController');
// 圖片上傳模塊
const multer = require('multer')
// 放在靜態資源文件夾下前端才能抓到
const upload = multer({ dest: 'public/avataruploads/' })
/* GET home page. */
Userrouter.post("/adminapi/user/login", UserController.login)
// 通過中間件解析file
Userrouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload)
//addEventListener
Userrouter.post("/adminapi/user/add", upload.single('file'), UserController.add)
Userrouter.put("/adminapi/user/list/:id", UserController.putList)
Userrouter.get("/adminapi/user/list/:id", UserController.getList)
Userrouter.get("/adminapi/user/list", UserController.getList)
// 動態路由帶ID
Userrouter.delete("/adminapi/user/list/:id", UserController.delList)
module.exports = Userrouter;
