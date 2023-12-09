<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations['main.contacts-title'] }}
      </h4>

      <div class="box">
        <div class="left">
          <div class="item">
            <p class="name">
              {{ $store.state.translations['main.location'] }}:
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
              >
                <path
                  d="M18.001 31.998C18.001 31.998 6.35498 25.0005 6.35498 15.666C6.35498 9.22202 11.578 3.99902 18.022 3.99902C24.466 3.99902 29.689 9.22202 29.689 15.666C29.689 25.0005 18.001 31.998 18.001 31.998Z"
                  stroke="#1878F3"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.022 20.334C20.5992 20.334 22.6885 18.2448 22.6885 15.6675C22.6885 13.0903 20.5992 11.001 18.022 11.001C15.4447 11.001 13.3555 13.0903 13.3555 15.6675C13.3555 18.2448 15.4447 20.334 18.022 20.334Z"
                  stroke="#1878F3"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ info.adres }}
            </p>
          </div>

          <div class="item">
            <p class="name">
              {{ $store.state.translations['main.phone-number'] }}:
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
              >
                <path
                  d="M21.5843 4.08794C27.2918 4.08794 31.9178 8.71394 31.9178 14.4214M21.5843 9.39794C24.3578 9.39794 26.6078 11.6464 26.6078 14.4214M14.4128 21.5479C15.7628 22.8424 17.3453 23.8954 19.0943 24.6424L19.8728 24.9739L22.2653 22.5439C22.8593 21.9409 23.7188 21.6799 24.5483 21.8539L30.3443 23.0674C31.3253 23.2759 32.0258 24.1414 32.0258 25.1434V29.3164C32.0258 30.8089 30.8168 32.0179 29.3243 32.0179H28.0418C22.1408 32.0179 16.3178 30.0634 11.9138 26.1364C11.5508 25.8139 11.1983 25.4794 10.8548 25.1374L10.9103 25.1929C10.5668 24.8494 10.2338 24.4969 9.91132 24.1339C5.98282 19.7314 4.02832 13.9084 4.02832 8.00744V6.72494C4.02832 5.23244 5.23732 4.02344 6.72982 4.02344H10.9028C11.9048 4.02344 12.7703 4.72394 12.9788 5.70494L14.1938 11.5009C14.3663 12.3289 14.1068 13.1899 13.5038 13.7839L11.0738 16.1764L11.4053 16.9549C12.1523 18.7024 13.1168 20.1979 14.4128 21.5479Z"
                  stroke="#1878F3"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ info.nbm }}
            </p>
          </div>

          <div class="item">
            <p class="name">
              {{ $store.state.translations['main.email-address'] }}:
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
              >
                <path
                  d="M4.61039 10.2619L18.0039 21.7399L31.3974 10.2619M27.5034 27.9979H8.50439C6.01889 27.9979 4.00439 25.9834 4.00439 23.4979V12.5029C4.00439 10.0174 6.01889 8.00293 8.50439 8.00293H27.5049C29.9904 8.00293 32.0049 10.0174 32.0049 12.5029V23.4994C32.0034 25.9834 29.9889 27.9979 27.5034 27.9979Z"
                  stroke="#1878F3"
                  stroke-width="2.4"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ info.email }}
            </p>
          </div>

          <div class="socials">
            <ul>
              <li>
                <a target="_blank" :href="info.telegram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M0.908906 7.0952L16.2976 0.444582C17.0212 0.131829 17.8054 0.740413 17.682 1.51906L15.5779 14.795C15.448 15.6151 14.4331 15.9287 13.8631 15.325L10.5295 11.7699C9.85231 11.0526 9.79924 9.94877 10.4045 9.16984L12.7232 5.92966C12.8626 5.75029 12.6425 5.51431 12.4538 5.64086L7.60651 8.89269C6.78393 9.44452 5.78586 9.67151 4.80554 9.52973L1.16248 9.00284C0.164491 8.8585 -0.0167205 7.49523 0.908906 7.0952Z"
                      fill="#1878F3"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a target="_blank" :href="info.instagram">
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
                <a target="_blank" :href="info.facebook">
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
            </ul>
          </div>
        </div>
        <div class="right">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: ['info'],

  async fetch() {},
}
</script>

<style scoped>
.wrap {
  padding-bottom: 80px;
}
.box {
  max-width: 1516px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.title {
  color: var(--black);
  font-family: var(--decor-bold);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 35.84px */
  max-width: 1516px;
  margin: 0 auto 56px auto;
}
.item {
  display: flex;
  flex-direction: column;
  grid-area: 12px;
  margin-bottom: 48px;
}
.name {
  color: var(--grey-80, #353437);
  font-family: var(--decor-md);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 128.571% */
  margin-bottom: 12px;
}
.item p:last-child {
  color: var(--black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  display: grid;
  grid-template-columns: 0.5fr 9.5fr;
  align-items: center;
  gap: 12px;
}
.item svg {
  width: 36px;
  height: 36px;
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
iframe {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px solid #ebebeb;
}
@media screen and (max-width: 1640px) {
  .title {
    margin-bottom: 28px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%;
  }
  .item {
    margin-bottom: 24px;
  }
  .item p:first-child {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin: 0;
  }
  .item p:last-child {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 56px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%;
    margin-bottom: 24px;
  }
  .box {
    grid-template-columns: repeat(1, 1fr);
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 12px;
  }
  .item p:last-child {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .item {
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
  iframe {
    height: 223px;
  }
}
</style>
