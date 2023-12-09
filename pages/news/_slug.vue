<template>
  <div class="master">
    <div class="container p-0">
      <div style="margin-top: 206px" class="body">
        <div class="row">
          <div class="col-lg-2 col-xs-0"></div>
          <div class="col-lg-8 col-xs-12 padding">
            <h4 class="title">
              {{ post.title }}
            </h4>
            <div class="info">
              <div class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 5.5C3 4.39543 3.89543 3.5 5 3.5H19C20.1046 3.5 21 4.39543 21 5.5V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V5.5Z"
                    stroke="#9A999B"
                  />
                  <path d="M3 9H21" stroke="#9A999B" stroke-linecap="round" />
                  <path
                    d="M8 2L8 5"
                    stroke="#9A999B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 2V5"
                    stroke="#9A999B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="12" cy="15" r="1" fill="#9A999B" />
                  <circle cx="16" cy="15" r="1" fill="#9A999B" />
                  <circle cx="8" cy="15" r="1" fill="#9A999B" />
                </svg>
                {{ post.date }}
              </div>
              <div class="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                    stroke="#9A999B"
                  />
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="#9A999B"
                  />
                </svg>
                {{ post.views }}
              </div>
            </div>
            <img :src="post.image" alt="" class="pic" />
            <div v-html="post.text" class="content"></div>
          </div>
          <div class="col-lg-2 col-xs-0"></div>
        </div>
        <NewsOther :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import newsApi from '@/api/news'

import NewsOther from '~/components/NewsPage/NewsOther.vue'
export default {
  components: { NewsOther },

  async asyncData({ $axios, params, query, i18n }) {
    const post = await newsApi.getNew(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      post,
    }
  },
}
</script>

<style scoped>
.row {
  padding-bottom: 120px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 72px;
}
.title {
  color: var(--black, #020105);
  font-family: var(--decor-bold);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  text-transform: uppercase;
  margin-bottom: 24px;
}
.info {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
}
.info .item {
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.pic {
  width: 100%;
  height: 633px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 56px;
}
.content::v-deep p {
  color: var(--black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
}
@media screen and (max-width: 1024px) {
  .body {
    padding: 0;
    background: transparent;
    margin-top: 180px !important;
  }
  .title {
    font-size: 18px;
  }
  .padding {
    padding: 0;
  }
  .info .item {
    font-size: 14px;
  }
  .pic {
    height: 200px;
    border-radius: 12px;
    margin-bottom: 20px;
  }
  .row {
    padding-bottom: 0px;
    margin-bottom: 20px;
  }
}
</style>
