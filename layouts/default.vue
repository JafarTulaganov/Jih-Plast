<template>
  <div class="master">
    <DesktopNavbar class="navbar" />
    <MobileMenu class="mobile" />
    <nuxt />
    <DesktopFooter />
  </div>
</template>

<script>
import translationsApi from '@/api/translations'

import DesktopFooter from '~/components/DesktopFooter.vue'
import DesktopNavbar from '~/components/DesktopNavbar.vue'
import MobileMenu from '~/components/MobileMenu.vue'
export default {
  components: { DesktopNavbar, DesktopFooter, MobileMenu },

  data() {
    return {
      translations: [],
    }
  },

  mounted() {
    this.$store.commit('reloadStore')
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    })

    await this.$store.commit('getTranslations', translations.data)
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      })

      await this.$store.commit('getTranslations', translations.data)
    },
  },

  computed: {
    currentLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style scoped>
.mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .navbar {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
