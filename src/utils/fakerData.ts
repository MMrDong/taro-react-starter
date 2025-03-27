import { faker } from '@faker-js/faker/locale/zh_CN'

// 生成随机图片URL
function getRandomImageUrl() {
  return faker.image.url({ width: 640, height: 800 })
}

// 小红书风格的标题模板
const titleTemplates = [
  '{{item}}也太好用了吧！{{emoji}}',
  '{{location}}超好逛的地方！{{emoji}}',
  '学生党必入的{{item}}{{emoji}}',
  '{{season}}必备！{{item}}太绝了',
  '《{{item}}》这本书我吹爆！{{emoji}}',
  '{{location}}拍照圣地分享{{emoji}}',
  '{{number}}天{{item}}挑战！效果惊人{{emoji}}',
  '{{location}}探店|人均{{number}}块',
  '闺蜜安利的{{item}}{{emoji}}',
  '囤了{{number}}件{{item}}的我{{emoji}}',
  '{{item}}好用到哭{{emoji}}',
  '{{location}}遛娃好去处{{emoji}}',
  '{{number}}分钟{{item}}教程{{emoji}}',
  '测评|{{number}}款{{item}}哪个值得买？',
]

// 文字卡片标题模板 - 短而有冲击力
const textCardTitleTemplates = [
  '{{location}}{{item}}这件事是真的{{emoji}}',
  '默默把{{item}}移出{{location}}',
  '小心这些{{item}}背后的真相{{emoji}}',
  '关于{{item}}，我有话说{{emoji}}',
  '千万别做的{{number}}件事{{emoji}}',
  '{{item}}让我后悔的{{number}}个原因',
  '我和{{item}}的{{number}}天',
  '{{season}}必备神器！{{emoji}}',
  '人间清醒：{{item}}',
  '{{item}}🔥正确打开方式',
  '{{item}}居然可以这样用？{{emoji}}',
  '{{location}}必打卡{{emoji}}',
  '{{item}}党必看{{emoji}}',
  '{{location}}千万别去{{emoji}}',
]

// 生成随机emoji
const emojis = ['😱', '😍', '🔥', '💖', '👏', '✨', '🎉', '😊', '🤔', '🙄', '😳', '🥰', '🤗', '💯', '🌈', '💫']

// 生成随机位置
const locations = ['上海', '北京', '广州', '成都', '杭州', '深圳', '南京', '重庆', '武汉', '西安', '长沙', '苏州', '厦门', '天津', '青岛', '三亚']

// 生成随机物品
const items = ['连衣裙', '咖啡杯', '口红', '眉笔', '洗面奶', '防晒霜', '鞋子', '包包', '手表', '耳环', '笔记本', '键盘', '手机壳', '水杯', '零食', '化妆品', '帽子', '眼镜', '手链', '项链', '衬衫', '外套', '裤子', '袜子', '围巾', '手套', '围裙', '耳机', '音箱', '相机', '镜头', '自拍杆', '充电宝', '数据线', '鼠标', '鼠标垫', '护肤品', '面膜', '精华液', '爽肤水', '乳液', '面霜', '眼霜', '唇膏', '睫毛膏', '腮红', '粉底液', '粉饼', '遮瑕', '高光', '定妆粉', '卸妆水', '卸妆油', '卸妆乳', '洗发水', '护发素', '发膜', '发油', '发蜡', '发胶', '染发剂', '烫发剂', '护发精油', '沐浴露', '洗手液', '香皂', '浴球', '浴盐', '浴缸', '浴巾', '毛巾', '牙刷', '牙膏', '漱口水', '牙线', '牙签', '梳子', '发夹', '发圈', '发带', '美甲', '指甲油', '指甲刀', '指甲剪', '指甲锉', '指甲贴', '香水', '古龙水', '精油', '蜡烛', '香薰', '香炉', '香包', '香囊', '香袋', '香枕', '香草', '香料', '香精', '香粉', '香膏', '香露', '香液', '香油', '香脂', '香霜', '香乳', '香膏', '香丸', '香饼', '香球', '香柱', '香条', '香片', '香块', '香粒', '香末', '香碎', '香屑', '香末']

// 生成随机季节
const seasons = ['春季', '夏季', '秋季', '冬季', '春夏', '秋冬', '四季']

// 随机图标URLs
const iconUrls = [
  'https://www.svgrepo.com/show/532195/pin.svg',
  'https://www.svgrepo.com/show/532188/heart.svg',
  'https://www.svgrepo.com/show/532182/star.svg',
  'https://www.svgrepo.com/show/532151/bookmark.svg',
  'https://www.svgrepo.com/show/532099/pencil.svg',
  'https://www.svgrepo.com/show/532114/message.svg',
  'https://www.svgrepo.com/show/532085/flash.svg',
  'https://www.svgrepo.com/show/532135/video.svg',
]

// 生成随机标题
function generateTitle() {
  const template = titleTemplates[Math.floor(Math.random() * titleTemplates.length)]
  return template
    .replace('{{item}}', items[Math.floor(Math.random() * items.length)])
    .replace('{{location}}', locations[Math.floor(Math.random() * locations.length)])
    .replace('{{season}}', seasons[Math.floor(Math.random() * seasons.length)])
    .replace('{{number}}', String(Math.floor(Math.random() * 10) + 1))
    .replace('{{emoji}}', emojis[Math.floor(Math.random() * emojis.length)])
}

// 生成文字卡片的标题
function generateTextCardTitle() {
  const template = textCardTitleTemplates[Math.floor(Math.random() * textCardTitleTemplates.length)]
  return template
    .replace('{{item}}', items[Math.floor(Math.random() * items.length)])
    .replace('{{location}}', locations[Math.floor(Math.random() * locations.length)])
    .replace('{{season}}', seasons[Math.floor(Math.random() * seasons.length)])
    .replace('{{number}}', String(Math.floor(Math.random() * 10) + 1))
    .replace('{{emoji}}', emojis[Math.floor(Math.random() * emojis.length)])
}

// 根据内容类型生成随机笔记
export function generateNote(type = '') {
  return {
    id: faker.string.uuid(),
    title: generateTitle(),
    image: getRandomImageUrl(),
    content: faker.lorem.paragraph(),
    author: {
      name: faker.person.firstName() + faker.person.lastName().charAt(0),
      avatar: faker.image.avatar(),
    },
    likes: Math.floor(Math.random() * 999),
    type: type || faker.helpers.arrayElement(['穿搭', '美食', '彩妆', '影视', '职场', '情感', '家居']),
  }
}

// 生成文字卡片笔记
export function generateTextCardNote() {
  const title = generateTextCardTitle()
  const cardTypes = ['default', 'blue', 'purple', 'pink']
  const type = cardTypes[Math.floor(Math.random() * cardTypes.length)]

  // 随机决定是否添加高亮
  const hasHighlight = Math.random() > 0.5
  let highlight

  if (hasHighlight) {
    // 从标题中随机选择一段文本高亮
    const words = title.split(/\s+/)
    const highlightWord = words[Math.floor(Math.random() * words.length)]
    if (highlightWord && !highlightWord.includes('{{') && !highlightWord.includes('}}')) {
      const highlightColors = ['#FFD6E7', '#D6EAFF', '#FFFFD6', '#D6FFE9']
      highlight = [{
        text: highlightWord,
        color: highlightColors[Math.floor(Math.random() * highlightColors.length)],
      }]
    }
  }

  // 随机决定是否添加图标
  const hasIcon = Math.random() > 0.7

  return {
    id: faker.string.uuid(),
    title,
    content: faker.lorem.paragraph(),
    author: {
      name: faker.person.firstName() + faker.person.lastName().charAt(0),
      avatar: faker.image.avatar(),
    },
    likes: Math.floor(Math.random() * 999),
    type,
    ...(hasIcon ? { icon: iconUrls[Math.floor(Math.random() * iconUrls.length)] } : {}),
    ...(highlight ? { highlight } : {}),
  }
}

// 生成多个随机笔记
export function generateNotes(count = 10) {
  return Array.from({ length: count }, () => generateNote())
}

// 生成多个文字卡片笔记
export function generateTextCardNotes(count = 4) {
  return Array.from({ length: count }, () => generateTextCardNote())
}

// 生成随机个人资料
export function generateProfile() {
  return {
    nickname: faker.person.firstName() + faker.person.lastName().charAt(0),
    userId: faker.internet.userName(),
    avatar: faker.image.avatar(),
    description: faker.lorem.sentence(10),
    stats: {
      following: Math.floor(Math.random() * 500),
      followers: Math.floor(Math.random() * 5000),
      likes: Math.floor(Math.random() * 10000),
    },
  }
}

// 导出默认方法
export default {
  generateNote,
  generateNotes,
  generateTextCardNote,
  generateTextCardNotes,
  generateProfile,
}
