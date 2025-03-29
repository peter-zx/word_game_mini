import { addUserWord } from '../../utils/word_manager'

Page({
  data: {
    inputText: ''
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value })
  },

  submitWords() {
    const lines = this.data.inputText.trim().split('\n')
    let successCount = 0
    lines.forEach(line => {
      const [english, chinese, difficulty] = line.split(',').map(s => s.trim())
      if (english && chinese && difficulty) {
        addUserWord({ english, chinese, difficulty: difficulty.toUpperCase() })
        successCount++
      }
    })

    wx.showToast({
      title: `添加成功 ${successCount} 个词`,
      icon: 'success'
    })

    this.setData({ inputText: '' })
  },

  goHome() {
    wx.navigateBack()
  }
})
