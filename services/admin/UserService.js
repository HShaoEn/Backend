const UserModel = require("../../models/UserModels")

const UserService = {
    login: async ({ username, password }) => {
        return UserModel.find({
            username,
            password
        })
    },
    upload: async ({ _id, username, gender, avatar, introduction }) => {
        // 分為有無更新頭像
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
        // {查詢條件}, [要查出哪些字段]
        if (_id) {
            // 如果是查詢
            return UserModel.find({ _id }, ["username", "password", "introduction", "role"])
        } else {
            return UserModel.find({}, ["username", "avatar", "introduction", "role", "gender"])
        }



    },
    delList: async ({ _id }) => {
        // {查詢條件}, [要查出哪些字段]
        return UserModel.deleteOne({_id})

    },
    putList: async (body) => {
        return UserModel.updateOne({_id:body._id}, body)

    }

}

module.exports = UserService