import { useState } from 'react'
import { Button } from 'antd'
import 'antd/dist/reset.css'
import { AuthRoute } from '@/components/AuthRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import Home from '@/pages/Layout/Home'
import Publish from '@/pages/Layout/Publish'
import Article from '@/pages/Layout/Article'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* 需要鉴权的路由 */}
          {/* Layout需要鉴权处理 */}
          <Route
            path='/'
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }
          >
            {/* 二级路由嵌套 */}
            {/* 默认二级  path取消，添加index */}
            <Route index element={<Home />}></Route>
            <Route path='/publish' element={<Publish />}></Route>
            <Route path='/article' element={<Article />}></Route>
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
