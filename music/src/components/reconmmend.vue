<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load=loadImage :src="item.picUrl">
              </a>
            </div>
          </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul style="padding: 0 20px">
          <li @click="selectItem(item)" v-for="item in discList" class="item">
            <div class="icon">
              <img width="60" height="60" :src="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
<script>
  import slider from './slider.vue'
  import scroll from './scroll.vue'
  import {getRecommend} from '../assets/js/recommond'
  import {getDiscList} from '../assets/js/recommond'
  import {ERR_OK} from '../assets/js/config'
  import loading from './loading/loading.vue'
  import {mapMutations} from 'vuex'
  import {playlistMixin} from '../assets/js/mixin'

  export default {
    minxins: [playlistMixin],
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    components:{
      slider,scroll,loading
    },
    created() {
      this._getRecommend();
      this._getDiscList();
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.recommends.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        });
        this.setDisc(item)
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
            console.log(res.data.slider)
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList= res.data.list;
            console.log(res.data.list)
          }
        })
    },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
   }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/variable.styl"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    margin 0px
    background: $color-background
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: 24px
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          margin 0px
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
            z-index 30
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
