<template>
  <div class="master">
    <SiteTop :title="title" />

    <div class="container p-0">
      <div class="body">
        <div class="box">
          <div class="search">
            <input
              @keyup.enter="handleSearch()"
              v-model="searcher"
              type="text"
              placeholder="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M25.6663 25.6663L23.333 23.333M2.33301 13.4163C2.33301 7.29519 7.29519 2.33301 13.4163 2.33301C19.5375 2.33301 24.4997 7.29519 24.4997 13.4163C24.4997 19.5375 19.5375 24.4997 13.4163 24.4997C7.29519 24.4997 2.33301 19.5375 2.33301 13.4163Z"
                stroke="#1B1B3A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div v-if="products.length > 0" class="grid">
            <div v-for="item in products" :key="item?.id" class="item">
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
                          :key="color?.id"
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
                    <p class="size">{{ item.count }} шт • {{ item.size }} см</p>
                    <p class="button">Подробнее</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div v-else class="empty">
            <p>
              {{ $store.state.translations['inner.search-empty'] }}
            </p>
            <img src="@/assets/img/empty.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsApi from '@/api/products'

export default {
  data() {
    return {
      title: this.$store.state.translations['inner.search-results'],
      searcher: '',
    }
  },

  async asyncData({ $axios, params, query, i18n }) {
    const productsData = await productsApi.getProducts($axios, {
      params: { search: params.id },
      headers: {
        language: i18n.locale,
      },
    })

    const products = productsData.results

    return {
      products,
    }
  },

  methods: {
    handleSearch() {
      this.$router.replace(
        this.localePath({ path: `/search/${this.searcher}` })
      )
    },
  },
}
</script>

<style scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
  margin-top: 88px;
}
.empty img {
  width: 100%;
  max-width: 496px;
  object-fit: contain;
  display: flex;
}
.empty p {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor-bold);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.box {
  max-width: 1396px;
  margin: 0 auto;
}
.search {
  position: relative;
  margin-bottom: 24px;
}
.search input {
  width: 100%;
  border-radius: 51px;
  border: 1px solid #ebebeb;
  padding: 18px 32px;
  color: #1b1b3a;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.search svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px;
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
</style>
