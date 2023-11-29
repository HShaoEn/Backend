const ProductService = require("../../services/web/ProductService")

const ProductController = {

    getList: async (req, res) => {
        const result = await ProductService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result,

        })
    }
}
// �bapp.js�����Uroute
// �broute���P�_�O�ƻ򱵤f
// �浹controller�B�z�ѪR
// �A�浹service �B�z���
// controller ��^�e��
module.exports = ProductController

