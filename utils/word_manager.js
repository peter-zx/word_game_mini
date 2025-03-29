// 导入默认词库
import defaultWords from '../data/default_words'

// 本地缓存的 key
const USER_WORDS_KEY = 'user_words'

// 获取默认词库
function getDefaultWords() {
  return defaultWords
}

// 获取用户添加的词库（本地缓存）
function getUserWords() {
  return wx.getStorageSync(USER_WORDS_KEY) || []
}

// 添加一个新词（写入本地缓存）
function addUserWord({ english, chinese, difficulty }) {
  if (!english || !chinese || !difficulty) return

  const current = getUserWords()
  current.push({ english, chinese, difficulty })
  wx.setStorageSync(USER_WORDS_KEY, current)
}

// 获取所有词（默认 + 用户）
function getAllWords() {
  return getDefaultWords().concat(getUserWords())
}

// 按难度筛选词（L1~L6）
function getWordsByLevel(level) {
  return getAllWords().filter(w => w.difficulty.toLowerCase() === level.toLowerCase())
}

// 清除用户自定义词（调试用）
function clearUserWords() {
  wx.removeStorageSync(USER_WORDS_KEY)
}

export {
  getDefaultWords,
  getUserWords,
  addUserWord,
  getAllWords,
  getWordsByLevel,
  clearUserWords
}
