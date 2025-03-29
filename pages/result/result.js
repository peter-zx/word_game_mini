import { saveScore } from '../../utils/score_manager'

Page({
  data: {
    score: 0,
    level: 'lv1',
    mode: '65'
  },

  onLoad(options) {
    const { score, level, mode } = options
    this.setData({ score: parseInt(score), level, mode })

    // 保存成绩
    saveScore({
      score: parseInt(score),
      level,
      time_mode: mode
    })
  },

  goHome() {
    wx.reLaunch({ url: '/pages/index/index' })
  },

  nextLevel() {
    const levels = ['lv1', 'lv2', 'lv3', 'lv4', 'lv5', 'lv6']
    const currentIndex = levels.indexOf(this.data.level.toLowerCase())
    if (currentIndex < 5) {
      const next = levels[currentIndex + 1]
      wx.redirectTo({
        url: `/pages/game/game?level=${next}&mode=${this.data.mode}`
      })
    } else {
      wx.showToast({ title: '已经是最后一关！', icon: 'none' })
      this.goHome()
    }
  }
})
