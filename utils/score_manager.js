// 分数最多保留的条数
const MAX_RECORDS = 5

// 保存一条新成绩
function saveScore({ level, time_mode, score }) {
  const key = 'scores'
  const timestamp = Date.now()

  // 读取原有记录（可能为 null）
  let scores = wx.getStorageSync(key) || []

  // 新纪录插入
  scores.push({ level, time_mode, score, timestamp })

  // 排序并保留最多 N 条
  scores = scores.sort((a, b) => b.timestamp - a.timestamp).slice(0, MAX_RECORDS)

  wx.setStorageSync(key, scores)
}

// 读取排行榜
function getScores() {
  return wx.getStorageSync('scores') || []
}

// 清空记录（可选，测试用）
function clearScores() {
  wx.removeStorageSync('scores')
}

export { saveScore, getScores, clearScores }
