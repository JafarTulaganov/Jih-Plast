<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.about']" />

    <div class="container p-0">
      <div class="body">
        <div class="box">
          <div class="content">
            <h4>{{ $store.state.translations['about.title'] }}</h4>
            <p>
              {{ $store.state.translations['about.txt-1'] }}
            </p>
            <p>
              {{ $store.state.translations['about.txt-2'] }}
            </p>
            <p>
              {{ $store.state.translations['about.txt-3'] }}
            </p>
          </div>
          <div class="video">
            <video muted loop playsinline autoplay src="/about.mp4"></video>
          </div>
          <div class="numbers">
            <div class="number">
              <p class="sup">{{ $store.state.translations['about.sup-1'] }}</p>
              <p class="num">{{ $store.state.translations['about.num-1'] }}</p>
              <p class="sub">{{ $store.state.translations['about.sub-1'] }}</p>
            </div>
            <div class="number">
              <p class="sup">{{ $store.state.translations['about.sup-2'] }}</p>
              <p class="num">{{ $store.state.translations['about.num-3'] }}</p>
              <p class="sub">{{ $store.state.translations['about.sub-2'] }}</p>
            </div>
            <div class="number">
              <p class="sup">{{ $store.state.translations['about.sup-3'] }}</p>
              <p class="num">{{ $store.state.translations['about.num-3'] }}</p>
              <p class="sub">{{ $store.state.translations['about.sub-3'] }}</p>
            </div>
            <div class="number">
              <p class="sup">{{ $store.state.translations['about.sup-4'] }}</p>
              <p class="num">{{ $store.state.translations['about.num-4'] }}</p>
              <p class="sub">{{ $store.state.translations['about.sub-4'] }}</p>
            </div>
          </div>
          <div class="txt content">
            <p>
              {{ $store.state.translations['about.txt-4'] }}
            </p>
          </div>
        </div>
        <div class="map">
          <h4>{{ $store.state.translations['about.map-1'] }}</h4>
          <p>{{ $store.state.translations['about.map-2'] }}</p>
          <WorldMap class="world" />
          <p>
            {{ $store.state.translations['about.map-3'] }}
          </p>
        </div>
        <div class="box certificates">
          <h4>{{ $store.state.translations['about.cert-title'] }}</h4>
          <div class="items" id="lightgallery">
            <a
              v-for="cert in certificates"
              :key="cert.id"
              class="item"
              :href="cert.image"
            >
              <img :src="cert.image" />
            </a>
          </div>
        </div>
        <div class="partners">
          <h4>{{ $store.state.translations['about.part-title'] }}</h4>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div v-for="item in partners" :key="item.id" class="swiper-slide">
                <img :src="item.image" alt="" />
              </div>
            </div>
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

import partnersApi from '@/api/partners'
import infoApi from '@/api/info'

import SiteTop from '@/components/SiteTop.vue'
import WorldMap from '~/components/WorldMap.vue'

export default {
  data() {
    return {
      title: 'О компании',
    }
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
  methods: {},
  components: { SiteTop, WorldMap },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el)

    new Swiper('.swiper', {
      slidesPerView: 2.5,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 7,
        },
      },
    })
  },
  async asyncData({ $axios }) {
    const partners = await partnersApi.getPartners($axios)
    const certificates = await infoApi.getCertificates($axios)

    return {
      partners,
      certificates,
    }
  },
}
</script>

<style scoped>
.map {
  margin: 120px 0;
  background: var(--blue);
  border-radius: 24px;
  padding: 48px 56px;
}
.map h4 {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 32px */
  margin-bottom: 8px;
}
.map p {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 480px;
}
.world {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px 0 -200px 0;
}

.box {
  max-width: 1208px;
  margin: 0 auto;
}
.content h1,
.content h2,
.content h3,
.content h4 {
  color: var(--grey-80, #353437);
  font-family: var(--decor);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  text-transform: uppercase;
  margin-bottom: 24px;
}
.content p {
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
}
.video video {
  width: 100%;
  height: 582px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 40px;
}
.numbers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  padding: 54px 64px;
  margin-bottom: 40px;
}
.sup {
  color: var(--grey-64, #5d5d5f);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
  margin-bottom: 8px;
  display: none;
}
.num {
  color: var(--black, #020105);
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 44px */
  text-transform: uppercase;
  margin-bottom: 8px;
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  text-align: center;
}
.number {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.certificates h4,
.partners h4 {
  color: #000;
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 35.84px */
  margin-bottom: 40px;
}
.certificates .items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  padding: 24px 32px;
  gap: 32px;
  margin-bottom: 120px;
}
.certificates img {
  width: 100%;
  height: 515px;
  object-fit: contain;
  border: 1px solid #ededed;
  display: flex;
}
.partners {
  padding-top: 80px;
  border-top: 1px solid var(--border);
  padding-bottom: 26px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid var(--border);
}
.swiper {
  border-right: 1px solid white;
}
.swiper-slide img {
  width: 90%;
  height: 100%;
  height: 64px;
  object-fit: contain;
}
@media screen and (max-width: 1024px) {
  .content h1,
  .content h2,
  .content h3,
  .content h4 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 12px;
  }
  .content p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 12px;
  }
  .video video {
    height: 360px;
    margin-bottom: 24px;
    border-radius: 12px;
  }
  .numbers {
    padding: 24px;
    grid-template-columns: repeat(2, 1fr);
    gap: 56px;
    border-radius: 12px;
  }
  .number {
    align-items: flex-start;
  }
  .num {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
  .sup {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .map {
    margin: 56px 0;
    padding: 32px 24px;
  }
  .map h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    margin-bottom: 12px;
  }
  .map p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .map .world {
    margin: 24px 0 0 0;
  }
  .certificates h4 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 20px;
  }
  .certificates .items {
    border-radius: 12px;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding: 24px;
    margin-bottom: 56px;
  }
  .certificates img {
    height: auto;
  }
  .partners {
    padding: 0;
    border: none;
  }
  .partners h4 {
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 20px;
  }
}
</style>
