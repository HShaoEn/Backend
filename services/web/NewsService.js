const NewsModel = require("../../models/NewsModels")

const NewsService = {

    getList: async ({ _id }) => {
        if (_id) {
            // isPublish �j�M�w�g�o���L��
            return NewsModel.find({ _id, isPublish:1 })
        } else {
            return NewsModel.find({ isPublish: 1 }).sort({ editTime:-1})
        }
    },
    getTopList: async ({ limit }) => {

        return NewsModel.find({ isPublish: 1 }).sort({ editTime: -1 }).limit(limit)

    }

}



module.exports = NewsService