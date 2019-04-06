<template>
    <div v-if="enable" class="main-div" style="background-color: unset;margin-top: unset;margin-bottom: unset;padding-top: 10px;padding-bottom: 10px;">
      <APlayer :mini="mini" :float="true" :listFolded="false" :autoplay="autoplay" :list= musicList :music="music"/>
    </div>
</template>

<script>
import APlayer from './APlayer/vue-aplayer'
export default {
  name: 'Music',
  components: {
    APlayer,
  },
  data () {
    return {
      music: null,
    }
  },
  computed: {
    musicList () {
      let musicList = this.$themeConfig.aPlayer.musicList
      let defaultChoose = this.$themeConfig.aPlayer.defaultChoose
      defaultChoose = defaultChoose <= 0 || defaultChoose > musicList.length ? parseInt(Math.random()*(musicList.length - 1)+'',10) : defaultChoose - 1
      defaultChoose = defaultChoose >= musicList.length ? musicList.length -1 : defaultChoose
      this.music = musicList[defaultChoose]
      return musicList
    },
    enable () {
      return this.$themeConfig.aPlayer.enable
    },
    autoplay () {
      return this.$themeConfig.aPlayer.autoplay
    },
    mini () {
      return this.$themeConfig.aPlayer.mini
    }
  }
}
</script>

<style scoped>

</style>
