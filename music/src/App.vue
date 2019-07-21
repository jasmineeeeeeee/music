<template>
    <div id="app" @touchmove.prevent>
      <v-header></v-header>
      <tab></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <play></play>
    </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import tab from './components/tab.vue'
  import play from './components/play.vue'


  export default {
    data() {
      return {}
    },
    components: {
      'v-header':header,
      tab,play
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
