<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.contacts']" />
    <div class="container p-0">
      <div class="body">
        <div class="cards">
          <div class="left">
            <div class="cardo">
              <p class="name">
                {{ $store.state.translations['main.location'] }}
              </p>
              <p class="sub">
                {{ info.adres }}
              </p>
              <div class="socials">
                <ul>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_450_11744)">
                          <path
                            d="M28.7292 8.6627C29.3385 11.0387 29.3385 15.9987 29.3385 15.9987C29.3385 15.9987 29.3385 20.9587 28.7292 23.3347C28.3905 24.648 27.3999 25.6814 26.1452 26.0307C23.8665 26.6654 16.0052 26.6654 16.0052 26.6654C16.0052 26.6654 8.14787 26.6654 5.86521 26.0307C4.60521 25.676 3.61587 24.644 3.28121 23.3347C2.67188 20.9587 2.67188 15.9987 2.67188 15.9987C2.67188 15.9987 2.67188 11.0387 3.28121 8.6627C3.61987 7.34936 4.61054 6.31603 5.86521 5.9667C8.14787 5.33203 16.0052 5.33203 16.0052 5.33203C16.0052 5.33203 23.8665 5.33203 26.1452 5.9667C27.4052 6.32136 28.3945 7.35336 28.7292 8.6627ZM13.3385 20.6654L21.3385 15.9987L13.3385 11.332V20.6654Z"
                            fill="#1878F3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_450_11744">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.00390625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_450_11747)">
                          <path
                            d="M16.0052 2.66797C8.64121 2.66797 2.67188 8.6373 2.67188 16.0013C2.67188 22.656 7.54787 28.172 13.9225 29.1733V19.8546H10.5359V16.0013H13.9225V13.064C13.9225 9.72264 15.9119 7.8773 18.9585 7.8773C20.4172 7.8773 21.9425 8.1373 21.9425 8.1373V11.4173H20.2625C18.6052 11.4173 18.0892 12.4453 18.0892 13.5V16.0013H21.7865L21.1959 19.8546H18.0892V29.1733C24.4625 28.1733 29.3385 22.6546 29.3385 16.0013C29.3385 8.6373 23.3692 2.66797 16.0052 2.66797Z"
                            fill="#1878F3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_450_11747">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.00390625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_450_11750)">
                          <path
                            d="M16.0052 2.66797C19.6279 2.66797 20.0799 2.6813 21.5012 2.74797C22.9212 2.81464 23.8879 3.0373 24.7385 3.36797C25.6185 3.70664 26.3599 4.1653 27.1012 4.9053C27.7792 5.57183 28.3038 6.37809 28.6385 7.26797C28.9679 8.1173 29.1919 9.0853 29.2585 10.5053C29.3212 11.9266 29.3385 12.3786 29.3385 16.0013C29.3385 19.624 29.3252 20.076 29.2585 21.4973C29.1919 22.9173 28.9679 23.884 28.6385 24.7346C28.3048 25.625 27.78 26.4315 27.1012 27.0973C26.4345 27.7751 25.6283 28.2996 24.7385 28.6346C23.8892 28.964 22.9212 29.188 21.5012 29.2546C20.0799 29.3173 19.6279 29.3346 16.0052 29.3346C12.3825 29.3346 11.9305 29.3213 10.5092 29.2546C9.08921 29.188 8.12254 28.964 7.27187 28.6346C6.38164 28.3006 5.57524 27.7759 4.90921 27.0973C4.23108 26.4309 3.70645 25.6246 3.37188 24.7346C3.04121 23.8853 2.81854 22.9173 2.75187 21.4973C2.68921 20.076 2.67188 19.624 2.67188 16.0013C2.67188 12.3786 2.68521 11.9266 2.75187 10.5053C2.81854 9.08397 3.04121 8.11863 3.37188 7.26797C3.70552 6.37754 4.23028 5.57106 4.90921 4.9053C5.57544 4.22694 6.38178 3.70227 7.27187 3.36797C8.12254 3.0373 9.08787 2.81464 10.5092 2.74797C11.9305 2.6853 12.3825 2.66797 16.0052 2.66797ZM16.0052 9.33463C14.2371 9.33464 12.5414 10.037 11.2912 11.2873C10.0409 12.5375 9.33854 14.2332 9.33854 16.0013C9.33854 17.7694 10.0409 19.4651 11.2912 20.7153C12.5414 21.9656 14.2371 22.668 16.0052 22.668C17.7733 22.668 19.469 21.9656 20.7193 20.7153C21.9695 19.4651 22.6719 17.7694 22.6719 16.0013C22.6719 14.2332 21.9695 12.5375 20.7193 11.2873C19.469 10.037 17.7733 9.33463 16.0052 9.33463ZM24.6719 9.0013C24.6719 8.55927 24.4963 8.13535 24.1837 7.82279C23.8712 7.51023 23.4472 7.33464 23.0052 7.33464C22.5632 7.33464 22.1393 7.51023 21.8267 7.82279C21.5141 8.13535 21.3385 8.55927 21.3385 9.0013C21.3385 9.44333 21.5141 9.86725 21.8267 10.1798C22.1393 10.4924 22.5632 10.668 23.0052 10.668C23.4472 10.668 23.8712 10.4924 24.1837 10.1798C24.4963 9.86725 24.6719 9.44333 24.6719 9.0013ZM16.0052 12.0013C17.0661 12.0013 18.0835 12.4227 18.8336 13.1729C19.5838 13.923 20.0052 14.9404 20.0052 16.0013C20.0052 17.0622 19.5838 18.0796 18.8336 18.8297C18.0835 19.5799 17.0661 20.0013 16.0052 20.0013C14.9443 20.0013 13.9269 19.5799 13.1768 18.8297C12.4266 18.0796 12.0052 17.0622 12.0052 16.0013C12.0052 14.9404 12.4266 13.923 13.1768 13.1729C13.9269 12.4227 14.9443 12.0013 16.0052 12.0013Z"
                            fill="#1878F3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_450_11750">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.00390625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_450_11753)">
                          <path
                            d="M24.4506 24.452H20.8972V18.8827C20.8972 17.5547 20.8706 15.8453 19.0439 15.8453C17.1919 15.8453 16.9092 17.2907 16.9092 18.7853V24.452H13.3546V13H16.7679V14.56H16.8146C17.2919 13.6613 18.4519 12.7107 20.1852 12.7107C23.7852 12.7107 24.4519 15.0813 24.4519 18.1653V24.452H24.4506ZM9.34124 11.4333C9.06998 11.4337 8.80132 11.3805 8.55066 11.2768C8.3 11.1731 8.07226 11.021 7.88052 10.8291C7.68877 10.6372 7.53678 10.4094 7.43325 10.1587C7.32973 9.90795 7.27671 9.63926 7.27724 9.368C7.2775 8.95978 7.39881 8.5608 7.62583 8.22153C7.85284 7.88225 8.17537 7.61791 8.55261 7.46194C8.92986 7.30596 9.34489 7.26536 9.74521 7.34525C10.1455 7.42515 10.5132 7.62197 10.8017 7.91081C11.0901 8.19965 11.2865 8.56755 11.3658 8.96798C11.4452 9.3684 11.4041 9.78338 11.2476 10.1604C11.0912 10.5375 10.8264 10.8597 10.4868 11.0862C10.1473 11.3128 9.74813 11.4336 9.33991 11.4333H9.34124ZM11.1226 24.452H7.55857V13H11.1239V24.452H11.1226ZM26.2306 4H5.77591C4.79457 4 4.00391 4.77333 4.00391 5.72933V26.2707C4.00391 27.2267 4.79591 28 5.77457 28H26.2252C27.2039 28 28.0039 27.2267 28.0039 26.2707V5.72933C28.0039 4.77333 27.2039 4 26.2252 4H26.2292H26.2306Z"
                            fill="#1878F3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_450_11753">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.00390625)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cardo">
              <p class="name">
                {{ $store.state.translations['main.contacts'] }}
              </p>
              <div class="baldurs">
                <div>
                  <p class="question">
                    {{ $store.state.translations['main.phone-number'] }}:
                  </p>
                  <a class="answer" href=""> {{ info.nbm }} </a>
                </div>
                <div>
                  <p class="question">
                    {{ $store.state.translations['main.email-address'] }}:
                  </p>
                  <a class="answer" href="">{{ info.email }}</a>
                </div>
              </div>
            </div>
            <div class="iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192046.60839189062!2d69.04118785098404!3d41.22769201234673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6266a25c67d9%3A0x1f080de343d77922!2zTS0zOSwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702020065998!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="right cardo">
            <p class="name">
              {{ $store.state.translations['main.form-title'] }}
            </p>
            <p class="txt">
              {{ $store.state.translations['inner.form-sub'] }}
            </p>
            <form @submit.prevent="onSubmit">
              <input
                v-model="name"
                required
                :placeholder="$store.state.translations['main.name']"
                type="text"
              />
              <input
                v-model="number"
                v-mask="'+998 (##) ###-##-##'"
                required
                :placeholder="$store.state.translations['main.number']"
                type="text"
              />
              <textarea
                v-model="message"
                :placeholder="$store.state.translations['inner.message']"
              ></textarea>
              <button type="submit" class="button">
                {{ $store.state.translations['main.send'] }}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteTop from '@/components/SiteTop.vue'

import formApi from '@/api/form'
import infoApi from '@/api/info.js'

export default {
  data() {
    return {
      title: 'Контакты',
      name: '',
      number: '',
      message: '',
    }
  },

  async asyncData({ $axios, query, i18n }) {
    const info = await infoApi.getInfo($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      info,
    }
  },

  mounted() {},

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        number: this.number,
        message: this.message,
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
    },
  },

  components: { SiteTop },
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 16px;
}
.left {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.cardo {
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  padding: 32px 40px;
  width: 100%;
}
.iframe {
  grid-column: 1/3;
  border-radius: 24px;
  border: 1px solid var(--grey-8, #ebebeb);
  overflow: hidden;
}
.iframe iframe {
  width: 100%;
  height: 422px;
}
.name {
  color: #000;
  font-family: var(--decor-bold);
  margin-bottom: 16px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 35.84px */
}
.sub {
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
}
.socials ul {
  display: flex;
  align-items: center;
  gap: 40px;
}
.socials svg {
  width: 32px;
  height: 32px;
}
.question {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 8px;
}
.answer {
  color: var(--black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.baldurs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.txt {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 80%;
  margin-bottom: 24px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
input {
  width: 100%;
  color: var(--black);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
}
textarea {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
  padding: 16px 24px;
  color: var(--black);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  min-height: 248px;
  resize: none;
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
@media screen and (max-width: 1024px) {
  .body {
    padding: 0;
    background: transparent;
  }
  .cardo {
    padding: 16px;
    background: white;
  }
  .left {
    grid-template-columns: repeat(1, 1fr);
  }
  .iframe {
    grid-column: initial;
  }
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
