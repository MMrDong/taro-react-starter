import { View } from '@tarojs/components'
import type { ReactNode } from 'react'
import './index.scss'

interface WaterfallProps {
  children: ReactNode[]
  columnCount?: number
}

export default function Waterfall({ children, columnCount = 2 }: WaterfallProps) {
  const columns: ReactNode[][] = Array.from({ length: columnCount }, () => [])

  // 将子元素按顺序分配到各列中
  children.forEach((child, index) => {
    const columnIndex = index % columnCount
    columns[columnIndex].push(
      <View key={`item-${index}`} className="waterfall-item">
        {child}
      </View>,
    )
  })

  return (
    <View className="waterfall-container">
      {columns.map((column, index) => (
        <View key={`column-${index}`} className="waterfall-column">
          {column}
        </View>
      ))}
    </View>
  )
}
