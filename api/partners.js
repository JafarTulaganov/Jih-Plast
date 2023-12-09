/* eslint-disable */

export default {
  async getPartners(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/partners', {
          ...params,
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
