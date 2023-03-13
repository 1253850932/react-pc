import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, Link, navigator, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useStore } from '@/store'
import { useEffect } from 'react'
const { Header, Sider } = Layout

const GeekLayout = () => {
  /**
   * 能够在页面刷新的时候保持对应菜单高亮
   * 1将 Menu 的key 属性修改为与其对应的路由地址
   * 2获取到当前正在访问页面的路由地址
   * 3将当前路由地址设置为 selectedKeys 属性的值
   */
  const location = useLocation()
  const navigate = useNavigate()
  // 这里是当前浏览器上的路径地址
  const selectKey = location.pathname

  const { userStore } = useStore()
  // 获取用户数据
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])

  //   用户退出
  const logout = () => {
    userStore.logout()
    navigate('/')
  }
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <div className='user-info'>
          <span className='user-name'>{userStore.userInfo.name}</span>
          <span className='user-logout'>
            <Popconfirm
              title='是否确认退出？'
              okText='退出'
              cancelText='取消'
              onConfirm={logout}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            theme='dark'
            defaultSelectedKeys={[selectKey]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key='/'>
              <Link to='/'>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key='/article'>
              <Link to='/article'>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key='/publish'>
              <Link to='/publish'>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* 二级路由对应显示 */}
        <Layout className='layout-content' style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
