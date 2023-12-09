<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="cardo">
        <h1 class="title">{{ title }}</h1>
        <div class="crumbs">
          <NuxtLink class="last" to="/">
            {{ $store.state.translations['main.main'] }}
          </NuxtLink>
          /
          <p class="this">{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style scoped>
.wrap {
  padding: 206px 0 16px 0;
}
.cardo {
  background: var(--blue);
  border-radius: 40px;
  padding: 80px 0;
}
.title {
  color: var(--white, #fff);
  text-align: center;
  font-family: var(--decor);
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.crumbs {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ebebeb;
  gap: 8px;
}
.last,
.this {
  color: var(--grey-8, #ebebeb);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
@media screen and (max-width: 1640px) {
  .wrap {
    padding-top: 180px;
  }
  .cardo {
    border-radius: 24px;
    margin: 0 16px;
    padding: 40px 0;
  }
  .title {
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 154px;
  }
  .cardo {
    padding: 36px 0;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .this,
  .last {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .crumbs {
    gap: 8px;
  }
}
</style>
