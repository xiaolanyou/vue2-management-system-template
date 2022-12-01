// 模板
import myAxios from './request.js'
import {
  CLIENTALL_URL,
} from './httplink'

// 查询所有客户
// export const photoApi = (params) => myAxios.get(CLIENTALL_URL, params)
export const photoApi = (params) =>
  myAxios({
    url: CLIENTALL_URL,
    method: 'get',
    params: params
  })
