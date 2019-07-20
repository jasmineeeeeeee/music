<template>
    <div id="app" @touchmove.prevent>
      <v-header></v-header>
      <tab></tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--<player></player>-->
    </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import tab from './components/tab.vue'
  import player from './components/Player.vue'


  export default {
    data() {
      return {}
    },
    components: {
      'v-header':header,
      tab,player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
