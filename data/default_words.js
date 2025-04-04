const defaultWords = [
  { english: "wagon", chinese: "马车", difficulty: "L5" },
  { english: "apple", chinese: "苹果", difficulty: "L1" },
  { english: "banana", chinese: "香蕉", difficulty: "L1" },
  { english: "cat", chinese: "猫", difficulty: "L2" },
  { english: "dog", chinese: "狗", difficulty: "L2" },
  { english: "ant", chinese: "蚂蚁", difficulty: "L1" },
  { english: "bear", chinese: "熊", difficulty: "L1" },
  { english: "camel", chinese: "骆驼", difficulty: "L2" },
  { english: "deer", chinese: "鹿", difficulty: "L2" },
  { english: "eagle", chinese: "鹰", difficulty: "L3" },
  { english: "fox", chinese: "狐狸", difficulty: "L3" },
  { english: "goat", chinese: "山羊", difficulty: "L4" },
  { english: "hen", chinese: "母鸡", difficulty: "L4" },
  { english: "igloo", chinese: "冰屋", difficulty: "L5" },
  { english: "jellyfish", chinese: "水母", difficulty: "L5" },
  { english: "kangaroo", chinese: "袋鼠", difficulty: "L6" },
  { english: "leopard", chinese: "豹", difficulty: "L6" },
  { english: "nest", chinese: "巢", difficulty: "L1" },
  { english: "owl", chinese: "猫头鹰", difficulty: "L2" },
  { english: "penguin", chinese: "企鹅", difficulty: "L3" },
  { english: "rabbit", chinese: "兔子", difficulty: "L4" },
  { english: "snake", chinese: "蛇", difficulty: "L5" },
  { english: "turtle", chinese: "乌龟", difficulty: "L6" },
  { english: "umbrella", chinese: "雨伞", difficulty: "L1" },
  { english: "violin", chinese: "小提琴", difficulty: "L2" },
  { english: "whale", chinese: "鲸鱼", difficulty: "L3" },
  { english: "xylophone", chinese: "木琴", difficulty: "L4" },
  { english: "yak", chinese: "牦牛", difficulty: "L5" },
  { english: "zebra", chinese: "斑马", difficulty: "L6" },
  { english: "airplane", chinese: "飞机", difficulty: "L1" },
  { english: "balloon", chinese: "气球", difficulty: "L1" },
  { english: "candle", chinese: "蜡烛", difficulty: "L2" },
  { english: "desk", chinese: "书桌", difficulty: "L2" },
  { english: "envelope", chinese: "信封", difficulty: "L3" },
  { english: "fan", chinese: "扇子", difficulty: "L3" },
  { english: "guitar", chinese: "吉他", difficulty: "L4" },
  { english: "hat", chinese: "帽子", difficulty: "L4" },
  { english: "island", chinese: "岛屿", difficulty: "L5" },
  { english: "jacket", chinese: "夹克衫", difficulty: "L5" },
  { english: "kite", chinese: "风筝", difficulty: "L6" },
  { english: "lamp", chinese: "灯", difficulty: "L6" },
  { english: "mountain", chinese: "山", difficulty: "L1" },
  { english: "ocean", chinese: "海洋", difficulty: "L2" },
  { english: "pencil", chinese: "铅笔", difficulty: "L3" },
  { english: "quill", chinese: "羽毛笔", difficulty: "L4" },
  { english: "rocket", chinese: "火箭", difficulty: "L5" },
  { english: "star", chinese: "星星", difficulty: "L6" },
  { english: "train", chinese: "火车", difficulty: "L1" },
  { english: "unicorn", chinese: "独角兽", difficulty: "L2" },
  { english: "vase", chinese: "花瓶", difficulty: "L3" },
  { english: "wheel", chinese: "轮子", difficulty: "L4" },
  { english: "xylophone", chinese: "木琴", difficulty: "L5" },
  { english: "yacht", chinese: "游艇", difficulty: "L6" },
  { english: "zoo", chinese: "动物园", difficulty: "L1" },
  { english: "arm", chinese: "手臂", difficulty: "L1" },
  { english: "book", chinese: "书", difficulty: "L1" },
  { english: "chair", chinese: "椅子", difficulty: "L2" },
  { english: "door", chinese: "门", difficulty: "L2" },
  { english: "eraser", chinese: "橡皮", difficulty: "L3" },
  { english: "fork", chinese: "叉子", difficulty: "L3" },
  { english: "glasses", chinese: "眼镜", difficulty: "L4" },
  { english: "hammer", chinese: "锤子", difficulty: "L4" },
  { english: "ink", chinese: "墨水", difficulty: "L5" },
  { english: "jar", chinese: "罐子", difficulty: "L5" },
  { english: "key", chinese: "钥匙", difficulty: "L6" },
  { english: "lock", chinese: "锁", difficulty: "L6" },
  { english: "map", chinese: "地图", difficulty: "L1" },
  { english: "nose", chinese: "鼻子", difficulty: "L2" },
  { english: "panda", chinese: "熊猫", difficulty: "L3" },
  { english: "queen", chinese: "女王", difficulty: "L4" },
  { english: "ring", chinese: "戒指", difficulty: "L5" },
  { english: "ship", chinese: "船", difficulty: "L6" },
  { english: "table", chinese: "桌子", difficulty: "L1" },
  { english: "ugly", chinese: "丑陋的", difficulty: "L2" },
  { english: "vest", chinese: "背心", difficulty: "L3" },
  { english: "window", chinese: "窗户", difficulty: "L4" },
  { english: "xylophone", chinese: "木琴", difficulty: "L5" },
  { english: "yarn", chinese: "纱线", difficulty: "L6" },
  { english: "zucchini", chinese: "西葫芦", difficulty: "L1" },
  { english: "ax", chinese: "斧子", difficulty: "L1" },
  { english: "brush", chinese: "刷子", difficulty: "L2" },
  { english: "comb", chinese: "梳子", difficulty: "L2" },
  { english: "drum", chinese: "鼓", difficulty: "L3" },
  { english: "eggplant", chinese: "茄子", difficulty: "L3" },
  { english: "fig", chinese: "无花果", difficulty: "L4" },
  { english: "glove", chinese: "手套", difficulty: "L4" },
  { english: "herb", chinese: "香草", difficulty: "L5" },
  { english: "insect", chinese: "昆虫", difficulty: "L5" },
  { english: "jewel", chinese: "宝石", difficulty: "L6" },
  { english: "knife", chinese: "刀", difficulty: "L6" },
  { english: "leaf", chinese: "叶子", difficulty: "L1" },
  { english: "monkey", chinese: "猴子", difficulty: "L2" },
  { english: "onion", chinese: "洋葱", difficulty: "L3" },
  { english: "peach", chinese: "桃子", difficulty: "L4" },
  { english: "quilt", chinese: "被子", difficulty: "L5" },
  { english: "rope", chinese: "绳子", difficulty: "L6" },
  { english: "sock", chinese: "袜子", difficulty: "L1" },
  { english: "towel", chinese: "毛巾", difficulty: "L2" },
  { english: "underwear", chinese: "内衣", difficulty: "L3" },
  { english: "vulture", chinese: "秃鹫", difficulty: "L4" },
  { english: "wagon", chinese: "马车", difficulty: "L5" },
  { english: "xylophone", chinese: "木琴", difficulty: "L6" },
  { english: "yogurt", chinese: "酸奶", difficulty: "L1" },
  { english: "zebra mussel", chinese: "斑马贻贝", difficulty: "L2" }
]

export default defaultWords
