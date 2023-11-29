const NewsModel = require("../../models/NewsModels")

const NewsService = {

    getList: async ({ _id }) => {
        if (_id) {
            // isPublish 搜尋已經發布過的
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