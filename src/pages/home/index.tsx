import { Image, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { SearchBar, Tabs } from '@nutui/nutui-react-taro'
import { HeartFill } from '@nutui/icons-react-taro'
import { useAuth } from '@/hooks'
import Waterfall from '@/components/Waterfall'
import XhsTextCard from '@/components/XhsTextCard'
import { generateNotes, generateTextCardNotes } from '@/utils/fakerData'
import './index.scss'

// 分类标签
const CATEGORIES = ['推荐', '穿搭', '美食', '彩妆', '影视', '职场', '情感', '家居']

function NoteCard({ item }) {
  return (
    <View className="note-card">
      <Image className="note-image" src={item.image} mode="widthFix" />
      <View className="note-content">
        <View className="note-title">{item.title}</View>
        <View className="note-footer">
          <View className="author">
            <Image className="avatar" src={item.author.avatar} />
            <View className="name">{item.author.name}</View>
          </View>
          <View className="likes">
            <HeartFill color="#ff2741" width={12} height={12} />
            <View className="count">
              {item.likes}
              万
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function Home() {
  useAuth()
  const [tabValue, setTabValue] = useState('0')
  const [notes, setNotes] = useState([])
  const [textCards, setTextCards] = useState([])

  useEffect(() => {
    // 生成随机笔记数据和文字卡片
    setNotes(generateNotes(12))
    setTextCards(generateTextCardNotes(4))
  }, [])

  const handleTabChange = (value) => {
    setTabValue(value)
    // 切换分类时重新生成数据
    setNotes(generateNotes(12))
    setTextCards(generateTextCardNotes(4))
  }

  // 混合照片卡片和文字卡片
  const mixedContent = () => {
    // 创建混合内容数组
    const mixed = [...notes]

    // 在特定位置插入文字卡片
    if (textCards.length > 0) {
      mixed.splice(2, 0, textCards[0])
      if (textCards.length > 1)
        mixed.splice(6, 0, textCards[1])

      if (textCards.length > 2)
        mixed.splice(9, 0, textCards[2])

      if (textCards.length > 3)
        mixed.splice(12, 0, textCards[3])
    }

    return mixed
  }

  // 根据卡片类型渲染不同的组件
  const renderCard = (item) => {
    if (item.image) {
      return <NoteCard key={item.id} item={item} />
    }
    else {
      return (
        <XhsTextCard
          key={item.id}
          title={item.title}
          author={item.author}
          likes={item.likes}
          type={item.type}
          icon={item.icon}
          highlight={item.highlight}
        />
      )
    }
  }

  return (
    <View className="home-container">
      <View className="header">
        <View className="logo-container">
          <Image className="logo" src="https://ci.xiaohongshu.com/c855787e-f493-4308-9413-fc99e2b0f3cc" />
        </View>
        <SearchBar
          placeholder="图片壁纸"
          className="search-box"
        />
      </View>

      <View className="category-tabs-wrap">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          className="category-tabs"
          activeColor="#ff2741"
        >
          {CATEGORIES.map((item, index) => (
            <Tabs.TabPane key={index} title={item} value={String(index)}>
              {/* 内容区域会根据TabPane自动切换 */}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </View>

      <View className="content">
        <Waterfall>
          {mixedContent().map(item => renderCard(item))}
        </Waterfall>
      </View>
    </View>
  )
}
