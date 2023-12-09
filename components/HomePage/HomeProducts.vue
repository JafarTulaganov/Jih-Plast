<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations['main.our-products'] }}
      </h4>
      <div class="buttons">
        <button
          :class="{ active: Object.keys($route.query).length == 0 }"
          @click="reset"
        >
          {{ $store.state.translations['main.all'] }}
        </button>
        <button
          :class="{ active: $route.query[`category_${item.id}`] == item.id }"
          @click="onChange('category', item.id)"
          v-for="item in categories"
          :key="item.id"
        >
          {{ item.title }}
        </button>
      </div>
      <div class="grid">
        <div
          v-for="item in products"
          :key="item.id"
          :class="{ active: activeTab === item.id }"
          class="item"
        >
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
                  {{ item.size }} {{ $store.state.translations['main.size'] }}
                </p>
                <p class="button">
                  {{ $store.state.translations['main.more'] }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['categories', 'products'],

  data() {
    return {
      activeTab: 1,
    }
  },

  async fetch() {},

  computed: {
    changeQuery() {
      return this.$route.query[
        Object.keys(this.$route.query).find((item) => item.includes('category'))
      ]
    },
  },

  watch: {
    changeQuery() {
      this.$emit('getProducts')
    },
  },

  mounted() {},

  methods: {
    async onChange(name, value) {
      let query = {}
      query[`${name}_${value}`] = value
      if (!Object.keys(this.$route.query).includes(`${name}_${value}`)) {
        await this.$router.replace({
          path: this.$route.path,
          query: query,
        })
      }
      this.$emit('getProducts')
    },
    async reset() {
      await this.$router.replace(
        this.localePath({
          path: `/`,
        })
      )
      this.$emit('getProducts')
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 24px;
}
.container {
  border-radius: 40px;
  background: var(--white, #fff);
  padding: 72px 56px;
}
.title {
  color: var(--black, #020105);
  text-align: center;
  font-family: var(--decor-bold);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%;
  margin-bottom: 24px;
  text-transform: uppercase;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.buttons button {
  color: var(--black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  padding: 6px 24px;
  border-radius: 32px;
  border: 1px solid var(--grey-24, #c2c2c3);
  background: var(--white, #fff);
  white-space: nowrap;
}
.buttons a:hover {
  text-decoration: none;
}
.buttons button.active {
  color: #fff;
  background: var(--light-blue);
  border-color: var(--light-blue);
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}
.item {
  border-radius: 29px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  display: none;
}
.item:nth-last-child(1),
.item:nth-last-child(2),
.item:nth-last-child(3),
.item:nth-last-child(4),
.item:nth-last-child(5),
.item:nth-last-child(6),
.item:nth-last-child(7),
.item:nth-last-child(8),
.item:nth-last-child(9),
.item:nth-last-child(10),
.item:nth-last-child(11),
.item:nth-last-child(12) {
  display: block;
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
    grid-template-columns: repeat(5, 1fr);
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
}
</style>
