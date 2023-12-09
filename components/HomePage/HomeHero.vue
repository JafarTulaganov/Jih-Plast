<template>
  <div class="wrap">
    <div class="container p-0">
      <div class="flexer">
        <div class="left">
          <div class="top">
            <h1 class="title">
              {{ $store.state.translations['main.title'] }}
            </h1>
            <p class="sub">
              {{ $store.state.translations['main.hero-sub'] }}
            </p>
          </div>
          <div class="bottom">
            <div class="wrep">
              <NuxtLink :to="localePath('/about')">
                {{ $store.state.translations['main.hero-more'] }}
              </NuxtLink>
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.956 6.28711L18.669 12.0001L12.956 17.7131M5.35498 12.0001H18.652"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <img src="@/assets/img/planet.png" alt="" class="pic" />
        </div>
        <div class="right">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9XIJO5inmvM?autoplay=1&mute=1&controls=0&loop=1&playlist=9XIJO5inmvM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
  padding: 204px 0 24px 0;
}
.flexer {
  display: grid;
  grid-template-columns: 6.5fr 4.5fr;
  gap: 24px;
}
.right {
  width: 100%;
  height: 100%;
  min-height: 700px;
  border-radius: 40px;
  overflow: hidden;
  padding: 0 !important;
}
iframe {
  width: 100%;
  height: 100%;
  min-height: 700px;
  object-fit: cover;
  pointer-events: none;
  transform: scale(1.8);
}
.left {
  background: var(--blue);
  border-radius: 40px;
  padding: 80px;
  position: relative;
  height: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pic {
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
}
.title {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  text-transform: uppercase;
  margin-bottom: 20px;
}
.sub {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 650px;
}
.bottom a {
  color: var(--white, #fff);
  font-family: var(--decor);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}
.bottom a:hover {
  text-decoration: none;
}
.svg {
  padding: 8px;
  border: 1px solid white;
  border-radius: 50%;
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.wrep {
  display: flex;
  align-items: center;
  gap: 16px;
}
.right {
  height: 100%;
  padding: 0 0 0 24px;
}
@media screen and (max-width: 1640px) {
  .wrap {
    padding-top: 180px;
  }
  .left {
    padding: 36px;
    min-height: 366px;
  }
  .right {
    max-height: 366px;
    min-height: unset;
  }
  iframe {
    height: 366px;
    min-height: 366px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    max-width: 80%;
  }
  .svg {
    width: 44px;
    height: 44px;
  }
  .pic {
    width: 50%;
  }
  .left,
  .right {
    border-radius: 24px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 148px;
  }
  .flexer {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .left {
    border-radius: 16px;
    padding: 20px 24px;
    min-height: 360px;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .pic {
    max-width: 70%;
  }
  .bottom a {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  .svg {
    width: 36px;
    height: 36px;
  }
  .right {
    padding: 0;
  }
  .right {
    height: 360px;
    min-height: 360px;
    border-radius: 16px;
  }
}
</style>
