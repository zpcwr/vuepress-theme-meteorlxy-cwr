<template>
  <div :class="banner">
    <div class="container">
      <div class="center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderBanner',
  computed: {
    banner () {
      return 'banner ' + (this.$themeConfig.header.background.useImg ? 'banner-text-withe' : 'banner-text-black')
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.banner
  cursor default
  height $bannerHeight
  border-bottom 1px solid $borderColor
  .container
    height 100%
    display flex
    align-items center
    justify-content center
    .center
      z-index 19
      text-align center
      transition all 0.2s ease-in-out
      &:hover
        transform scale(1.2)
.banner-text-withe
  color $headerTitleColorWithe
.banner-text-black
  color $headerTitleColorBlack
</style>
