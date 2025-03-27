import { ScrollView, Text, View } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

interface CategoryTabsProps {
  categories: string[]
  onSelect?: (category: string, index: number) => void
}

export default function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (category: string, index: number) => {
    setActiveIndex(index)
    onSelect && onSelect(category, index)
  }

  return (
    <ScrollView scrollX className="category-tabs-container">
      <View className="category-tabs">
        {categories.map((category, index) => (
          <View
            key={category}
            className={`tab-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(category, index)}
          >
            <Text>{category}</Text>
            {activeIndex === index && <View className="active-line" />}
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
