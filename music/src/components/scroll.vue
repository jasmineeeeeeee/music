<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
   created(){
      this.$nextTick(() => {
        this.initScroll();
      })
   },
    methods: {
      initScroll() {
        this.menuScroll = new BScroll(this.$refs.wrapper, {
          click: true    // 这里表示允许点击事件
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
