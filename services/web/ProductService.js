const ProductModel = require("../../models/ProductModels")

const ProductService = {

    getList: async () => {


            return ProductModel.find()

    }

}



module.exports = ProductService