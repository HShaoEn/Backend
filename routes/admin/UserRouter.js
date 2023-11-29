//�Ҧ��Τ����

var express = require('express');
var Userrouter = express.Router();

const UserController = require('../../controllers/admin/UserController');
// �Ϥ��W�ǼҶ�
const multer = require('multer')
// ��b�R�A�귽��󧨤U�e�ݤ~����
const upload = multer({ dest: 'public/avataruploads/' })
/* GET home page. */
Userrouter.post("/adminapi/user/login", UserController.login)
// �q�L������ѪRfile
Userrouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload)
//addEventListener
Userrouter.post("/adminapi/user/add", upload.single('file'), UserController.add)
Userrouter.put("/adminapi/user/list/:id", UserController.putList)
Userrouter.get("/adminapi/user/list/:id", UserController.getList)
Userrouter.get("/adminapi/user/list", UserController.getList)
// �ʺA���ѱaID
Userrouter.delete("/adminapi/user/list/:id", UserController.delList)
module.exports = Userrouter;
