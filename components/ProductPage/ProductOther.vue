<template>
  <div class="wrap">
    <div class="header">
      <h4 class="title">
        {{ $store.state.translations['inner.other-products'] }}
      </h4>
      <div class="buttons">
        <button class="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M16.6667 13.333L10 19.9997M10 19.9997L16.6667 26.6663M10 19.9997L30 19.9997"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="next reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M16.6667 13.333L10 19.9997M10 19.9997L16.6667 26.6663M10 19.9997L30 19.9997"
              stroke="#020105"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="item in product.other_products"
          :key="item.id"
          class="swiper-slide"
        >
          <div class="item">
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
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['product'],
  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1.5,
      spaceBetween: 16,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
        1640: {
          slidesPerView: 6,
        },
      },
    })
  },
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
}
.reverse svg {
  transform: rotate(180deg);
}
.title {
  color: var(--grey-80, #353437);
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
}
.header button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid var(--border);
  padding: 8px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 24px;
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
@media screen and (max-width: 1640px) {
  .title {
    font-size: 28px;
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
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  .buttons {
    display: none;
  }
  .header {
    margin-bottom: 22px;
  }
}
</style>
