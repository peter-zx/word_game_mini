// 导入默认词库
import defaultWords from '../data/default_words'

// 每个难度等级对应的配对数量（行数）
const levelRowMap = {
  lv1: 4,
  lv2: 5,
  lv3: 6,
  lv4: 7,
  lv5: 8,
  lv6: 9
}

// 根据难度返回配对组数
function getRowCount(level) {
  return levelRowMap[level.toLowerCase()] || 4
}

// 从词库中筛选指定难度的词（支持多个等级）
function filterWordsByLevel(level) {
  return defaultWords.filter(word => word.difficulty.toLowerCase() === level.toLowerCase())
}

// 生成一个关卡（单组题目）
function generateGroup(words, rows) {
  const pairCount = Math.min(rows, words.length)

  // 如果单词不够，重复补充（防止崩溃）
  let availableWords = words
  while (availableWords.length < rows) {
    availableWords = availableWords.concat(words)
  }

  // 随机选出 pairCount 个单词
  const selected = shuffle(availableWords).slice(0, pairCount)

  const gameItems = []
  selected.forEach(word => {
    gameItems.push({ type: 'english', value: word.english, pair: word.chinese })
    gameItems.push({ type: 'chinese', value: word.chinese, pair: word.english })
  })

  const shuffled = shuffle(gameItems)
  const word_ids = {}
  const grid = shuffled.map((item, index) => {
    word_ids[index] = item
    return { id: index, value: item.value }
  })

  return { grid, word_ids }
}

// 生成完整关卡（包含 6 组或 1 组）
function generateGame(level, isEndless = false) {
  const rows = getRowCount(level)
  const words = filterWordsByLevel(level)

  const groupCount = isEndless ? 1 : 6
  const groups = []

  for (let i = 0; i < groupCount; i++) {
    const group = generateGroup(words, rows)
    groups.push(group)
  }

  return { groups, rows }
}

// 校验两个单词是否匹配（通过前端点击触发）
function checkPair(word_ids, id1, id2) {
  const w1 = word_ids[id1]
  const w2 = word_ids[id2]

  if (!w1 || !w2) return false

  return w1.value === w2.pair && w2.value === w1.pair
}

// 洗牌函数（Fisher-Yates Shuffle）
function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// 导出模块
export {
  generateGame,
  generateGroup,
  checkPair,
  getRowCount
}
