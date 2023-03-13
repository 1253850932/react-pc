// 用户模块
import { makeAutoObservable } from 'mobx'
import { clearToken, http } from '@/utils'

class UserStore {
  userInfo = {}

  constructor() {
    makeAutoObservable(this)
  }
  async getUserInfo(): Promise {
    const res = await http.get('/user/profile')
    this.userInfo = res.data.data
  }
  logout = async () => {
    this.userInfo = ''
    clearToken()
  }
}
export default UserStore
