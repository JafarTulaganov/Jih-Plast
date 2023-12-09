<template>
  <div class="wrap">
    <div class="container">
      <div class="box">
        <h4 class="title">
          {{ $store.state.translations['main.about-title'] }}
        </h4>
        <p class="sub">
          {{ $store.state.translations['main.about-sub'] }}
        </p>

        <NuxtLink :to="localePath(`/contacts`)">
          {{ $store.state.translations['main.contact-us'] }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12.956 6.78711L18.669 12.5001L12.956 18.2131M5.35498 12.5001H18.652"
              stroke="#1878F3"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>

        <div class="img">
          <img src="@/assets/img/about.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  padding: 120px 0 80px 0;
}
.box {
  max-width: 1516px;
  margin: 0 auto;
  text-align: center;
}
.title {
  color: #000;
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 112%; /* 35.84px */
  margin-bottom: 24px;
}
.sub {
  color: var(--grey-80, #353437);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  max-width: 1196px;
  margin: 0 auto 24px auto;
}
a {
  color: var(--light-blue);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  padding: 14px 36px;
  border-radius: 32px;
  border: 1px solid var(--light-blue);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 40px;
  transition: 0.4s;
}
a:hover {
  background: var(--light-blue);
  color: white;
  text-decoration: none;
}
a:hover svg path {
  stroke: white;
}
svg path {
  transition: 0.4s;
}
.img img {
  width: 100%;
  height: 534px;
  object-fit: cover;
  border-radius: 24px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 56px 0 72px 0;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 112%;
    margin-bottom: 18px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 16px;
  }
  a {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .img img {
    height: 360px;
    border-radius: 16px;
  }
}
</style>
