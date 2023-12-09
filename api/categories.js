/* eslint-disable */

export default {
  async getCategories(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/categories', {
          ...params,
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getCategory(slug, axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/categories/${slug}`, {
          ...params,
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
