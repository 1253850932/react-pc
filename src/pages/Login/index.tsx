import { Card, Form, Input, Button, Checkbox } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import './index.scss'
import logo from '@/assets/logo.png'
import React, { useEffect, useState } from 'react'
import { useStore } from '@/store'
const Login = (): HTMLDivElement => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState({})
  const { loginStore } = useStore()
  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])
  const onFinish = value => {
    loginStore.getToken({
      mobile: value.mobile,
      code: value.code,
    })
  }
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} />

        <Form
          form={form}
          name='horizontal_login'
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          initialValues={{
            mobile: '18306073589',
            code: '246810',
            remember: true,
          }}
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                required: true,
                message: '请输入正确手机号',
                pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
                validateTrigger: 'onBlur',
              },
            ]}
            size='large'
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='请输入手机号'
            />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' },
            ]}
            size='large'
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              placeholder='请输入验证码'
            />
          </Form.Item>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='login-checkbox-label'>
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button type='primary' htmlType='submit'>
                Log in
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
