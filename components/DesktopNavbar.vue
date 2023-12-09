<template>
  <div id="navbar" class="wrap">
    <div class="container">
      <div class="top">
        <div class="left">
          <p class="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="11"
                r="3"
                stroke="#1878F3"
                stroke-width="1.5"
              />
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="#1878F3"
                stroke-width="1.5"
              />
            </svg>
            {{ info.adres }}
          </p>
        </div>
        <div class="right">
          <div class="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#1878F3"
                stroke-width="1.5"
              />
              <path
                d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <a :href="`mailto:${info.email}`">{{ info.email }}</a>
          </div>
          <div class="number">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="#1878F3"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
          </div>
          <div class="lang">
            <div class="current">
              <div v-if="$i18n.locale == 'uz'">O'z</div>
              <div v-if="$i18n.locale == 'ru'">Ру</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M17.4166 7.79199L11 14.2087L4.58331 7.79199"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="drop">
              <nuxt-link :to="switchLocalePath('uz')">{{
                $store.state.translations['main.uzbek']
              }}</nuxt-link>
              <nuxt-link :to="switchLocalePath('ru')">{{
                $store.state.translations['main.russian']
              }}</nuxt-link>
              <!-- <nuxt-link :to="switchLocalePath('en')">English</nuxt-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="brand">
            <NuxtLink :to="localePath('/')">
              <img src="@/assets/img/logo/brand.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="links">
            <ul>
              <li>
                <NuxtLink :to="localePath('/')">{{
                  $store.state.translations['main.main']
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/products')">{{
                  $store.state.translations['main.products']
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/about')">{{
                  $store.state.translations['main.about']
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/news')">{{
                  $store.state.translations['main.news']
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contacts')">{{
                  $store.state.translations['main.contacts']
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="search">
            <input
              id="search"
              @keyup.enter="handleSearch"
              v-model="searcher"
              type="text"
              :placeholder="$store.state.translations['main.search']"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_450_11821)">
                <path
                  d="M18.3334 18.3336L16.6667 16.667M1.66669 9.58366C1.66669 5.2114 5.2111 1.66699 9.58335 1.66699C13.9556 1.66699 17.5 5.2114 17.5 9.58366C17.5 13.9559 13.9556 17.5003 9.58335 17.5003C5.2111 17.5003 1.66669 13.9559 1.66669 9.58366Z"
                  stroke="#1878F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_450_11821">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="cart">
            <NuxtLink :to="localePath('/cart')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.562 10.0039C4.81221 8.00215 6.51381 6.5 8.53111 6.5H15.4688C17.4861 6.5 19.1877 8.00215 19.438 10.0039L20.438 18.0039C20.7364 20.3913 18.8748 22.5 16.4688 22.5H7.53111C5.12511 22.5 3.26357 20.3913 3.562 18.0039L4.562 10.0039Z"
                  stroke="#020105"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <div v-if="$store.state.cart.length > 0" class="tag"></div>
              {{ $store.state.translations['main.cart'] }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from '@/api/info'

export default {
  data() {
    return {
      searcher: '',
      info: '',
    }
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios)

    this.info = info
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll', 'drop')
      } else {
        navbar.classList.remove('scroll', 'drop')
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },

  methods: {
    handleSearch() {
      this.$router.push(this.localePath(`/search/${this.searcher}`))
      this.searcher = ''
    },
  },
}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  transform: 0.4s;
  overflow: hidden;
}
.wrap.scroll .container {
  max-height: 100px;
}
.wrap.scroll .top {
  pointer-events: none;
  transform: translateY(-100px);
}
.wrap.scroll .bottom {
  transform: translateY(-43px);
}
.container {
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  box-shadow: 0px 16px 57px -23px rgba(6, 24, 44, 0.16);
  margin-top: 24px;
  padding: 0;
  max-height: 145px;
  transition: max-height 0.4s;
}
.top {
  width: 100%;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
  border-radius: 24px 24px 0 0;
}
.top .left {
  padding: 8px 0px 8px 72px;
}
.top .right {
  padding: 8px 72px 8px 0;
  display: flex;
  align-items: center;
  gap: 32px;
}
.bottom {
  width: 100%;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 72px;
}
.bottom .left {
  display: flex;
  align-items: center;
  gap: 80px;
}
.links ul {
  display: flex;
  align-items: center;
  gap: 48px;
}
.bottom .right {
  display: flex;
  align-items: center;
  gap: 64px;
}
.links a {
  color: var(--black);
  font-family: var(--decor-md);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
}
.links a:hover {
  text-decoration: none;
}
.address,
.mail a,
.number a {
  color: var(--grey);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mail,
.number {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mail:hover a,
.number:hover a {
  text-decoration: none;
}
.lang {
  color: var(--light-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  position: relative;
  cursor: pointer;
}
.lang .drop {
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: 100%;
  z-index: 9;
  left: 0;
  background: white;
  padding: 12px;
  -webkit-box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 35px -6px rgba(34, 60, 80, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.lang .current {
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 4px;
}
.lang:hover .drop {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.search {
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  padding: 10px 18px;
  min-width: 377px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search input {
  color: var(--grey);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 90%;
}
.cart a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}
.cart a:hover {
  text-decoration: none;
}
.cart {
  position: relative;
}
.tag {
  width: 12px;
  height: 12px;
  background: var(--red);
  border-radius: 50%;
  position: absolute;
  top: -1px;
  left: -1px;
}
@media screen and (max-width: 1640px) {
  .container {
    border-radius: 18px;
  }
  .brand img {
    max-width: unset;
    width: 120px;
  }
  .top .left {
    padding-left: 52px;
  }
  .top .right {
    padding-right: 52px;
  }
  .bottom {
    padding: 12px 52px;
  }
  .bottom .left {
    gap: 22px;
  }
  .links ul {
    gap: 28px;
  }
  .links a {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .address,
  .mail a,
  .number a {
    font-size: 14px;
  }
  .search {
    min-width: 320px;
  }
  .bottom .right {
    gap: 22px;
  }
  .wrap.scroll .bottom {
    transform: translateY(-36px);
  }
  .wrap.scroll .container {
    max-height: 88px;
  }
}
</style>
