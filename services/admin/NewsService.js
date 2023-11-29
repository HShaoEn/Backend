const NewsModel = require("../../models/NewsModels")

const NewsService = {
    add: async ({ title, content,cover ,category, isPublish, editTime, createTime}) => {
        console.log("NewsModel")
        return NewsModel.create({
            title, content, category, isPublish, editTime, createTime, cover

        })
    },
    getList: async ({ _id }) => {
        if (_id) {
            return NewsModel.find({ _id })
        } else {
            return NewsModel.find({})
        }



    },
    publish: async ({ _id, isPublish, editTime}) => {
        return NewsModel.updateOne({
            _id
        }, {
            isPublish,
            editTime
        })

    },
    delList: async ({ _id }) => {
        // {�d�߱���}, [�n�d�X���Ǧr�q]
        return NewsModel.deleteOne({ _id })

    },
    updateList: async ({ _id ,title, content, category, isPublish, cover, editTime }) => {
        // {�d�߱���}, [�n�d�X���Ǧr�q]
        if (cover) {
            return NewsModel.updateOne({

                _id

            }, {

                title, content, category, isPublish, cover, editTime

            })

        } else {
            return NewsModel.updateOne({

                _id

            }, {

                title, content, category, isPublish, editTime

            })
        }

    }

}



module.exports = NewsService