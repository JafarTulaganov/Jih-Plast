<template>
  <div class="wrap">
    <HomeHero />
    <HomeProducts
      @getProducts="changeProducts"
      :categories="categories"
      :products="products"
    />
    <HomeCatalog :categories="categories" />
    <HomeAbout />
    <HomeNews :news="news" />
    <HomeForm />
    <HomeContacts :info="info" />
  </div>
</template>

<script>
import newsApi from '@/api/news'
import categoriesApi from '@/api/categories'
import productsApi from '@/api/products'
import infoApi from '@/api/info'

import HomeAbout from '~/components/HomePage/HomeAbout.vue'
import HomeCatalog from '~/components/HomePage/HomeCatalog.vue'
import HomeContacts from '~/components/HomePage/HomeContacts.vue'
import HomeForm from '~/components/HomePage/HomeForm.vue'
import HomeHero from '~/components/HomePage/HomeHero.vue'
import HomeNews from '~/components/HomePage/HomeNews.vue'
import HomeProducts from '~/components/HomePage/HomeProducts.vue'
export default {
  components: {
    HomeHero,
    HomeProducts,
    HomeCatalog,
    HomeAbout,
    HomeNews,
    HomeForm,
    HomeContacts,
  },
  head() {
    return {
      meta: [
        {
          name: 'view-transition',
          content: 'same-origin',
        },
      ],
    }
  },
  name: 'IndexPage',
  async asyncData({ $axios, params, query, i18n }) {
    const news = await newsApi.getNews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const categories = await categoriesApi.getCategories($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })
    const productsData = await productsApi.getProducts($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })
    const products = productsData.results
    const info = await infoApi.getInfo($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      news,
      categories,
      products,
      info,
    }
  },
  methods: {
    async changeProducts() {
      const productsData = await productsApi.getProducts(this.$axios, {
        params: this.$route.query,
        headers: {
          language: this.$i18n.locale,
        },
      })

      this.products = productsData.results
    },
  },
}
</script>

<style></style>
