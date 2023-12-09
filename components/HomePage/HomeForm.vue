<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="top">
          <div class="content">
            <h4 class="title">
              {{ $store.state.translations['main.form-title'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.form-sub'] }}
            </p>
          </div>
          <svg
            class="yuka"
            xmlns="http://www.w3.org/2000/svg"
            width="337"
            height="163"
            viewBox="0 0 337 163"
            fill="none"
          >
            <path
              d="M1.23431 10.5359C0.701878 10.6827 0.389206 11.2333 0.53594 11.7657C0.682675 12.2981 1.23325 12.6108 1.76569 12.4641L1.23431 10.5359ZM173.167 160.486C173.712 160.394 174.078 159.877 173.986 159.333L172.479 150.46C172.387 149.915 171.87 149.549 171.326 149.641C170.781 149.734 170.415 150.25 170.507 150.795L171.847 158.682L163.96 160.021C163.415 160.113 163.049 160.63 163.141 161.174C163.234 161.719 163.75 162.085 164.294 161.993L173.167 160.486ZM1.76569 12.4641C17.3667 8.16455 40.3269 10.9094 66.9846 17.5562C93.5919 24.1905 123.689 34.6583 153.467 45.6259C183.222 56.5849 212.679 68.051 237.92 76.642C250.546 80.9392 262.142 84.526 272.22 86.9766C282.282 89.4235 290.898 90.7547 297.538 90.4993L297.462 88.5008C291.102 88.7454 282.702 87.4672 272.692 85.0333C262.698 82.603 251.165 79.0375 238.564 74.7487C213.353 66.1678 183.966 54.7277 154.158 43.7491C124.374 32.7792 94.1893 22.2782 67.4685 15.6156C40.7981 8.96562 17.3833 6.08543 1.23431 10.5359L1.76569 12.4641ZM297.538 90.4993C310.755 89.991 320.671 85.4388 327.26 78.5754C333.844 71.7177 337.034 62.6279 336.937 53.1774C336.745 34.2753 323.429 13.9047 297.776 6.53897L297.224 8.4613C322.071 15.5956 334.755 35.225 334.938 53.1978C335.029 62.1848 332 70.7513 325.818 77.1903C319.641 83.6238 310.245 88.0091 297.462 88.5008L297.538 90.4993ZM297.776 6.53897C272.34 -0.76447 218.925 -3.1354 171.872 6.00887C148.338 10.5824 126.294 18.0547 110.109 29.3089C93.8967 40.582 83.5 55.7046 83.5 75.5002H85.5C85.5 56.533 95.4158 41.9616 111.251 30.951C127.112 19.9215 148.85 12.5204 172.253 7.97214C219.075 -1.12718 272.16 1.26474 297.224 8.4613L297.776 6.53897ZM83.5 75.5002C83.5 105.755 102.094 124.272 122.421 136.544C132.583 142.679 143.22 147.281 152.25 151.025C156.776 152.902 160.877 154.556 164.343 156.088C167.818 157.624 170.573 159.004 172.421 160.316L173.579 158.685C171.552 157.246 168.635 155.798 165.151 154.258C161.658 152.714 157.513 151.043 153.016 149.178C143.999 145.438 133.48 140.884 123.454 134.832C103.406 122.728 85.5 104.746 85.5 75.5002H83.5Z"
              fill="url(#paint0_linear_450_11774)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_450_11774"
                x1="-72.5"
                y1="-15.9999"
                x2="184.5"
                y2="167"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="bottom">
          <form @submit.prevent="onSubmit">
            <input
              v-model="name"
              :placeholder="$store.state.translations['main.name']"
              type="text"
              required
            />
            <input
              v-model="number"
              v-mask="'+998 (##) ###-##-##'"
              required
              :placeholder="$store.state.translations['main.number']"
              type="text"
            />
            <button type="submit">
              {{ $store.state.translations['main.send'] }}
            </button>
          </form>
        </div>
        <img src="@/assets/img/form.png" alt="" class="kitamura" />
      </div>
    </div>
  </div>
</template>

<script>
import formApi from '@/api/form'

export default {
  data() {
    return {
      name: '',
      number: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        number: this.number,
      }

      const res = await formApi.sendForm(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.name = ''
      this.number = ''
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 80px;
}
.cardo {
  background: var(--blue);
  border-radius: 40px;
  max-width: 1516px;
  padding: 72px 86px;
  margin: 0 auto;
  position: relative;
}
.title {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.sub {
  color: #77758f;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 558px;
  margin-bottom: 50px;
}
.yuka {
  position: absolute;
  right: 180px;
  top: 90px;
  pointer-events: none;
}
.kitamura {
  position: absolute;
  top: 0;
  right: 10%;
  pointer-events: none;
}
form {
  display: flex;
  align-items: center;
  gap: 24px;
}
input {
  color: var(--grey-24, #c2c2c3);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  min-width: 526px;
  padding-bottom: 16px;
  border-bottom: 1px solid #4e4c60;
}
button {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  background: var(--light-blue);
  padding: 16px 56px;
  border-radius: 38px;
  min-width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
@media screen and (max-width: 1640px) {
  input {
    min-width: unset;
    width: 50%;
  }
  .title {
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
  .cardo {
    padding: 32px 56px;
  }
  .yuka {
    top: 38px;
    right: 162px;
  }
}
@media screen and (max-width: 1024px) {
  form {
    flex-direction: column;
  }
  .cardo {
    border-radius: 16px;
    padding: 24px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 110%;
    margin-bottom: 16px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .yuka {
    display: none;
  }
  .kitamura {
    pointer-events: none;
  }
  input {
    width: 100%;
    min-width: initial;
    padding-bottom: 14px;
  }
  button {
    width: 100%;
  }
}
</style>
