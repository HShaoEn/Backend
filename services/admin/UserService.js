const UserModel = require("../../models/UserModels")

const UserService = {
    login: async ({ username, password }) => {
        return UserModel.find({
            username,
            password
        })
    },
    upload: async ({ _id, username, gender, avatar, introduction }) => {
        // �������L��s�Y��
        if (avatar) {
            return UserModel.updateOne({

                _id

            }, {

                username, gender, avatar, introduction

            })

        } else {
            return UserModel.updateOne({

                _id

            }, {

                username, gender, introduction

            })
        }
    },
    add: async ({username, gender, avatar, introduction, role, password }) => {
        return UserModel.create({
            username, gender, avatar, introduction, role, password


        })
        
    },
    getList: async ({_id}) => {
        // {�d�߱���}, [�n�d�X���Ǧr�q]
        if (_id) {
            // �p�G�O�d��
            return UserModel.find({ _id }, ["username", "password", "introduction", "role"])
        } else {
            return UserModel.find({}, ["username", "avatar", "introduction", "role", "gender"])
        }



    },
    delList: async ({ _id }) => {
        // {�d�߱���}, [�n�d�X���Ǧr�q]
        return UserModel.deleteOne({_id})

    },
    putList: async (body) => {
        return UserModel.updateOne({_id:body._id}, body)

    }

}

module.exports = UserService