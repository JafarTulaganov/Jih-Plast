/* eslint-disable */

export default {
  async getNews(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/news', {
          ...params,
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },

  async getNew(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/news/${slug}`, {
          ...params,
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
