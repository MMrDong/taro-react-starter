import { Image, Input, View } from '@tarojs/components'
import searchIcon from '../../assets/images/search.png'
import './index.scss'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

export default function SearchBar({ placeholder = '搜索', onSearch }: SearchBarProps) {
  const handleInput = (e) => {
    if (e.detail.value && onSearch)
      onSearch(e.detail.value)
  }

  return (
    <View className="search-bar">
      <View className="search-input-wrapper">
        <View className="search-icon">
          <Image
            className="icon"
            src={searchIcon}
            mode="aspectFit"
          />
        </View>
        <Input
          className="search-input"
          placeholder={placeholder}
          confirmType="search"
          onConfirm={handleInput}
        />
      </View>
    </View>
  )
}
