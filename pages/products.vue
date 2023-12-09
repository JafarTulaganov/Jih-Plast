<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.products']" />
    <div class="container p-0">
      <div class="body suicide">
        <div class="row">
          <div class="col-lg-2 col-xs-12 left">
            <div class="aside">
              <div class="categories">
                <h4 class="par">
                  {{ $store.state.translations['inner.categories'] }}
                </h4>
                <ul>
                  <li v-for="category in categories" :key="category.id">
                    <button @click="onChange('category', category.id)">
                      {{ category.title }}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="filter">
                <h4 class="par">
                  {{ $store.state.translations['inner.filter'] }}
                </h4>
                <div class="select form-select">
                  <!-- <select
                    @change="($event) => handleSelect('ordering', $event)"
                  >
                    <option value="count">
                      {{ $store.state.translations['inner.count'] }}
                    </option>
                    <option value="-count">
                      - {{ $store.state.translations['inner.count'] }}
                    </option>
                    <option value="price">
                      {{ $store.state.translations['inner.price'] }}
                    </option>
                    <option value="-price">
                      - {{ $store.state.translations['inner.price'] }}
                    </option>
                    <option value="id">
                      {{ $store.state.translations['inner.id'] }}
                    </option>
                    <option value="-id">
                      - {{ $store.state.translations['inner.id'] }}
                    </option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.433 9.4502L12.004 15.8802L5.57401 9.4502"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> -->

                  <a-select class="nexuya" v-model="selector">
                    <a-select-option
                      v-for="option in options"
                      :key="option.id"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </a-select-option>
                  </a-select>
                </div>
              </div>
              <div class="coolors">
                <p class="par">
                  {{ $store.state.translations['inner.choose-color'] }}
                </p>
                <div class="tones">
                  <div
                    v-for="item in colors"
                    :key="item.id"
                    :style="`background-color: ${item.hex}`"
                    class="tone"
                    @click="colorChange('color', item.id)"
                  >
                    <!-- <div class="ring"></div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-xs-12 right">
            <div
              class="tags"
              v-show="
                Object.entries($route.query).filter(
                  (resetter) =>
                    resetter[0] != 'page' && resetter[0] != 'page_size'
                ).length > 0
              "
            >
              <div
                v-for="cat in categories.filter((item) =>
                  Object.entries($route.query)
                    .filter(
                      (element) =>
                        element[0] != 'page' && element[0] != 'page_size'
                    )
                    .find((one) => one[1] == item.id)
                )"
                :key="cat.id"
                class="tag"
              >
                <p>{{ cat.title }}</p>
                <button @click="deleteCat(cat.id)" class="x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.2427 7.75786L7.75739 16.2431M16.2427 16.2431L7.75739 7.75781"
                      stroke="#9CAFCB"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                v-for="palette in colors.filter((item) =>
                  Object.entries($route.query)
                    .filter(
                      (element) =>
                        element[0] != 'page' && element[0] != 'page_size'
                    )
                    .find((one) => one[1] == item.id)
                )"
                :key="palette.id"
                class="palette"
                :style="`background-color: ${palette.hex}`"
                @click="deleteColor(palette.id)"
              >
                <span class="x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.2427 7.75786L7.75739 16.2431M16.2427 16.2431L7.75739 7.75781"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button @click="reset" href="/products" class="tag reset">
                <p>{{ $store.state.translations['inner.clear-filter'] }}</p>
              </button>
            </div>
            <div class="grid">
              <div v-for="item in products" :key="item.id" class="item">
                <NuxtLink :to="localePath(`/product/${item.slug}`)">
                  <div class="img">
                    <img :src="item.image" alt="" class="pic" />
                  </div>
                  <div class="bottom">
                    <div class="colors">
                      <div class="swift">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <rect
                            x="5"
                            y="5"
                            width="10"
                            height="10"
                            rx="3"
                            stroke="#3C4BDC"
                          />
                          <path
                            d="M10 1.66699V2.50033"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10 17.5V18.3333"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.7258 3.27441L16.1366 3.86367"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.86328 16.1367L3.27403 16.726"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 10L17.4999 10"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.5 10L1.66667 10"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.7258 16.7256L16.1366 16.1363"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.86328 3.86328L3.27403 3.27403"
                            stroke="#3C4BDC"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="stick"></div>
                        <div class="vars">
                          <div
                            v-for="color in item.colors"
                            :key="color.id"
                            class="var"
                            :style="`background-color: ${color.hex}`"
                          ></div>
                        </div>
                      </div>
                      <div class="count">
                        <p>15+</p>
                      </div>
                    </div>
                    <div class="content">
                      <p class="name">{{ item.title }}</p>
                      <p class="size">
                        {{ item.count }}
                        {{ $store.state.translations['main.count'] }} •
                        {{ item.size }}
                        {{ $store.state.translations['main.size'] }}
                      </p>
                      <p class="button">
                        {{ $store.state.translations['main.more'] }}
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="pager">
              <a-pagination
                v-model="current"
                :total="totalPage"
                :page-size.sync="pageSize"
                show-less-items
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import productsApi from '@/api/products'
import categoriesApi from '@/api/categories'

import SiteTop from '@/components/SiteTop.vue'

export default {
  data() {
    return {
      title: 'Продукция',
      selector: this.$store.state.translations['inner.count'],
      options: [
        {
          label: this.$store.state.translations['inner.count'],
          value: 'count',
        },
        {
          label: '-' + this.$store.state.translations['inner.count'],
          value: '-count',
        },
        {
          label: this.$store.state.translations['inner.price'],
          value: 'price',
        },
        {
          label: '-' + this.$store.state.translations['inner.price'],
          value: '-price',
        },
        {
          label: this.$store.state.translations['inner.id'],
          value: 'id',
        },
        {
          label: '-' + this.$store.state.translations['inner.id'],
          value: '-id',
        },
      ],
      current: 1,
      pageSize: 20,
    }
  },
  components: { SiteTop },
  async asyncData({ $axios, params, query, i18n }) {
    const productsData = await productsApi.getProducts($axios, {
      params: query,
      page_size: 20,
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
    const colors = await productsApi.getColors($axios, {
      ...query,
    })

    const products = productsData.results
    const totalPage = productsData.count

    return {
      products,
      categories,
      colors,
      totalPage,
    }
  },
  methods: {
    async handleSelect(ordering, value) {
      let query = { ...this.$route.query }
      query = { ...query, ordering: value }
      if (!Object.keys(this.$route.query).includes(`${ordering}_${value}`)) {
        await this.$router.replace(
          this.localePath({
            path: this.$route.path,
            query: query,
          })
        )
      }

      this.changeProducts()
    },

    async onChange(name, value) {
      let query = {}
      query[`${name}_${value}`] = value
      if (!Object.keys(this.$route.query).includes(`${name}_${value}`)) {
        await this.$router.replace(
          this.localePath({
            path: `/products`,
            query: {
              ...query,
              page: 1,
              page_size: this.$route.query.page_size,
            },
          })
        )
      }
      this.changeProducts()
    },
    async colorChange(name, value) {
      let query = { ...this.$route.query, page: 1 }
      query[`${name}_${value}`] = value
      if (!Object.keys(this.$route.query).includes(`${name}_${value}`)) {
        await this.$router.replace(
          this.localePath({
            path: `/products`,
            query: query,
          })
        )
      }
      this.changeProducts()
    },
    async changeProducts() {
      const productsData = await productsApi.getProducts(this.$axios, {
        params: this.$route.query,
        headers: {
          language: this.$i18n.locale,
        },
      })

      this.totalPage = productsData.count
      this.products = productsData.results
    },
    async reset() {
      await this.$router.replace(
        this.localePath({
          path: `/products`,
          query: {
            page: this.$route.query.page,
            page_size: this.$route.query.page_size,
          },
        })
      )
      this.changeProducts()
    },
    async deleteCat(value) {
      let query = { ...this.$route.query }
      delete query[`category_${value}`]

      await this.$router.replace(
        this.localePath({
          path: `/products`,
          query: query,
        })
      )
      this.changeProducts()
    },
    async deleteColor(value) {
      let query = { ...this.$route.query }
      delete query[`color_${value}`]

      await this.$router.replace(
        this.localePath({
          path: `/products`,
          query: query,
        })
      )
      this.changeProducts()
    },
  },
  async mounted() {
    if (
      !Object.keys(this.$route.query).includes('page') ||
      !Object.keys(this.$route.query).includes('page_size')
    ) {
      await this.$router.replace({
        path: this.$route.fullPath,
        query: { page: 1, page_size: 20 },
      })
    }
    this.current = Number(this.$route.query.page)
  },
  watch: {
    selector(val) {
      this.handleSelect('ordering', val)
    },

    async current(val) {
      if (val != this.$route.query?.page) {
        await this.$router.replace({
          path: this.$route.fullPath,
          query: { ...this.$route.query, page: val },
        })
      }
      let productsData = await productsApi.getProducts(this.$axios, {
        params: this.$route.query,
        headers: {
          language: this.$i18n.locale,
        },
      })
      this.totalPage = productsData.count
      this.products = productsData.results
    },
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.right {
  padding-left: 24px;
  border-left: 1px solid var(--border);
}
.par {
  color: var(--black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  margin-bottom: 28px;
}
.left {
  position: relative;
}
/* .aside {
  position: sticky;
  top: 160px;
} */
.aside ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.aside button {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.aside button.active {
  color: var(--light-blue);
}
.tags {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.tag {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--light-blue);
  padding: 8px 24px;
  color: var(--light-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  border-radius: 40px;
  cursor: pointer;
  max-height: 42px;
}
.tag p {
  margin: 0;
}
.reset {
  border-color: var(--red);
  color: var(--red);
}
.categories {
  margin-bottom: 44px;
}
.nexuya {
  width: 100%;
  margin-bottom: 24px;
  max-width: 224px;
}
.nexuya :deep(.ant-select-selection) {
  width: 100%;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 224px;
  border-radius: 38px;
  border: 1px solid var(--grey-8, #ebebeb);
  justify-content: space-between;
  padding: 8px 24px;
  cursor: pointer;
  min-height: 50px;
}
.nexuya :deep(.ant-select-selection__rendered) {
  margin: 0;
  display: flex;
  align-items: center;
}
.nexuya :deep(.ant-select-arrow) {
  right: 24px;
}
.nexuya :deep(.ant-select-selection-selected-value) {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
.item {
  border-radius: 29px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
}
.pic {
  width: 100%;
  height: 280px;
  object-fit: contain;
  margin-bottom: 14px;
  transition: 0.4s;
}
.item:hover .pic {
  transform: scale(1.1);
}
.bottom {
  padding: 10px 16px 18px 16px;
}
.colors {
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-bottom: 10px;
}
.count {
  color: var(--black, #020105);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  text-transform: lowercase;
}
.item a:hover {
  text-decoration: none;
}
.var {
  display: none;
}
.var:nth-child(1),
.var:nth-child(2),
.var:nth-child(3),
.var:nth-child(4),
.var:nth-child(5) {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex !important;
}
.vars {
  display: flex;
  align-items: center;
  gap: 8px;
}
.swift {
  display: flex;
  align-items: center;
  gap: 12px;
}
.stick {
  width: 1px;
  height: 20px;
  background: #ebebeb;
}
.name {
  color: var(--black, #020105);
  text-overflow: ellipsis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 54px;
}
.size {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 12px;
}
.button {
  color: var(--light-blue, #1878f3);
  font-family: var(--decor-bold);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  padding: 12px;
  border: 1px solid var(--light-blue);
  border-radius: 23px;
  text-align: center;
  transition: 0.4s;
}
.item:hover .button {
  background: var(--light-blue);
  color: white;
}
.img,
.item {
  overflow: hidden;
}
.palette {
  width: 42px;
  height: 42px;
  border: 1px solid #ebebeb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.palette span {
  transition: 0.2s;
  opacity: 0;
  visibility: hidden;
}
.palette:hover span {
  opacity: 1;
  visibility: visible;
}
.pager {
  margin: 24px 0 0 0;
}
.pager :deep(.ant-pagination-item-link) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pager :deep(.ant-pagination-item) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pager :deep(.ant-pagination-item-active) {
  border-color: var(--light-blue);
}
.pager :deep(.ant-pagination-item a) {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.pager :deep(.ant-pagination-item-active:focus a),
.pager :deep(.ant-pagination-item:hover a),
.pager :deep(.ant-pagination-item:hover) {
  color: #020105;
}

@media screen and (max-width: 1640px) {
  .container {
    background: transparent;
  }
  .title {
    font-size: 28px;
  }
  .buttons {
    gap: 14px;
  }
  .buttons button {
    padding: 6px 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .pic {
    height: 190px;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .tones {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .container {
    border-radius: 16px;
    padding: 32px 16px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%;
    margin-bottom: 16px;
  }
  .buttons {
    flex-wrap: wrap;
    gap: 8px;
  }
  .buttons a {
    padding: 6px 24px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .item {
    border-radius: 18px;
  }
  .pic {
    height: 177px;
  }
  .colors {
    padding: 4px 6px;
  }
  .swift {
    gap: 6px;
  }
  .var {
    height: 16px !important;
    width: 16px !important;
  }
  .var:nth-child(4),
  .var:nth-child(5) {
    display: none !important;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    min-height: initial;
  }
  .size {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .button {
    padding: 10px 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  .right,
  .left {
    padding: 0;
    border: none;
  }
  .suicide {
    background: transparent;
    margin: 0 0 24px 0;
    padding: 0 16px;
  }
  .aside ul {
    gap: 14px;
  }
  .aside button {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .par {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 12px;
    font-family: var(--decor-bold);
  }
  .tones {
    max-width: 100%;
    grid-template-columns: repeat(6, 1fr);
  }
  .select {
    max-width: 100%;
  }
  .row {
    gap: 32px;
    flex-direction: column-reverse;
  }
  .reset {
    display: none;
  }
  .categories {
    margin-bottom: 24px;
  }
}
</style>
