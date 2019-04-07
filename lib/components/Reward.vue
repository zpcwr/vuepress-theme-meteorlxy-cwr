<template>
    <div class="main-div">
      <div class="reward-content text-disabled">
        <a class="reward-btn" @click="showPayImg">赏</a>
        <div v-show="payImg" @click="showPayImg" class="reward-img-content">
          <div>
            <img class="reward-img" :src="$withBase('/assets/img/alipay.png')"/>
            <img  class="reward-img" :src="$withBase('/assets/img/wechatpay.png')"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Reward',
  data () {
    return {
      payImg: false,
    }
  },
  methods: {
    showPayImg () {
      this.payImg = !this.payImg
    },
  },
}
</script>

<style lang="stylus" scoped>
.reward-content
  text-align center
  position: relative;
  .reward-btn
    display inline-block
    width 56px
    height 56px
    line-height 56px
    font-size 20px
    color #fff
    background #f34636
    border-radius 50%
    box-shadow 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
    transition .4s ease-in-out
    cursor pointer
  .reward-img-content
    text-align center
    top -260px
    padding 10px
    position absolute
    left 0
    right 0
    z-index 50
    div
      width: fit-content;
      background-color: aqua;
      margin: 0 auto;
      border-radius: 5px;
      img
        margin: 5px;
    .reward-img
      width 220px
      height 220px
      border 6px solid #fff
      border-radius 3px
</style>
