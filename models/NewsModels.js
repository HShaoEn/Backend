const mongoose = require("mongoose")
// news模型 ===> users集合
const Schema = mongoose.Schema
const NewsType = {
	title: String,
	content: String,
	category: Number,	// 類別 1 2 3
	cover: String, // 封面
	isPublish: Number, // 未發布, 已發布
	editTime: Date, // 將來排序用
	createTime: Date
}


const NewsModel = mongoose.model("news", new Schema(NewsType))
module.exports = NewsModel

