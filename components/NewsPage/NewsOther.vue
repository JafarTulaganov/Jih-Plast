<template>
  <div class="wrap">
    <div class="header">
      <h4 class="title">{{ $store.state.translations['inner.other-news'] }}</h4>
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
          v-for="item in post.other_news"
          :key="item.id"
          class="swiper-slide"
        >
          <div class="item">
            <NuxtLink :to="localePath(`/news/${item.slug}`)">
              <div class="img">
                <img :src="item.image" alt="" class="pic" />
              </div>
              <div class="info">
                <p class="date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 4.33301C2 3.22844 2.89543 2.33301 4 2.33301H12C13.1046 2.33301 14 3.22844 14 4.33301V12.6663C14 13.7709 13.1046 14.6663 12 14.6663H4C2.89543 14.6663 2 13.7709 2 12.6663V4.33301Z"
                      stroke="#ACACAF"
                    />
                    <path d="M2 6H14" stroke="#ACACAF" stroke-linecap="round" />
                    <path
                      d="M5.33325 1.33301L5.33325 3.33301"
                      stroke="#ACACAF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6667 1.33301V3.33301"
                      stroke="#ACACAF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <ellipse
                      cx="7.99992"
                      cy="9.99967"
                      rx="0.666667"
                      ry="0.666667"
                      fill="#ACACAF"
                    />
                    <ellipse
                      cx="10.6667"
                      cy="9.99967"
                      rx="0.666667"
                      ry="0.666667"
                      fill="#ACACAF"
                    />
                    <ellipse
                      cx="5.33342"
                      cy="9.99967"
                      rx="0.666667"
                      ry="0.666667"
                      fill="#ACACAF"
                    />
                  </svg>
                  {{ item.date }}
                </p>
                <p class="views">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14.0868 6.56841C14.8599 7.38179 14.8599 8.61756 14.0868 9.43094C12.7829 10.8028 10.5436 12.6663 7.99992 12.6663C5.45624 12.6663 3.21691 10.8028 1.91306 9.43094C1.13998 8.61756 1.13998 7.38179 1.91306 6.56841C3.21691 5.19656 5.45624 3.33301 7.99992 3.33301C10.5436 3.33301 12.7829 5.19656 14.0868 6.56841Z"
                      stroke="#ACACAF"
                    />
                    <path
                      d="M9.99992 7.99967C9.99992 9.10424 9.10449 9.99967 7.99992 9.99967C6.89535 9.99967 5.99992 9.10424 5.99992 7.99967C5.99992 6.89511 6.89535 5.99967 7.99992 5.99967C9.10449 5.99967 9.99992 6.89511 9.99992 7.99967Z"
                      stroke="#ACACAF"
                    />
                  </svg>
                  {{ item.views }}
                </p>
              </div>
              <p class="name">
                {{ item.title }}
              </p>
              <p class="link">
                {{ $store.state.translations['main.more']
                }}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M7.91992 5.1416L13.2783 10.4999L7.91992 15.8583"
                    stroke="#1878F3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
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
  props: ['post'],
  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1.5,
      spaceBetween: 8,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    })
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 24px;
}
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
  font-family: var(--decor-bold);
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
.img {
  border-radius: 16px;
  margin-bottom: 12px;
  overflow: hidden;
}
.pic {
  transition: 0.4s;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.name {
  margin-bottom: 16px;
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
  max-width: 330px;
  transition: 0.4s;
}
.info {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 10px;
}
.date,
.views {
  color: #acacaf;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.link {
  color: var(--light-blue, #1878f3);
  font-family: var(--decor);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
}
.item a:hover {
  text-decoration: none;
}
.item:hover img {
  transform: scale(1.1);
}
.item:hover .name {
  color: var(--light-blue);
}
@media screen and (max-width: 1024px) {
  .buttons {
    display: none;
  }
  .title {
    font-size: 18px;
  }
  .header {
    margin-bottom: 20px;
  }
}
</style>
