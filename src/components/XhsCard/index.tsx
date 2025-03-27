import { Image, Text, View } from '@tarojs/components'
import './index.scss'

interface CardProps {
  image: string
  title: string
  author: {
    avatar: string
    name: string
  }
  likes: number
}

export default function XhsCard({ image, title, author, likes }: CardProps) {
  return (
    <View className="xhs-card">
      <Image className="card-image" src={image} mode="widthFix" />
      <View className="card-content">
        <Text className="card-title text-lg">{title}</Text>
        <View className="card-footer">
          <View className="author">
            <Image className="avatar" src={author.avatar} />
            <Text style={{ fontSize: '16px' }} className="name">{author.name}</Text>
          </View>
          <View className="likes">
            <Text className="like-icon">♥</Text>
            <Text>{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
