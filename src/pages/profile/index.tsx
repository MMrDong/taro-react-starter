import { Image, Text, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { My } from '@nutui/icons-react-taro'
import { useAuth } from '@/hooks'
import { generateProfile } from '@/utils/fakerData'
import './index.scss'

export default function Profile() {
  useAuth()
  const [profile, setProfile] = useState({
    nickname: '',
    userId: '',
    avatar: '',
    description: '',
    stats: {
      following: 0,
      followers: 0,
      likes: 0,
    },
  })

  const [activeTab, setActiveTab] = useState('1')

  useEffect(() => {
    // 生成随机个人信息
    setProfile(generateProfile())
  }, [])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <View className="profile-container">
      {/* 个人信息区域 */}
      <View className="profile-header">
        <View className="avatar-container">
          <Image className="avatar" src={profile.avatar} />
        </View>

        <View className="user-name-area">
          <Text className="nickname">小红薯67E52B2B</Text>
          <Text className="user-id">小红书号 94191833811</Text>
        </View>

        <View className="description">
          <Text>还没有简介</Text>
        </View>

        {/* 统计数据 */}
        <View className="stats-container">
          <View className="stat-item">
            <Text className="count">0</Text>
            <Text className="label">关注</Text>
          </View>
          <View className="stat-item">
            <Text className="count">0</Text>
            <Text className="label">粉丝</Text>
          </View>
          <View className="stat-item">
            <Text className="count">0</Text>
            <Text className="label">获赞与收藏</Text>
          </View>

          {/* 设置按钮 */}
          <View className="settings-btn">
            <View className="icon-container">
              <Text className="icon">⚙️</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 内容标签页 */}
      <View className="content-tabs">
        <View
          className={`tab-item ${activeTab === '1' ? 'active' : ''}`}
          onClick={() => handleTabClick('1')}
        >
          笔记
        </View>
        <View
          className={`tab-item ${activeTab === '2' ? 'active' : ''}`}
          onClick={() => handleTabClick('2')}
        >
          收藏
        </View>
        <View
          className={`tab-item ${activeTab === '3' ? 'active' : ''}`}
          onClick={() => handleTabClick('3')}
        >
          赞过
        </View>
      </View>

      {/* 空内容提示 */}
      <View className="empty-content">
        <Image
          className="empty-icon"
          src="https://ci.xiaohongshu.com/d79bc8f4-d95e-4740-9ed5-f4f327232ada"
        />
        <Text className="empty-text">你还没有发布笔记呢</Text>
      </View>

    </View>
  )
}
