const ProductService = require("../../services/admin/ProductService")

const ProductController = {
    add: async (req, res) => {


        // ��e�ݶǨӪ��F��Ѻc
        const { productName, productIntroduction, productDetail } = req.body
        // �Y���a�} �קK��avatar
        const productImg = req.file ? `/productuploads/${req.file.filename}` : ""
        await ProductService.add({
            productName: productName,
            productIntroduction: productIntroduction,
            productDetail: productDetail,
            productImg: productImg,
            editTime: new Date()

        })
        res.send({
            AcrionType: "OK"

        })

    },
    getList: async (req, res) => {
        const result = await ProductService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result
        })
    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await ProductService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    updateList: async (req, res) => {
        // controller��X�e�ݼƾڽե�service�i��ާ@
        // console.log(req.body, req.file)
        const { productName, productIntroduction, productDetail, _id } = req.body
        // �Y���a�} �קK��avatar
        const productImg = req.file ? `/productuploads/${req.file.filename}` : ""
        await ProductService.updateList({
            _id, 
            productName: productName,
            productIntroduction: productIntroduction,
            productDetail: productDetail,
            productImg: productImg,
            editTime: new Date()
        })
        res.send({
            AcrionType: "OK"

        })
    }

}
// �bapp.js�����Uroute
// �broute���P�_�O�ƻ򱵤f
// �浹controller�B�z�ѪR
// �A�浹service �B�z���
// controller ��^�e��
module.exports = ProductController