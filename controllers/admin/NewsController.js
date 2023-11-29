const NewsService = require("../../services/admin/NewsService")

const NewsController = {
    add: async (req, res) => {
        // controller��X�e�ݼƾڽե�service�i��ާ@
        // console.log(req.body, req.file)
        const { title, content, category, isPublish } = req.body
        // �Y���a�} �קK��avatar
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        await NewsService.add({
            title: title,
            content: content,
            // �]���ǹL�ӬOstring
            category: Number(category),
            isPublish: Number(isPublish),
            cover: cover,
            editTime: new Date(),
            createTime: new Date()

        })
        res.send({
            AcrionType: "OK"

        })
    },
    getList: async (req, res) => {
        const result = await NewsService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data: result
        })
    },
    publish: async (req, res) => {
        // req.body�̭��O�ƻ�
        await NewsService.publish({
            ...req.body,
            editTime: new Date()

        })
        res.send({
            AcrionType: "OK",
        })

    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await NewsService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    updateList: async (req, res) => {
        // controller��X�e�ݼƾڽե�service�i��ާ@
        // console.log(req.body, req.file)
        const { _id,title, content, category, isPublish } = req.body
        // �Y���a�} �קK��avatar
        const cover = req.file ? `/newsuploads/${req.file.filename}` : ""
        await NewsService.updateList({
            _id: _id,
            title: title,
            content: content,
            // �]���ǹL�ӬOstring
            category: Number(category),
            isPublish: Number(isPublish),
            cover: cover,
            editTime: new Date(),
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
module.exports = NewsController

