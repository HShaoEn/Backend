const mongoose = require("mongoose")
// user�ҫ� ===> users���X
const Schema = mongoose.Schema
const UserType = {
	username: String,
	password: String,
	gender: Number,	// �ʧO 0 1 2
	introduction: String, //²��
	avatar: String,
	role: Number // �޲z�� == 1, �s�� == 2
}






const UserModel = mongoose.model("user", new Schema(UserType))
module.exports = UserModel

