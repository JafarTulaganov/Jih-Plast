/* eslint-disable */

export default {
  async getSearch(query, axios) {
    try {
      let res
      console.log(query)
      if (axios) {
        res = await axios.get(`/products`, {
          ...params,
        })
      }
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
