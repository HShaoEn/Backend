const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
const UserController = {
    login: async (req, res) => {
       //req.body �����e�ݰT��
       console.log("req.body = ", req.body)
        var result = await UserService.login(req.body)
       // �P�_���G
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "not find User"
            })
        } else {
            // �n�����\�ͦ�token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")
            // �]�mheader �u�O���F�d�ݦ��S���]�m���\ ???
            res.header("Authorization", token)
            //console.log("avatar", result[0].avatar)
            res.send({
                ActionType: "OK",
                data: {
                    username: result[0].username,
                    gender: result.gender? result[0].gender : 0,	// �ʧO 0 1 2
                    introduction: result[0].introduction, //²��
                    avatar: result[0].avatar,
                    role: result[0].role // �޲z�� == 1, �s�� == 2

                }

            })
        }
    },
    upload: async (req, res) => {
        // express��ͮ����� multipart���������
        // console.log(req.body, req.file)
        // �ե�service ��s�ƾ�
        const token = req.headers["authorization"].split(" ")[1];
        var payload = JWT.verify(token)
        // console.log("ID = ", payload._id)
        // ��e�ݶǨӪ��F��Ѻc
        const { username, introduction, gender } = req.body
        // �Y���a�} �קK��avatar
        const avatar = req.file? `/avataruploads/${req.file.filename}`: ""
        await UserService.upload({
            _id: payload._id,
            username: username,
            introduction: introduction,
            gender: Number(gender),
            avatar: avatar

        })
        if (avatar) {
            res.send({
                ActionType: "OK",
                // ��^�e�ݰT��
                data: {
                    username: username,
                    introduction: introduction,
                    gender: Number(gender),
                    avatar: avatar

                }
            })
        } else {
            res.send({
                ActionType: "OK",
                // ��^�e�ݰT��
                data: {
                    // �o�O�n��svuex
                    username: username,
                    introduction: introduction,
                    gender: Number(gender),

                }
            })

        }
    },
    add: async (req, res) => {


        // ��e�ݶǨӪ��F��Ѻc
        const { username, introduction, gender, role, password } = req.body
        // �Y���a�} �קK��avatar
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        await UserService.add({
            username: username,
            introduction: introduction,
            gender: Number(gender),
            avatar: avatar,
            role: Number(role),
            password:password

        })
        res.send({
            AcrionType:"OK"

        })

    },
    getList: async (req, res) => {
        //console.log(req.params.id)
        const result = await UserService.getList({
            _id: req.params.id
        })
        res.send({
            AcrionType: "OK",
            data : result

        })
    },
    delList: async (req, res) => {
        // console.log(req.params.id)
        const result = await UserService.delList({
            _id: req.params.id

        })
        res.send({
            AcrionType: "OK",
        })
    },
    putList: async (req, res) => {
        // �]�i�H�� req.params
        const result = await UserService.putList(req.body)
        res.send({
            AcrionType: "OK",
        })
    }



}
// �bapp.js�����Uroute
// �broute���P�_�O�ƻ򱵤f
// �浹controller�B�z�ѪR
// �A�浹service �B�z���
// controller ��^�e��
module.exports = UserController