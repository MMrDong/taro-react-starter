import React from 'react'
import { Image, View } from '@tarojs/components'
import { HeartFill } from '@nutui/icons-react-taro'
import './index.scss'

interface Highlight {
  text: string
  color: string
}

interface Author {
  name: string
  avatar: string
}

interface XhsTextCardProps {
  title: string
  author: Author
  likes: number
  type?: 'default' | 'blue' | 'purple' | 'pink'
  icon?: string
  highlight?: Highlight[]
}

// 空数组作为默认值
const emptyHighlights: Highlight[] = []

const XhsTextCard: React.FC<XhsTextCardProps> = ({
  title,
  author,
  likes,
  type = 'default',
  icon,
  highlight = emptyHighlights,
}) => {
  // 如果有高亮文本，处理标题
  const renderTitle = () => {
    if (highlight && highlight.length > 0) {
      let parts = [title]

      // 处理每个高亮部分
      highlight.forEach((h) => {
        const newParts = []
        parts.forEach((part) => {
          if (typeof part === 'string') {
            const index = part.indexOf(h.text)
            if (index !== -1) {
              // 分割成前、高亮、后三部分
              const before = part.substring(0, index)
              const after = part.substring(index + h.text.length)

              if (before)
                newParts.push(before)
              newParts.push(
                <View
                  key={`highlight-${h.text}`}
                  className="highlight"
                  style={{ backgroundColor: h.color }}
                >
                  {h.text}
                </View>,
              )
              if (after)
                newParts.push(after)
            }
            else {
              newParts.push(part)
            }
          }
          else {
            newParts.push(part)
          }
        })
        parts = newParts
      })

      return <View className="title">{parts}</View>
    }

    return <View className="title">{title}</View>
  }

  return (
    <View className={`xhs-text-card ${type}`}>
      <View className="card-content">
        {renderTitle()}
        {icon && (
          <View className="icon-wrapper">
            <Image className="icon" src={icon} mode="aspectFit" />
          </View>
        )}
      </View>

      <View className="card-footer">
        <View className="author">
          <Image className="avatar" src={author.avatar} />
          <View className="name">{author.name}</View>
        </View>
        <View className="likes">
          <HeartFill color="#ff2741" width={12} height={12} />
          <View className="count">
            {likes}
            万123
          </View>
        </View>
      </View>
    </View>
  )
}

export default XhsTextCard
