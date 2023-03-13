// 登录模块
import { makeAutoObservable } from 'mobx'
import { http, getToken, setToken, clearToken } from '@/utils'
import { useLocation } from 'react-router-dom'

class LoginStore {
  token: string = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  getToken = async ({ mobile, code }): void => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code,
    })
    this.token = res.data.data.token
    setToken(this.token)
  }
}

export default LoginStore
