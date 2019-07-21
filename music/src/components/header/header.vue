<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">汇听音乐</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl"
  @import "../../assets/stylus/mixin"
  @import "../../assets/stylus/base.styl"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    background-color: #6e8b3d
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: 22px
      font-weight: 600
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
