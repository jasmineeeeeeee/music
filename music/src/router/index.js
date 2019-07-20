import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank.vue'
import Recommend from '../components/reconmmend.vue'
import Disc from '../components/disc.vue'
import Singer from '../components/player.vue'
import Search from '../components/search.vue'
import UserCenter from '../components/user.vue'
import SingerDetail from '../components/playerDetail.vue'
import Toplist from '../components/toplist'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: 'id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          name: 'id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: Toplist
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})

