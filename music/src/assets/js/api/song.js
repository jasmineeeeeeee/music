import {commonParams} from '../config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    g_tk:1928093487,
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: + new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
