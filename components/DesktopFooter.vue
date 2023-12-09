<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="cardo">
        <div style="padding-bottom: 40px" class="row">
          <div class="col-lg-1 col-xs-0 empty"></div>
          <div class="col-lg-3 col-xs-12 left">
            <NuxtLink to="/" class="brand">
              <img src="@/assets/img/logo/white.svg" alt="" />
            </NuxtLink>
            <p>{{ $store.state.translations['main.footer-txt-1'] }}</p>
            <p>
              {{ $store.state.translations['main.footer-txt-2'] }}
            </p>
          </div>
          <div class="col-lg-7 col-xs-12 right">
            <div class="item">
              <h4 class="title">
                {{ $store.state.translations['main.main'] }}
              </h4>
              <ul>
                <li>
                  <NuxtLink :to="localePath(`/products`)" class="link">
                    {{ $store.state.translations['main.products'] }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath(`/about`)" class="link">
                    {{ $store.state.translations['main.about'] }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath(`/news`)" class="link">
                    {{ $store.state.translations['main.news'] }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath(`/contacts`)" class="link">
                    {{ $store.state.translations['main.contacts'] }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="item cats">
              <h4 class="title">
                {{ $store.state.translations['main.categories'] }}
              </h4>
              <ul>
                <li v-for="item in categories" :key="item.id">
                  <NuxtLink
                    :to="localePath(`/products?category_${item.id}=${item.id}`)"
                    class="link cat"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="link" :to="localePath(`/products`)">
                    {{ $store.state.translations['main.all-categories'] }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="item elden">
              <h4 class="title">
                {{ $store.state.translations['main.contacts'] }}
              </h4>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.998 21.332C11.998 21.332 4.23401 16.667 4.23401 10.444C4.23401 6.14802 7.71601 2.66602 12.012 2.66602C16.308 2.66602 19.79 6.14802 19.79 10.444C19.79 16.667 11.998 21.332 11.998 21.332Z"
                      stroke="#1878F3"
                      stroke-width="2.4"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.012 13.556C13.7302 13.556 15.123 12.1632 15.123 10.445C15.123 8.72686 13.7302 7.33402 12.012 7.33402C10.2939 7.33402 8.90101 8.72686 8.90101 10.445C8.90101 12.1632 10.2939 13.556 12.012 13.556Z"
                      stroke="#1878F3"
                      stroke-width="2.4"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ info.adres }}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.387 2.72464C18.192 2.72464 21.276 5.80864 21.276 9.61364M14.387 6.26464C16.236 6.26464 17.736 7.76364 17.736 9.61364M9.60598 14.3646C10.506 15.2276 11.561 15.9296 12.727 16.4276L13.246 16.6486L14.841 15.0286C15.237 14.6266 15.81 14.4526 16.363 14.5686L20.227 15.3776C20.881 15.5166 21.348 16.0936 21.348 16.7616V19.5436C21.348 20.5386 20.542 21.3446 19.547 21.3446H18.692C14.758 21.3446 10.876 20.0416 7.93998 17.4236C7.69798 17.2086 7.46298 16.9856 7.23398 16.7576L7.27098 16.7946C7.04198 16.5656 6.81998 16.3306 6.60498 16.0886C3.98598 13.1536 2.68298 9.27164 2.68298 5.33764V4.48264C2.68298 3.48764 3.48898 2.68164 4.48398 2.68164H7.26598C7.93398 2.68164 8.51098 3.14864 8.64998 3.80264L9.45998 7.66664C9.57498 8.21864 9.40198 8.79264 8.99998 9.18864L7.37998 10.7836L7.60098 11.3026C8.09898 12.4676 8.74198 13.4646 9.60598 14.3646Z"
                      stroke="#1878F3"
                      stroke-width="2.4"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ info.nbm }}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.07099 6.84096L12 14.493L20.929 6.84096M18.333 18.665H5.66699C4.00999 18.665 2.66699 17.322 2.66699 15.665V8.33496C2.66699 6.67796 4.00999 5.33496 5.66699 5.33496H18.334C19.991 5.33496 21.334 6.67796 21.334 8.33496V15.666C21.333 17.322 19.99 18.665 18.333 18.665Z"
                      stroke="#1878F3"
                      stroke-width="2.4"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ info.email }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-1 col-xs-0 empty"></div>
        </div>
        <div class="row">
          <div class="col-1 empty"></div>
          <div class="bottom col-10">
            <p>{{ $store.state.translations['main.info-txt'] }}</p>
            <a class="" href="https://www.ndc.uz/" target="_blank">
              {{ $store.state.translations['main.by'] }}
              <span>{{ $store.state.translations['main.author'] }}</span>
            </a>
          </div>
          <div class="col-1 empty"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories'
import infoApi from '@/api/info'

export default {
  data() {
    return {
      categories: [],
      info: '',
    }
  },
  async fetch() {
    const categories = await categoriesApi.getCategories(this.$axios)
    const info = await infoApi.getInfo(this.$axios)

    this.categories = categories
    this.info = info
  },
  mounted() {},
}
</script>

<style scoped>
.wrap {
  padding-bottom: 48px;
}
.cardo {
  border-radius: 40px;
  background: var(--blue);
  padding-top: 74px;
}
.brand img {
  margin-bottom: 24px;
  width: 140px;
  object-fit: contain;
}
.left p {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 346px;
  margin-bottom: 24px;
}
.right {
  display: flex;
  align-items: flex-start;
  gap: 140px;
}

.title {
  color: #fff;
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  margin-bottom: 32px;
}
.item ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.link {
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
}
.elden li {
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  display: grid;
  grid-template-columns: 0.5fr 9.5fr;
  gap: 8px;
  align-items: center;
  max-width: 470px;
}
.elden svg {
  width: 24px;
  height: 24px;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #3d3b58;
  padding: 24px 0;
}
.bottom p,
.bottom a {
  color: #938fc0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.bottom span {
  color: white;
}
.cats ul li {
  display: none;
}
.cats ul li:nth-child(1),
.cats ul li:nth-child(2),
.cats ul li:nth-child(3),
.cats ul li:nth-child(4),
.cats ul li:nth-child(5),
.cats ul li:nth-child(12) {
  display: block;
}
@media screen and (max-width: 1640px) {
  .empty {
    display: none;
  }
  .container {
    padding: 0 16px !important;
  }
  .cardo {
    padding-top: 56px;
  }
  .row {
    justify-content: space-around;
  }
  .right {
    gap: 48px;
  }
  .title {
    margin-bottom: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  .left p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
@media screen and (max-width: 1024px) {
  .right {
    flex-direction: column;
    gap: 56px;
  }
  .wrap {
    padding-bottom: 0;
  }
  .cardo {
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
  }
  .left p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 20px;
  }
  .link {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .item ul {
    gap: 16px;
  }
  .left,
  .right {
    padding: 0;
  }
}
</style>
