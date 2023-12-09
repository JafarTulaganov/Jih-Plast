<template>
  <div class="wrap">
    <div class="container">
      <div class="content">
        <h4 class="title">
          {{ $store.state.translations['main.catalog-title'] }}
        </h4>
        <p class="sub">
          {{ $store.state.translations['main.catalog-sub'] }}
        </p>
        <a href="/file.pdf" download class="download">
          {{ $store.state.translations['main.download-pdf'] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.5 2.5V6.5C13.5 8.70914 15.2909 10.5 17.5 10.5L21.5 10.5M3.5 6.5L3.5 18.5C3.5 20.7091 5.29086 22.5 7.5 22.5H17.5C19.7091 22.5 21.5 20.7091 21.5 18.5V12.1569C21.5 11.096 21.0786 10.0786 20.3284 9.32843L14.6716 3.67157C13.9214 2.92143 12.904 2.5 11.8431 2.5L7.5 2.5C5.29086 2.5 3.5 4.29086 3.5 6.5Z"
              stroke="#1878F3"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M6.93652 18.5V14.2051H8.32812C8.85547 14.2051 9.19922 14.2266 9.35938 14.2695C9.60547 14.334 9.81152 14.4746 9.97754 14.6914C10.1436 14.9062 10.2266 15.1846 10.2266 15.5264C10.2266 15.79 10.1787 16.0117 10.083 16.1914C9.9873 16.3711 9.86523 16.5127 9.7168 16.6162C9.57031 16.7178 9.4209 16.7852 9.26855 16.8184C9.06152 16.8594 8.76172 16.8799 8.36914 16.8799H7.80371V18.5H6.93652ZM7.80371 14.9316V16.1504H8.27832C8.62012 16.1504 8.84863 16.1279 8.96387 16.083C9.0791 16.0381 9.16895 15.9678 9.2334 15.8721C9.2998 15.7764 9.33301 15.665 9.33301 15.5381C9.33301 15.3818 9.28711 15.2529 9.19531 15.1514C9.10352 15.0498 8.9873 14.9863 8.84668 14.9609C8.74316 14.9414 8.53516 14.9316 8.22266 14.9316H7.80371Z"
              fill="#1878F3"
            />
            <path
              d="M10.9355 14.2051H12.5205C12.8779 14.2051 13.1504 14.2324 13.3379 14.2871C13.5898 14.3613 13.8057 14.4932 13.9854 14.6826C14.165 14.8721 14.3018 15.1045 14.3955 15.3799C14.4893 15.6533 14.5361 15.9912 14.5361 16.3936C14.5361 16.7471 14.4922 17.0518 14.4043 17.3076C14.2969 17.6201 14.1436 17.873 13.9443 18.0664C13.7939 18.2129 13.5908 18.3271 13.335 18.4092C13.1436 18.4697 12.8877 18.5 12.5674 18.5H10.9355V14.2051ZM11.8027 14.9316V17.7764H12.4502C12.6924 17.7764 12.8672 17.7627 12.9746 17.7354C13.1152 17.7002 13.2314 17.6406 13.3232 17.5566C13.417 17.4727 13.4932 17.335 13.5518 17.1436C13.6104 16.9502 13.6396 16.6875 13.6396 16.3555C13.6396 16.0234 13.6104 15.7686 13.5518 15.5908C13.4932 15.4131 13.4111 15.2744 13.3057 15.1748C13.2002 15.0752 13.0664 15.0078 12.9043 14.9727C12.7832 14.9453 12.5459 14.9316 12.1924 14.9316H11.8027Z"
              fill="#1878F3"
            />
            <path
              d="M15.2803 18.5V14.2051H18.2246V14.9316H16.1475V15.9482H17.9404V16.6748H16.1475V18.5H15.2803Z"
              fill="#1878F3"
            />
          </svg>
        </a>
      </div>
      <div class="eyes">
        <div class="grid">
          <div v-for="item in categories" :key="item.id" class="item">
            <NuxtLink
              :to="localePath(`/products?category_${item.id}=${item.id}`)"
            >
              <div class="left">
                <img :src="item.image" alt="" class="pic" />
              </div>
              <div class="right">
                <p class="name">{{ item.title }}</p>
                <p class="link">
                  {{ $store.state.translations['main.more'] }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.92004 5.1416L13.2784 10.4999L7.92004 15.8583"
                      stroke="#1878F3"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categories'],
}
</script>

<style scoped>
.wrap {
  color: white;
}
.container {
  background: var(--blue);
  border-radius: 40px;
  padding: 72px 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 970px;
  margin: 0 auto;
}
.title {
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 35.84px */
  text-transform: uppercase;
  color: white;
  margin-bottom: 0;
}
.sub {
  color: #918ea6;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.download {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 24px;
  border: 1px solid var(--light-blue);
  border-radius: 34px;
  color: var(--light-blue);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  transition: 0.4s;
}

.download:hover {
  transform: scale(0.96);
}
.eyes {
  display: flex;
  justify-content: center;
}
.grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 1434px;
  margin-right: -24px;
  margin-bottom: -32px;
  padding-top: 56px;
}
.item {
  width: 30%;
  border-radius: 16px;
  border: 1px solid #4e5876;
  margin-right: 24px;
  margin-bottom: 32px;
  transition: 0.6s;
}
.item a {
  padding: 32px 0 32px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.item .right {
  display: flex;
  flex-direction: column;
  height: 106px;
  justify-content: space-between;
}
.item .pic {
  width: 122px;
  height: 106px;
  display: flex;
  object-fit: contain;
}
.name {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  text-transform: uppercase;
  transition: 0.5s;
}
.link {
  color: var(--light-blue);
  font-family: var(--decor);
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  text-transform: uppercase;
}
.item:hover a {
  text-decoration: none;
}
/* .item:hover {
  background: #f5f5f7;
  transform: scale(0.98);
}
.item:hover .name {
  color: black;
} */
@media screen and (max-width: 1640px) {
  .container {
    border-radius: 24px;
  }
  .title {
    font-size: 28px;
    margin: 0;
  }
  .grid {
    width: initial;
    margin: 0 0 0 16px;
  }
  .item {
    margin: 0 16px 16px 0;
  }
  .item a {
    padding: 10px 20px;
  }
  .item .pic {
    height: 72px;
  }
  .item .right {
    gap: 10px;
    justify-content: center;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 32px 10px;
    border-radius: 16px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%;
    margin: 0;
  }
  .content {
    gap: 16px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding: 32px 0 0 0;
    margin: 0;
  }
  .item {
    width: 100%;
    margin: 0;
  }
  .item a {
    padding: 14px 10px;
  }
  .item .pic {
    height: 74px;
  }
  .item .right {
    justify-content: center;
    gap: 8px;
  }
}
</style>
