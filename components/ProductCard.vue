<template>
  <div class="item">
    <NuxtLink to="/product">
      <div class="img">
        <img src="@/assets/img/product.webp" alt="" class="pic" />
      </div>
    </NuxtLink>

    <div class="bottom">
      <div class="colors">
        <div class="swift">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect x="5" y="5" width="10" height="10" rx="3" stroke="#3C4BDC" />
            <path
              d="M10 1.66699V2.50033"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17.5V18.3333"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.7258 3.27441L16.1366 3.86367"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.86328 16.1367L3.27403 16.726"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3333 10L17.4999 10"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 10L1.66667 10"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.7258 16.7256L16.1366 16.1363"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.86328 3.86328L3.27403 3.27403"
              stroke="#3C4BDC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="stick"></div>
          <div class="vars">
            <div class="var"></div>
            <div class="var"></div>
          </div>
        </div>
        <div class="count">
          <p>15+</p>
        </div>
      </div>
      <div class="content">
        <NuxtLink to="/product">
          <p class="name">Мебельный стул</p>
        </NuxtLink>
        <p class="size">(50) шт • 55x50х110 см</p>
        <button class="button">
          Добавить корзину
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.item {
  border-radius: 29px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--white, #fff);
}
.pic {
  width: 100%;
  height: 280px;
  object-fit: contain;
  margin-bottom: 14px;
  transition: 0.4s;
}
.item:hover .pic {
  transform: scale(1.1);
}
.bottom {
  padding: 10px 16px 18px 16px;
}
.colors {
  border-radius: 8px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--apple-grey, #f5f5f7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-bottom: 10px;
}
.count {
  color: var(--black, #020105);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
  text-transform: lowercase;
}
.item a:hover {
  text-decoration: none;
}
.var:nth-child(1) {
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.var:nth-child(2) {
  background: green;
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
.var:nth-child(3) {
  background: black;
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
.var:nth-child(4) {
  background: blue;
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
.vars {
  display: flex;
  align-items: center;
  gap: 8px;
}
.swift {
  display: flex;
  align-items: center;
  gap: 12px;
}
.stick {
  width: 1px;
  height: 20px;
  background: #ebebeb;
}
.name {
  color: var(--black, #020105);
  text-overflow: ellipsis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 8px;
}
.size {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 12px;
}
.button {
  width: 100%;
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
.item:hover .button {
  background: var(--light-blue);
  color: white;
}
.item:hover .button path {
  stroke: white;
}
.button path {
  transition: 0.4s;
}
</style>
