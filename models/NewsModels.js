const mongoose = require("mongoose")
// news�ҫ� ===> users���X
const Schema = mongoose.Schema
const NewsType = {
	title: String,
	content: String,
	category: Number,	// ���O 1 2 3
	cover: String, // �ʭ�
	isPublish: Number, // ���o��, �w�o��
	editTime: Date, // �N�ӱƧǥ�
	createTime: Date
}


const NewsModel = mongoose.model("news", new Schema(NewsType))
module.exports = NewsModel

