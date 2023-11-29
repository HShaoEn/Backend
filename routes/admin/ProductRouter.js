//�Ҧ��Τ����

var express = require('express');
var Productrouter = express.Router();

const ProductController = require('../../controllers/admin/ProductController');
// �Ϥ��W�ǼҶ�
const multer = require('multer')
// ��b�R�A�귽��󧨤U�e�ݤ~����
const upload = multer({ dest: 'public/productuploads/' })

Productrouter.post("/adminapi/product/add", upload.single('file'), ProductController.add)



Productrouter.get("/adminapi/product/list", ProductController.getList)
Productrouter.get("/adminapi/product/list/:id", ProductController.getList)

Productrouter.post("/adminapi/product/list", upload.single('file'), ProductController.updateList)



Productrouter.delete("/adminapi/product/list/:id", ProductController.delList)


module.exports = Productrouter;
