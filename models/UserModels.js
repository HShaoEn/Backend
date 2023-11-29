const mongoose = require("mongoose")
// user模型 ===> users集合
const Schema = mongoose.Schema
const UserType = {
	username: String,
	password: String,
	gender: Number,	// 性別 0 1 2
	introduction: String, //簡介
	avatar: String,
	role: Number // 管理員 == 1, 編輯 == 2
}






const UserModel = mongoose.model("user", new Schema(UserType))
module.exports = UserModel

