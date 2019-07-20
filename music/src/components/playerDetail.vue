<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from './music-list'
  import {getSingerDetail} from '../assets/js/recommond'
  import {ERR_OK} from '../assets/js/config'
  import {createSong} from '../assets/js/recommond'
  import {mapGetters} from 'vuex'

  export default {
    props:{
      id:{
        type:Number
      }
   },
    data(){
      return{
        singerId:0,
        singer:[],
        songs:0
      }
    },
    created(){
      this.getId();
    },
    mounted(){
        this.getDetail();
    },
    methods: {
      getId(){
        this.singerId=this.id;
      },
      getDetail(){
        getSingerDetail(singerId).then((res) => {
          if (res.code === ERR_OK) {
            //this.songs = this._normalizeSongs(res.data.list)
            console.log("fongle")
          }
        }).catch((err)=>{
          console.log('error!')
        })
      }
      /*_normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }*/
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
