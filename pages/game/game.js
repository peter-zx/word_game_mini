import { generateGame, checkPair } from '../../utils/game_engine'

let timer = null

Page({
  data: {
    mode: '65',
    level: 'lv1',
    rows: 4,
    score: 0,
    timeDisplay: '--',
    timeLeft: 0,
    currentGroup: 0,
    groups: [],
    currentGrid: [],
    selected: [],
    matchedIds: [],
    wordIds: {},
    isEndless: false
  },

  onLoad(options) {
    const { level, mode } = options
    const isEndless = mode === 'endless'

    const { groups, rows } = generateGame(level, isEndless)

    this.setData({
      level,
      mode,
      isEndless,
      groups,
      rows,
      score: 0,
      currentGroup: 0
    }, () => {
      this.loadGroup()
      this.startTimer()
    })
  },

  // 加载一组题目
  loadGroup() {
    const group = this.data.groups[this.data.currentGroup]
    this.setData({
      currentGrid: group.grid,
      wordIds: group.word_ids,
      selected: [],
      matchedIds: []
    })
  },

  // 点击单词处理
  handleClick(e) {
    const id = parseInt(e.currentTarget.dataset.id)
    if (this.data.matchedIds.includes(id) || this.data.selected.includes(id)) return

    const selected = [...this.data.selected, id]
    this.setData({ selected })

    if (selected.length === 2) {
      const result = checkPair(this.data.wordIds, selected[0], selected[1])
      if (result) {
        this.setData({
          score: this.data.score + 1,
          matchedIds: [...this.data.matchedIds, ...selected],
          selected: []
        })
      } else {
        // 错误闪红
        this.setData({ wrong: selected })
        setTimeout(() => {
          this.setData({ wrong: [], selected: [] })
        }, 500)
      }
    }

    // 判断是否完成
    if (this.data.matchedIds.length + 2 === this.data.rows * 2) {
      setTimeout(this.nextGroup, 500)
    }
  },

  // 显示样式
  getClass(item) {
    const id = item.id
    if (this.data.matchedIds.includes(id)) return 'matched'
    if (this.data.selected.includes(id)) return 'selected'
    if (this.data.wrong && this.data.wrong.includes(id)) return 'wrong'
    return ''
  },

  // 下一组题
  nextGroup() {
    if (!this.data.isEndless && this.data.currentGroup >= 5) {
      this.endGame()
      return
    }

    if (this.data.currentGroup + 1 >= this.data.groups.length) {
      // endless模式自动生成更多题
      const { grid, word_ids } = generateGame(this.data.level, true).groups[0]
      this.setData({
        groups: [...this.data.groups, { grid, word_ids }]
      })
    }

    this.setData({
      currentGroup: this.data.currentGroup + 1
    }, this.loadGroup)
  },

  // 计时器控制
  startTimer() {
    if (this.data.isEndless) {
      this.setData({ timeLeft: 0 })
      timer = setInterval(() => {
        this.setData({ timeLeft: this.data.timeLeft + 1, timeDisplay: `${this.data.timeLeft} 秒` })
      }, 1000)
    } else {
      this.setData({ timeLeft: parseInt(this.data.mode) })
      timer = setInterval(() => {
        const newTime = this.data.timeLeft - 1
        this.setData({ timeLeft: newTime, timeDisplay: `剩余 ${newTime} 秒` })
        if (newTime <= 0) this.endGame()
      }, 1000)
    }
  },

  stopTimer() {
    if (timer) clearInterval(timer)
    timer = null
  },

  // 游戏结束
  endGame() {
    this.stopTimer()
    wx.navigateTo({
      url: `/pages/result/result?score=${this.data.score}&mode=${this.data.mode}&level=${this.data.level}`
    })
  },

  goBack() {
    this.stopTimer()
    wx.navigateBack()
  }
})
