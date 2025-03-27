import type { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
// 引入NutUI样式
import '@nutui/nutui-react-taro/dist/style.css'
import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    // App初始化完成
  })

  // children 是将要会渲染的页面
  return children
}

export default App
