const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ProductType = {
	productName: String,
	productIntroduction: String,
	productDetail: String,
	productImg: String,
	editTime: Date // �N�ӱƧǥ�
}




const ProductModel = mongoose.model("product", new Schema(ProductType))
module.exports = ProductModel

