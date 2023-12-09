<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container p-0">
      <div class="body">
        <ProductFace :product="product" />
        <ProductOther :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import productsApi from '@/api/products'

import SiteTop from '@/components/SiteTop.vue'
import ProductOther from '@/components/ProductPage/ProductOther.vue'
import ProductFace from '@/components/ProductPage/ProductFace.vue'

export default {
  data() {
    return {
      title: '',
    }
  },
  components: {
    SiteTop,
    ProductOther,
    ProductFace,
  },
  async asyncData({ $axios, params, query, i18n }) {
    const product = await productsApi.getProduct(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      product,
    }
  },
  mounted() {
    this.title = this.product.title
  },
}
</script>

<style></style>
