Page({
  data: {
    levels: ['Lv1', 'Lv2', 'Lv3', 'Lv4', 'Lv5', 'Lv6'],
    mode: '65'  // 默认时间模式
  },

  onLoad(options) {
    // 从上一页带过来的参数，如 mode=65
    if (options.mode) {
      this.setData({ mode: options.mode })
    }
  },

  startGame(e) {
    const level = e.currentTarget.dataset.level
    wx.navigateTo({
      url: `/pages/game/game?level=${level}&mode=${this.data.mode}`
    })
  },

  goBack() {
    wx.navigateBack()
  }
})
