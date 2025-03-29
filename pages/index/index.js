Page({
  data: {
    scores: []  // 排行榜数据
  },

  onLoad() {
    this.loadScores()
  },

  // 用户点击模式按钮
  chooseMode(e) {
    const mode = e.currentTarget.dataset.mode
    wx.navigateTo({
      url: `/pages/level/level?mode=${mode}`
    })
  },

  // 跳转到添加单词库页面
  goToAddWords() {
    wx.navigateTo({
      url: '/pages/add_words/add_words'
    })
  },

  // 加载排行榜数据（从本地缓存模拟）
  loadScores() {
    const scores = wx.getStorageSync('scores') || []
    this.setData({ scores: scores.slice(0, 5) })
  }
})
