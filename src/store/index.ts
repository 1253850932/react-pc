import React from 'react'
import LoginStore from './login.Store.ts'
import UserStore from './user.Store'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

// 导入useStore方法供组件使用
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
