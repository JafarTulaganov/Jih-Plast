<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.cart']" />
    <div class="container p-0">
      <div class="body">
        <div class="row">
          <div class="col-lg-2 col-xs-0"></div>
          <div class="order col-lg-8 col-xs-12">
            <div class="cart">
              <div class="header">
                <h4 class="title">
                  {{ $store.state.translations['inner.your-order'] }}
                </h4>
                <button
                  v-if="basketProducts.products?.length > 0"
                  @click="$store.commit('emptyCart'), toast()"
                  class="delete"
                >
                  {{ $store.state.translations['inner.clear-all'] }}
                </button>
              </div>
              <div v-if="basketProducts.products?.length > 0" class="items">
                <div
                  v-for="item in basketProducts.products"
                  :key="item.id"
                  class="item"
                >
                  <div class="left">
                    <div class="img">
                      <img :src="item.image" alt="" class="pic" />
                    </div>
                    <div class="content">
                      <p class="name">{{ item?.title }}</p>
                      <div class="info">
                        <div class="element">
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
                          (50) шт
                        </div>
                        <div class="element">
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
                          55x50х110 см
                        </div>
                      </div>
                      <div class="color">
                        <p class="par">
                          {{ $store.state.translations['inner.color'] }}:
                          <span> {{ item.color?.title }} </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <button
                      @click="$store.commit('clearCart', item.id), toast()"
                      class="x"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.2426 7.75786L7.75732 16.2431M16.2426 16.2431L7.75732 7.75781"
                          stroke="#5D5D5F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <div class="counter">
                      <button
                        @click="
                          $store.commit('updateCount', {
                            id: item.id,
                            type: false,
                          })
                        "
                      >
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
                      <p class="count">{{ item.count }}</p>
                      <button
                        @click="
                          $store.commit('updateCount', {
                            id: item.id,
                            type: true,
                          })
                        "
                      >
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
                  </div>
                </div>
              </div>

              <div v-else class="empty">
                <p>{{ $store.state.translations['inner.cart-empty'] }}</p>
                <img src="@/assets/img/empty.png" alt="" />
              </div>
            </div>
            <div v-if="basketProducts.products?.length > 0" class="footer">
              <div class="total">
                <p>{{ $store.state.translations['inner.cart-count'] }}:</p>
                <span>
                  {{
                    $store.state.cart.reduce((sum, item) => {
                      return sum + item.count
                    }, 0)
                  }}
                </span>
              </div>
              <div @click="modalHandle = true" class="send">
                <button>
                  {{ $store.state.translations['inner.accept-order']
                  }}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M2.65553 8.83333H18.3441M15.5291 5.5L5.47055 5.5C3.3782 5.5 1.81312 7.43854 2.23577 9.50666L3.5982 16.1733C3.91473 17.7221 5.26602 18.8333 6.83298 18.8333H14.1667C15.7337 18.8333 17.085 17.7221 17.4015 16.1733L18.7639 9.50666C19.1866 7.43853 17.6215 5.5 15.5291 5.5Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 2.16699L5.5 5.50033"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 2.16699L15.5 5.50033"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 12.167L8 15.5003"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 12.167L13 15.5003"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-xs-0"></div>
        </div>
        <!-- <ProductOther /> -->
      </div>
    </div>
    <div class="modaller" :class="{ show: modalHandle }">
      <div class="space" @click="modalHandle = false"></div>
      <div class="body">
        <div class="header">
          <h4>{{ $store.state.translations['inner.accept-order'] }}</h4>
          <button @click="modalHandle = false" class="x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M27.0713 12.9288L12.9292 27.0709M27.0713 27.0708L12.9292 12.9287"
                stroke="#1D2B1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <form @submit.prevent="onSubmit()">
          <div class="flexer">
            <div class="left">
              <input
                required
                v-model="name"
                :placeholder="$store.state.translations['main.name']"
                type="text"
              />
              <input
                required
                v-model="number"
                :placeholder="$store.state.translations['main.number']"
                type="text"
                v-mask="'+998 (##) ###-##-##'"
              />
            </div>
            <textarea
              v-model="message"
              :placeholder="$store.state.translations['inner.message']"
            ></textarea>
          </div>
          <div class="send">
            <button type="submit">
              {{ $store.state.translations['main.send'] }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 7L14 12L10 17"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import IMask from 'imask'

import formApi from '@/api/form'
import SiteTop from '@/components/SiteTop.vue'

export default {
  components: { SiteTop },

  data() {
    return {
      title: 'Корзина',
      basketProducts: [],
      products: '',
      modalHandle: false,
      name: '',
      number: '',
      message: '',
      color: 11,
    }
  },

  async asyncData({ $axios }) {},

  async mounted() {
    await this.GET_BASKET_PRODUCTS()
  },

  async created() {},

  methods: {
    toast() {
      this.$toast.info('Успешно удалено')
    },
    async GET_BASKET_PRODUCTS() {
      let card_products

      localStorage.length < 1
        ? (card_products = [])
        : (card_products = JSON.parse(localStorage.getItem('cart')))

      this.basketProducts = await this.$store.dispatch(
        'postCart',
        card_products
      )
    },

    async onSubmit() {
      const product = JSON.parse(localStorage.getItem('cart'))
      const formData = {
        name: this.name,
        number: this.number,
        message: this.message,
        products: product,
      }

      const res = await formApi.sendForm(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.number = ''
      this.message = ''
      this.color = 11
      this.$store.commit('emptyCart', {})
      this.modalHandle = false
    },
  },

  computed: {
    storeCart() {
      return this.$store.state.cart
    },
  },

  watch: {
    storeCart() {
      this.GET_BASKET_PRODUCTS()
    },
  },
}
</script>

<style scoped>
.order {
  padding-bottom: 80px;
}
.cart {
  border-radius: 24px 24px 0 0;
  border: 1px solid var(--border);
  padding: 24px 40px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.title {
  color: var(--dark-green, #1d2b1e);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  margin: 0;
}
.delete {
  color: var(--red, #eb5757);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.items {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.info {
  display: flex;
  align-items: center;
  gap: 24px;
}
.info .element {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.counter {
  padding: 8px 24px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  border-radius: 55px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
}
.count {
  color: var(--dark-green, #1d2b1e);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.pic {
  width: 130px;
  height: 130px;
  object-fit: contain;
  display: flex;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--white, #fff);
}
.left {
  display: flex;
  align-items: center;
  gap: 24px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 130px;
}
.name {
  color: var(--grey-80, #353437);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
}
.color {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.color span {
  color: var(--dark-green, #1d2b1e);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
}
.item:last-child {
  padding: 0;
  margin: 0;
  border: 0;
}
.right {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 130px;
  align-items: flex-end;
}
/* .row {
  border-bottom: 1px solid var(--border);
  margin-bottom: 90px;
} */
.empty {
  display: flex;
  flex-direction: column;
  gap: 54px;
  align-items: center;
}
.empty p {
  color: var(--black, #020105);
  text-align: center;
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  border-radius: 0 0 24px 24px;
  padding: 24px 40px;
  margin-top: -1px;
}
.total {
  display: flex;
  align-items: center;
  gap: 8px;
}
.total p {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.total span {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.send button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 48px;
  border-radius: 39px;
  background: var(--facebook-blue, #1878f3);
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
}
.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.modaller.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.modaller .body {
  border-radius: 40px;
  background: var(--white, #fff);
  box-shadow: 0px 24px 80px 0px rgba(29, 43, 30, 0.16);
  max-width: 1112px;
  min-width: 1112px;
  margin: 0 auto;
  padding: 40px;
  z-index: 2;
}
.modaller .header h4 {
  color: var(--dark-green, #1d2b1e);
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  text-transform: uppercase;
  margin: 0;
}
.modaller .left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.modaller .flexer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}
.modaller input {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  padding: 12px 16px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.modaller textarea {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.modaller input::placeholder,
.modaller textarea::placeholder {
  color: var(--grey-green, #6f7e70);
}
.modaller .send {
  display: flex;
  justify-content: flex-end;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 0, 50, 0.25);
  z-index: 1;
}
@media screen and (max-width: 1024px) {
  .order {
    padding: 0;
  }
  .cart {
    padding: 0;
    border: 0;
  }
  .header {
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  .pic {
    max-width: unset;
    height: 94px;
    width: 84px;
    border-radius: 4px;
  }
  .left {
    gap: 16px;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    max-width: 90%;
  }
  .content {
    gap: 10px;
    min-height: unset;
  }
  .info .element {
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .item {
    flex-direction: column;
    gap: 8px;
    position: relative;
    align-items: flex-start;
  }
  .item:last-child {
    padding-bottom: 20px;
  }
  .right {
    min-height: unset;
  }
  .x {
    top: 0;
    right: 0;
    position: absolute;
  }
  .counter {
    padding: 4px 10px;
    border-radius: 2px;
    transform: translateX(100px);
  }
  .count {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .counter button {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    background: transparent;
    border: none;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #ebebeb;
    padding: 20px 0 0 0;
    text-align: center;
  }
  .send {
    width: 100%;
  }
  .send button {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .modaller .body {
    max-width: unset;
    min-width: 90%;
    margin: 16px;
    border-radius: 16px;
    padding: 24px;
  }
  .modaller .x {
    top: 32px;
    right: 20px;
  }
  .modaller .flexer {
    flex-direction: column;
    display: flex;
  }
  .modaller .header h4 {
    font-size: 20px;
  }
  .modaller textarea {
    min-height: 140px;
    border-radius: 12px;
  }
  .modaller input {
    border-radius: 12px;
  }
  .modaller button {
    border-radius: 12px;
  }
  .empty {
    gap: 24px;
    padding: 24px 0;
  }
}
</style>
