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
        // {�d�߱���}, [�n�d�X���Ǧr�q]
        return ProductModel.deleteOne({ _id })
            
    },
    updateList: async ({ _id, productName, productIntroduction, productDetail, productImg, editTime }) => {
        // {�d�߱���}, [�n�d�X���Ǧr�q]
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
