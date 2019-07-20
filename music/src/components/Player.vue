<template>
  <div class="singer" ref="singer">
      <div class="pic">
        <h2>万千歌手，尽在眼前</h2>
      </div>
        <listView :data="singerlist" ref="list"></listView>
      <router-view></router-view>
  </div>
</template>
<script>
  import scroll from './scroll.vue'
  import {getSingers} from '../assets/js/recommond'
  import {ERR_OK} from '../assets/js/config'
  import listView from './list-view'
  import {playlistMixin} from '../assets/js/mixin'
  import {mapMutations} from 'vuex'
  //console.log(data)
  export default {
    minxins: [playlistMixin],
    data() {
      return {
        singerlist:[]
      }
    },
    components: {
      listView,scroll
    },
    created(){
      this._getsingerlist()
    },
    methods: {
      _getsingerlist(){
        getSingers().then((res)=>{
          if (res.code === ERR_OK) {
            this.singerlist = res.data.list;
            console.log(res.data.list)
          }
        })
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })
    },
  }
</script>
<style>
  .singer{
    position: fixed;
    width: 100%;
  }
  .pic{
    margin: 0;
    height: 188px;
    background:url('bg_singer.jpg') repeat-x;
    overflow: hidden;
  }
  h2{
    margin: 0;
    color:rgba(232,232,232,0.4);
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 188px;
  }

</style>
