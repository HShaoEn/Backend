const NewsService = require("../../services/web/NewsService")

const NewsController = {

    getList: async (req, res) => {
        const result = await NewsService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result,
            
        })
    },
    getTopList: async (req, res) => {
        const result = await NewsService.getTopList({
            limit : req.query.limit
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
module.exports = NewsController

