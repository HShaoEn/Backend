//�Ҧ��s�D����

var express = require('express');
var Newsrouter = express.Router();

const NewsController = require('../../controllers/admin/NewsController');
// �Ϥ��W�ǼҶ�
const multer = require('multer')
// ��b�R�A�귽��󧨤U�e�ݤ~����
const upload = multer({ dest: 'public/newsuploads/' })


// �A�Τ��W�� �ݭn�[�Wmulter������
Newsrouter.post("/adminapi/news/add", upload.single('file'), NewsController.add)

Newsrouter.get("/adminapi/news/list", NewsController.getList)
Newsrouter.get("/adminapi/news/list/:id", NewsController.getList)
// �A�Τ��W�� �ݭn�[�Wmulter������
Newsrouter.post("/adminapi/news/list", upload.single('file'), NewsController.updateList)

Newsrouter.put("/adminapi/news/publish", NewsController.publish)

Newsrouter.delete("/adminapi/news/list/:id", NewsController.delList)



module.exports = Newsrouter;
