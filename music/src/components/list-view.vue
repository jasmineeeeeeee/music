<template>
  <scroll class="listview">
    <ul>
      <li v-for="(group,index) in data" class="list-group" ref="listGroup">
        <router-link :to="path='/singer/id'" class="list-group-title" >
          {{group.Fsinger_name}}
          <playerDetail :id="index"></playerDetail>
          <router-view></router-view>
        </router-link>
      </li>
    </ul>
  </scroll>
</template>
<script type="text/ecmascript-6">
  import scroll from './scroll'
  import playerDetail from './playerDetail.vue'
  const TITLE_HEIGHT = 30
  const ANCHOR_HEIGHT = 18

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods:{
    },
    components: {
      scroll,playerDetail
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/variable"
 .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      list-style none
      .list-group-title
        height: 30px
        line-height: 30px
        text-align center
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
