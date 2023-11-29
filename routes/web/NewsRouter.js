//所有新聞相關

var express = require('express');
var Newsrouter = express.Router();
const NewsController = require('../../controllers/web/NewsController');





Newsrouter.get("/webapi/news/list", NewsController.getList)
Newsrouter.get("/webapi/news/list/:id", NewsController.getList)

Newsrouter.get("/webapi/news/toplist", NewsController.getTopList)



module.exports = Newsrouter;
