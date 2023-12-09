<template>
  <div class="wrap">
    <div class="box">
      <div class="top row">
        <div class="col-lg-1 col-xs-12 empty"></div>
        <div class="left col-lg-6 col-xs-12">
          <div thumbsSlider="" ref="smallSwiper" class="swiper smallSwiper">
            <div class="swiper-wrapper">
              <div
                v-for="image in product.images"
                :key="image.id"
                class="swiper-slide"
              >
                <img :src="image.image" alt="" class="pic" />
              </div>
            </div>
          </div>
          <div ref="bigSwiper" class="swiper bigSwiper">
            <div class="swiper-wrapper">
              <div
                v-for="image in product.images"
                :key="image.id"
                class="swiper-slide"
              >
                <img :src="image.image" alt="" class="pic" />
              </div>
            </div>
          </div>
        </div>
        <div class="right col-lg-4 col-xs-12">
          <h4 class="name">{{ product.title }}</h4>
          <div class="info">
            <div class="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 12.5V19.5C4 21.1569 5.34315 22.5 7 22.5H17C18.6569 22.5 20 21.1569 20 19.5V12.5"
                  stroke="#1878F3"
                  stroke-width="1.5"
                />
                <path
                  d="M12 8.5H19.5C19.8148 8.5 20.1111 8.64819 20.3 8.9L21.8 10.9C22.2944 11.5592 21.824 12.5 21 12.5H15.5C15.1852 12.5 14.8889 12.3518 14.7 12.1L12 8.5Z"
                  stroke="#1878F3"
                  stroke-width="1.5"
                />
                <path
                  d="M12 8.5H4.5C4.18524 8.5 3.88885 8.64819 3.7 8.9L2.2 10.9C1.70557 11.5592 2.17595 12.5 3 12.5H8.5C8.81476 12.5 9.11115 12.3518 9.3 12.1L12 8.5Z"
                  stroke="#1878F3"
                  stroke-width="1.5"
                />
                <path
                  d="M14 4.50015L12.7071 5.79304C12.3166 6.18357 11.6834 6.18357 11.2929 5.79304L10 4.50015M12 2.50015V5.50015"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {{ product.count }} {{ $store.state.translations['main.count'] }}
            </div>
            <div class="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 16.5L6 18.5M6 18.5L8 16.5M6 18.5L6 6.5M6 6.5L4 8.5M6 6.5L8 8.5"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 7.5H20"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12 12.5H20"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12 17.5H20"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {{ product.size }} {{ $store.state.translations['main.size'] }}
            </div>
          </div>
          <div class="color">
            <p class="par">{{ $store.state.translations['inner.color'] }}:</p>
            <div class="tones">
              <div
                v-for="color in product.colors"
                :key="color.id"
                class="tone"
                :style="`background-color: ${color.hex}`"
                @click="handleColor(color.id)"
              >
                <div v-if="color.id == colour" class="ring"></div>
              </div>
            </div>
          </div>
          <div class="counter">
            <button @click="decreaseItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="1"
                viewBox="0 0 17 1"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.5C0 0.223858 0.152223 0 0.34 0H16.66C16.8478 0 17 0.223858 17 0.5C17 0.776142 16.8478 1 16.66 1H0.34C0.152223 1 0 0.776142 0 0.5Z"
                  fill="#9A999B"
                />
              </svg>
            </button>
            <p class="count">{{ inc }}</p>
            <button @click="increaseItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <line
                  x1="0.5"
                  y1="8.5"
                  x2="16.5"
                  y2="8.5"
                  stroke="#1D2B1E"
                  stroke-linecap="round"
                />
                <line
                  x1="8.5"
                  y1="0.5"
                  x2="8.5"
                  y2="16.5"
                  stroke="#1D2B1E"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <button
            @click="
              $store.commit('addToCart', {
                id: product.id,
                count: inc,
                color: colour,
              }),
                toast()
            "
            class="button"
          >
            {{ $store.state.translations['inner.add-to-cart'] }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M2.15571 8.83333H17.8443M15.0293 5.5L4.97074 5.5C2.87838 5.5 1.3133 7.43854 1.73596 9.50666L3.09839 16.1733C3.41491 17.7221 4.7662 18.8333 6.33317 18.8333H13.6669C15.2338 18.8333 16.5851 17.7221 16.9017 16.1733L18.2641 9.50666C18.6867 7.43853 17.1217 5.5 15.0293 5.5Z"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 2.16699L5 5.50033"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 2.16699L15 5.50033"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 12.167L7.5 15.5003"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 12.167L12.5 15.5003"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="col-lg-1 col-xs-12"></div>
      </div>
      <div class="bottom row">
        <div class="col-lg-1 col-xs-12"></div>
        <div class="desc col-lg-10 col-xs-12">
          <h4>{{ $store.state.translations['inner.description'] }}</h4>
          <div class="content" v-html="product.desc"></div>
        </div>
        <div class="col-lg-1 col-xs-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  data() {
    return {
      inc: 1,
      colour: this.product.colors[0].id,
    }
  },

  props: ['product'],
  mounted() {
    let swiper = new Swiper(this.$refs.smallSwiper, {
      slidesPerView: 4,
      spaceBetween: 12,
      breakpoints: {
        1024: {
          direction: 'vertical',
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    })
    let swiper2 = new Swiper(this.$refs.bigSwiper, {
      slidesPerView: 1,
      spaceBetween: 24,
      thumbs: {
        swiper: swiper,
      },
    })
  },
  methods: {
    handleColor(colorId) {
      this.colour = colorId
    },
    toast() {
      this.$toast.success('Добавлено в корзину')
    },
    increaseItem() {
      this.inc++
    },
    decreaseItem() {
      if (this.inc > 0) {
        this.inc--
      }
    },
  },
}
</script>

<style scoped>
.top {
  padding: 0 0 56px 0;
}
.left {
  display: grid;
  grid-template-columns: 1.6fr 8.4fr;
  gap: 24px;
}
.smallSwiper {
  height: 592px;
  width: 100%;
}
.bigSwiper {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  height: 592px;
}
.smallSwiper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 8px;
  cursor: pointer;
}
.bigSwiper .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bigSwiper img {
  width: 100%;
  height: 90%;
  object-fit: contain;
}
.button {
  width: 100%;
  max-width: 259px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.button:hover {
  background: var(--light-blue);
  color: white;
}
.button:hover path {
  stroke: white;
}
.button path {
  transition: 0.4s;
}
.name {
  color: var(--grey-80, #353437);
  font-family: var(--decor-bold);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  text-transform: uppercase;
  margin-bottom: 40px;
}
.info {
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 45px;
}
.info .item {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.color .par {
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  margin-bottom: 16px;
}
.color .par span {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.color {
  margin-bottom: 40px;
}
.counter {
  padding: 8px 24px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  border-radius: 55px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  margin-bottom: 52px;
}
.count {
  color: var(--dark-green, #1d2b1e);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.desc {
  padding: 56px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: 64px;
}
.desc h1,
.desc h2,
.desc h3,
.desc h4 {
  color: var(--grey-80, #353437);
  font-family: var(--decor-bold);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
  margin-bottom: 24px;
}
.content::v-deep p {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
}
@media screen and (max-width: 1640px) {
  .empty {
    display: none;
  }
  .left {
    grid-template-columns: 2fr 8fr;
  }
  .bigSwiper,
  .smallSwiper {
    height: 460px;
  }
  .name {
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 20px;
  }
  .info,
  .color,
  .counter {
    margin-bottom: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .left {
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
  }
  .bigSwiper {
    height: 360px;
    border-radius: 8px;
  }
  .smallSwiper {
    height: 80px;
  }
  .smallSwiper img {
    border-radius: 8px;
  }
  .right {
    padding: 24px 0 0 0;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  .button {
    width: 100%;
    max-width: 100%;
  }
  .desc {
    margin-bottom: 40px;
    padding: 40px 0;
  }
  .desc h1,
  .desc h2,
  .desc h3,
  .desc h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 18px;
  }
  .content::v-deep p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
