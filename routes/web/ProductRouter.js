//�Ҧ��s�D����

var express = require('express');
var Productrouter = express.Router();
const ProductController = require('../../controllers/web/ProductController');





Productrouter.get("/webapi/product/list", ProductController.getList)




module.exports = Productrouter;
