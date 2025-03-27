const pages = ['pages/index/index', 'pages/blank/index', 'pages/home/index', 'pages/profile/index']
export default defineAppConfig({
  animation: true,
  entryPagePath: 'pages/blank/index',
  pages,
  tabBar: {
    color: '#999999',
    selectedColor: '#ff2741',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-selected.png',
        text: '',
      },
      {
        pagePath: 'pages/profile/index',
        iconPath: 'assets/tabbar/profile.png',
        selectedIconPath: 'assets/tabbar/profile-selected.png',
        text: '',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小红书',
    navigationBarTextStyle: 'black',
  },
})
