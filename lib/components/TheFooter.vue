<template>
  <footer class="footer" v-if="enable">
    <p
      v-if="sns && showSns"
      class="sns-links"
    >
      <template v-for="(item, name) in sns">
        <a
          v-if="item.link"
          target="_blank"
          class="sns-link"
          :href="item.link"
        >
          <IconSns
            :name="name"
            :account="item.account"
          />
        </a>
        <a
          v-if="item.img"
          class="sns-link"
          style="cursor: pointer"
          @click="toggleImg(name)"
        >
          <img :id="name" :src="$withBase(item.img)" class="sns-img" style="display: none;"/>
          <IconSns
            :name="name"
            :account="item.account"
          />
        </a>
      </template>
    </p>

    <p v-if="showVuePress">
      <span>Powered by </span>

      <a
        href="https://vuepress.vuejs.org"
        target="_blank"
      >
        Vuepress
      </a>
    </p>
  </footer>
</template>

<script>
import IconSns from './IconSns.vue'

export default {
  name: 'TheFooter',
  data () {
    return {
      snsImgShow: {},
    }
  },
  components: {
    IconSns,
  },
  methods: {
    toggleImg (snsName) {
      let snsNameEle = document.getElementById(snsName)
      let display = snsNameEle.style.display
      console.log(display)
      if (display === 'none') {
        snsNameEle.style.display = 'block'
      } else {
        snsNameEle.style.display = 'none'
      }
    },
  },
  computed: {
    sns () {
      return this.$themeConfig.personalInfo.sns || null
    },
    showSns () {
      return this.$themeConfig.footer.showSns || null
    },
    enable () {
      return this.$themeConfig.footer.enable || null
    },
    showVuePress () {
      return this.$themeConfig.footer.showVuePress || null
    }
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.footer
  color $grayTextColor
  padding-bottom 1.5rem
  text-align center
  border-top 1px solid $borderColor
</style>
