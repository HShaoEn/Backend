const ProductModel = require("../../models/ProductModels")

const ProductService = {
    add: async ({ productName, productIntroduction, productDetail, productImg, editTime  }) => {
        return ProductModel.create({
            productName, productIntroduction, productDetail, productImg, editTime


        })

    },
    getList: async ({ _id }) => {
        if (_id) {
            return ProductModel.find({ _id })
        } else {
            return ProductModel.find({})
        }



    },
    delList: async ({ _id }) => {
        // {查詢條件}, [要查出哪些字段]
        return ProductModel.deleteOne({ _id })
            
    },
    updateList: async ({ _id, productName, productIntroduction, productDetail, productImg, editTime }) => {
        // {查詢條件}, [要查出哪些字段]
        if (productImg) {
            return ProductModel.updateOne({

                _id

            }, {

                productName, productIntroduction, productDetail, productImg, editTime

            })

        } else {
            return ProductModel.updateOne({

                _id

            }, {

                productName, productIntroduction, productDetail, editTime

            })
        }

    }
}

module.exports = ProductService
