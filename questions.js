const NEW_CONCEPT_QUESTIONS = {
  major1: {
    title: '第一大关',
    lessons: 'Lesson 1-6',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 1-2',
      questions: [
        { type: 'spelling', question: '原谅', answer: 'excuse', hint: 'ex___e', difficulty: 1, chinese: '原谅' },
        { type: 'spelling', question: '我', answer: 'I', hint: '_', difficulty: 1, chinese: '我' },
        { type: 'spelling', question: '是的', answer: 'yes', hint: 'y__', difficulty: 1, chinese: '是的' },
        { type: 'spelling', question: '你的', answer: 'your', hint: 'y___', difficulty: 1, chinese: '你的' },
        { type: 'spelling', question: '手提包', answer: 'handbag', hint: 'h______', difficulty: 1, chinese: '手提包' },
        { type: 'spelling', question: '钢笔', answer: 'pen', hint: 'p__', difficulty: 1, chinese: '钢笔' },
        { type: 'spelling', question: '铅笔', answer: 'pencil', hint: 'p_____', difficulty: 1, chinese: '铅笔' },
        { type: 'spelling', question: '书', answer: 'book', hint: 'b___', difficulty: 1, chinese: '书' },
        { type: 'grammar_fill', question: 'Is this ___ handbag?', answer: 'your', hint: '你的', difficulty: 1, chinese: '这是你的手提包吗？' },
        { type: 'grammar_fill', question: '___ this your pen?', answer: 'Is', hint: 'be动词', difficulty: 1, chinese: '这是你的钢笔吗？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 3-4',
      questions: [
        { type: 'spelling', question: '船', answer: 'ship', hint: 's___', difficulty: 1, chinese: '船' },
        { type: 'spelling', question: '帽子', answer: 'hat', hint: 'h__', difficulty: 1, chinese: '帽子' },
        { type: 'spelling', question: '鱼', answer: 'fish', hint: 'f___', difficulty: 1, chinese: '鱼' },
        { type: 'spelling', question: '连衣裙', answer: 'dress', hint: 'd____', difficulty: 1, chinese: '连衣裙' },
        { type: 'spelling', question: '裙子', answer: 'skirt', hint: 's____', difficulty: 1, chinese: '裙子' },
        { type: 'grammar_fill', question: 'That is ___ English ship.', answer: 'an', hint: '一个', difficulty: 1, chinese: '那是一艘英国船。' },
        { type: 'grammar_fill', question: 'Here is ___ hat for you.', answer: 'a', hint: '一顶', difficulty: 1, chinese: '这里有一顶帽子给你。' },
        { type: 'grammar_fill', question: 'Is this ___ fish?', answer: 'a', hint: '一', difficulty: 1, chinese: '这是鱼吗？' },
        { type: 'grammar_choice', question: 'Is this ___ fish?', answer: 'B', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '这是鱼吗？' },
        { type: 'grammar_choice', question: 'That is ___ skirt.', answer: 'A', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '那是一条裙子。' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 5-6',
      questions: [
        { type: 'spelling', question: '学生', answer: 'student', hint: 's______', difficulty: 1, chinese: '学生' },
        { type: 'spelling', question: '德国人', answer: 'German', hint: 'G______', difficulty: 1, chinese: '德国人' },
        { type: 'spelling', question: '日本人', answer: 'Japanese', hint: 'J_______', difficulty: 1, chinese: '日本人' },
        { type: 'spelling', question: '韩国人', answer: 'Korean', hint: 'K______', difficulty: 1, chinese: '韩国人' },
        { type: 'spelling', question: '工程师', answer: 'engineer', hint: 'e_______', difficulty: 1, chinese: '工程师' },
        { type: 'spelling', question: '教师', answer: 'teacher', hint: 't______', difficulty: 1, chinese: '教师' },
        { type: 'grammar_fill', question: '___ are students.', answer: 'They', hint: '他们', difficulty: 1, chinese: '他们是学生。' },
        { type: 'grammar_fill', question: 'What ___? It is a book.', answer: 'is this', hint: '这是什么', difficulty: 1, chinese: '这是什么？是一本书。' },
        { type: 'grammar_choice', question: 'He is ___ engineer.', answer: 'B', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '他是工程师。' },
        { type: 'grammar_choice', question: 'She is ___ teacher.', answer: 'A', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '她是教师。' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 1-6 综合',
      questions: [
        { type: 'spelling', question: '原谅', answer: 'excuse', hint: 'ex___e', difficulty: 1, chinese: '原谅' },
        { type: 'spelling', question: '手提包', answer: 'handbag', hint: 'h______', difficulty: 1, chinese: '手提包' },
        { type: 'spelling', question: '学生', answer: 'student', hint: 's______', difficulty: 1, chinese: '学生' },
        { type: 'spelling', question: '工程师', answer: 'engineer', hint: 'e_______', difficulty: 1, chinese: '工程师' },
        { type: 'spelling', question: '船', answer: 'ship', hint: 's___', difficulty: 1, chinese: '船' },
        { type: 'grammar_fill', question: 'Is this ___ handbag?', answer: 'your', hint: '你的', difficulty: 1, chinese: '这是你的手提包吗？' },
        { type: 'grammar_fill', question: 'That is ___ English ship.', answer: 'an', hint: '一个', difficulty: 1, chinese: '那是一艘英国船。' },
        { type: 'grammar_fill', question: '___ are students.', answer: 'They', hint: '他们', difficulty: 1, chinese: '他们是学生。' },
        { type: 'grammar_choice', question: 'He is ___ engineer.', answer: 'B', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '他是工程师。' },
        { type: 'grammar_choice', question: 'Is this ___ fish?', answer: 'B', options: ['a', 'an', 'the', '/'], difficulty: 1, chinese: '这是鱼吗？' },
      ]
    }
  },
  major2: {
    title: '第二大关',
    lessons: 'Lesson 7-12',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 7-8',
      questions: [
        { type: 'spelling', question: '热的', answer: 'hot', hint: 'h__', difficulty: 1, chinese: '热的' },
        { type: 'spelling', question: '冷的', answer: 'cold', hint: 'c___', difficulty: 1, chinese: '冷的' },
        { type: 'spelling', question: '老的', answer: 'old', hint: 'o__', difficulty: 1, chinese: '老的' },
        { type: 'spelling', question: '年轻的', answer: 'young', hint: 'y___', difficulty: 1, chinese: '年轻的' },
        { type: 'spelling', question: '忙碌的', answer: 'busy', hint: 'b___', difficulty: 1, chinese: '忙碌的' },
        { type: 'spelling', question: '懒情的', answer: 'lazy', hint: 'l___', difficulty: 1, chinese: '懒情的' },
        { type: 'grammar_fill', question: 'The soup is ___.', answer: 'hot', hint: '热', difficulty: 1, chinese: '汤是热的。' },
        { type: 'grammar_fill', question: 'The ice is ___.', answer: 'cold', hint: '冷', difficulty: 1, chinese: '冰是冷的。' },
        { type: 'grammar_fill', question: 'My grandmother is ___.', answer: 'old', hint: '老', difficulty: 1, chinese: '我的奶奶年纪大了。' },
        { type: 'grammar_choice', question: 'The coffee is ___.', answer: 'A', options: ['hot', 'cold', 'old', 'young'], difficulty: 1, chinese: '咖啡是热的。' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 9-10',
      questions: [
        { type: 'spelling', question: '清洁工', answer: 'cleaner', hint: 'c_____', difficulty: 1, chinese: '清洁工' },
        { type: 'spelling', question: '经理', answer: 'manager', hint: 'm_____', difficulty: 1, chinese: '经理' },
        { type: 'spelling', question: '秘书', answer: 'secretary', hint: 's______', difficulty: 1, chinese: '秘书' },
        { type: 'spelling', question: '商人', answer: 'businessman', hint: 'b________', difficulty: 1, chinese: '商人' },
        { type: 'spelling', question: '销售员', answer: 'sales rep', hint: 's______', difficulty: 1, chinese: '销售员' },
        { type: 'spelling', question: '员工', answer: 'employee', hint: 'e_______', difficulty: 1, chinese: '员工' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'cleaner', hint: '清洁工', difficulty: 1, chinese: '她是清洁工。' },
        { type: 'grammar_fill', question: 'He is the ___.', answer: 'manager', hint: '经理', difficulty: 1, chinese: '他是经理。' },
        { type: 'grammar_fill', question: 'I am an ___.', answer: 'employee', hint: '员工', difficulty: 1, chinese: '我是员工。' },
        { type: 'grammar_choice', question: 'Who is the boss?', answer: 'A', options: ['manager', 'cleaner', 'secretary', 'employee'], difficulty: 1, chinese: '谁是老板？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 11-12',
      questions: [
        { type: 'spelling', question: '高的', answer: 'tall', hint: 't___', difficulty: 1, chinese: '高的' },
        { type: 'spelling', question: '矮的', answer: 'short', hint: 's___', difficulty: 1, chinese: '矮的' },
        { type: 'spelling', question: '长的', answer: 'long', hint: 'l___', difficulty: 1, chinese: '长的' },
        { type: 'spelling', question: '短的', answer: 'short', hint: 's___', difficulty: 1, chinese: '短的' },
        { type: 'spelling', question: '大的', answer: 'big', hint: 'b__', difficulty: 1, chinese: '大的' },
        { type: 'spelling', question: '小的', answer: 'small', hint: 's___', difficulty: 1, chinese: '小的' },
        { type: 'grammar_fill', question: 'The building is ___.', answer: 'tall', hint: '高', difficulty: 1, chinese: '建筑很高。' },
        { type: 'grammar_fill', question: 'The box is ___.', answer: 'small', hint: '小', difficulty: 1, chinese: '盒子很小。' },
        { type: 'grammar_fill', question: 'My hair is ___.', answer: 'long', hint: '长', difficulty: 1, chinese: '我的头发很长。' },
        { type: 'grammar_choice', question: 'The elephant is ___.', answer: 'A', options: ['big', 'small', 'short', 'tall'], difficulty: 1, chinese: '大象很大。' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 7-12 综合',
      questions: [
        { type: 'spelling', question: '热的', answer: 'hot', hint: 'h__', difficulty: 1, chinese: '热的' },
        { type: 'spelling', question: '冷的', answer: 'cold', hint: 'c___', difficulty: 1, chinese: '冷的' },
        { type: 'spelling', question: '经理', answer: 'manager', hint: 'm_____', difficulty: 1, chinese: '经理' },
        { type: 'spelling', question: '高的', answer: 'tall', hint: 't___', difficulty: 1, chinese: '高的' },
        { type: 'spelling', question: '大的', answer: 'big', hint: 'b__', difficulty: 1, chinese: '大的' },
        { type: 'grammar_fill', question: 'The soup is ___.', answer: 'hot', hint: '热', difficulty: 1, chinese: '汤是热的。' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'cleaner', hint: '清洁工', difficulty: 1, chinese: '她是清洁工。' },
        { type: 'grammar_fill', question: 'The building is ___.', answer: 'tall', hint: '高', difficulty: 1, chinese: '建筑很高。' },
        { type: 'grammar_choice', question: 'Who is the boss?', answer: 'A', options: ['manager', 'cleaner', 'secretary', 'employee'], difficulty: 1, chinese: '谁是老板？' },
        { type: 'grammar_choice', question: 'The coffee is ___.', answer: 'A', options: ['hot', 'cold', 'old', 'young'], difficulty: 1, chinese: '咖啡是热的。' },
      ]
    }
  },
  major3: {
    title: '第三大关',
    lessons: 'Lesson 13-18',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 13-14',
      questions: [
        { type: 'spelling', question: '奶奶', answer: 'grandma', hint: 'g______', difficulty: 1, chinese: '奶奶' },
        { type: 'spelling', question: '爷爷', answer: 'grandpa', hint: 'g______', difficulty: 1, chinese: '爷爷' },
        { type: 'spelling', question: '阿姨', answer: 'aunt', hint: 'a___', difficulty: 1, chinese: '阿姨' },
        { type: 'spelling', question: '叔叔', answer: 'uncle', hint: 'u____', difficulty: 1, chinese: '叔叔' },
        { type: 'spelling', question: '堂兄弟', answer: 'cousin', hint: 'c_____', difficulty: 1, chinese: '堂兄弟' },
        { type: 'spelling', question: '婴儿', answer: 'baby', hint: 'b___', difficulty: 1, chinese: '婴儿' },
        { type: 'grammar_fill', question: 'This is my ___.', answer: 'grandma', hint: '奶奶', difficulty: 1, chinese: '这是我的奶奶。' },
        { type: 'grammar_fill', question: '___ is my uncle.', answer: 'He', hint: '他', difficulty: 1, chinese: '他是我的叔叔。' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'baby', hint: '婴儿', difficulty: 1, chinese: '她是一个婴儿。' },
        { type: 'grammar_fill', question: 'That is ___ cousin.', answer: 'my', hint: '我的', difficulty: 1, chinese: '那是我的堂兄弟。' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 15-16',
      questions: [
        { type: 'spelling', question: '照片', answer: 'photo', hint: 'p____', difficulty: 1, chinese: '照片' },
        { type: 'spelling', question: '墙壁', answer: 'wall', hint: 'w___', difficulty: 1, chinese: '墙壁' },
        { type: 'spelling', question: '架子', answer: 'shelf', hint: 's____', difficulty: 1, chinese: '架子' },
        { type: 'spelling', question: '衣柜', answer: 'wardrobe', hint: 'w______', difficulty: 1, chinese: '衣柜' },
        { type: 'spelling', question: '地板', answer: 'floor', hint: 'f___', difficulty: 1, chinese: '地板' },
        { type: 'spelling', question: '厨房', answer: 'kitchen', hint: 'k______', difficulty: 1, chinese: '厨房' },
        { type: 'grammar_fill', question: 'The photo is on the ___.', answer: 'wall', hint: '墙', difficulty: 1, chinese: '照片在墙上。' },
        { type: 'grammar_fill', question: 'The books are on the ___.', answer: 'shelf', hint: '架子', difficulty: 1, chinese: '书在架子上。' },
        { type: 'grammar_fill', question: 'The ___ is in the kitchen.', answer: 'floor', hint: '地板', difficulty: 1, chinese: '地板在厨房里。' },
        { type: 'grammar_choice', question: 'The photo is on the ___.', answer: 'A', options: ['wall', 'floor', 'desk', 'chair'], difficulty: 1, chinese: '照片在哪里？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 17-18',
      questions: [
        { type: 'spelling', question: '花园', answer: 'garden', hint: 'g_____', difficulty: 1, chinese: '花园' },
        { type: 'spelling', question: '树', answer: 'tree', hint: 't___', difficulty: 1, chinese: '树' },
        { type: 'spelling', question: '草', answer: 'grass', hint: 'g____', difficulty: 1, chinese: '草' },
        { type: 'spelling', question: '花', answer: 'flower', hint: 'f_____', difficulty: 1, chinese: '花' },
        { type: 'spelling', question: '狗', answer: 'dog', hint: 'd__', difficulty: 1, chinese: '狗' },
        { type: 'spelling', question: '猫', answer: 'cat', hint: 'c__', difficulty: 1, chinese: '猫' },
        { type: 'grammar_fill', question: 'The ___ is in the garden.', answer: 'tree', hint: '树', difficulty: 1, chinese: '树在花园里。' },
        { type: 'grammar_fill', question: 'The ___ are green.', answer: 'grass', hint: '草', difficulty: 1, chinese: '草是绿色的。' },
        { type: 'grammar_fill', question: 'The ___ is beautiful.', answer: 'flower', hint: '花', difficulty: 1, chinese: '花很漂亮。' },
        { type: 'grammar_choice', question: 'The dog is in the ___.', answer: 'A', options: ['garden', 'kitchen', 'bedroom', 'bathroom'], difficulty: 1, chinese: '狗在哪里？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 13-18 综合',
      questions: [
        { type: 'spelling', question: '奶奶', answer: 'grandma', hint: 'g______', difficulty: 1, chinese: '奶奶' },
        { type: 'spelling', question: '爷爷', answer: 'grandpa', hint: 'g______', difficulty: 1, chinese: '爷爷' },
        { type: 'spelling', question: '照片', answer: 'photo', hint: 'p____', difficulty: 1, chinese: '照片' },
        { type: 'spelling', question: '花园', answer: 'garden', hint: 'g_____', difficulty: 1, chinese: '花园' },
        { type: 'spelling', question: '狗', answer: 'dog', hint: 'd__', difficulty: 1, chinese: '狗' },
        { type: 'grammar_fill', question: 'This is my ___.', answer: 'grandma', hint: '奶奶', difficulty: 1, chinese: '这是我的奶奶。' },
        { type: 'grammar_fill', question: 'The photo is on the ___.', answer: 'wall', hint: '墙', difficulty: 1, chinese: '照片在墙上。' },
        { type: 'grammar_fill', question: 'The ___ is in the garden.', answer: 'tree', hint: '树', difficulty: 1, chinese: '树在花园里。' },
        { type: 'grammar_choice', question: 'He is my ___.', answer: 'A', options: ['uncle', 'aunt', 'sister', 'brother'], difficulty: 1, chinese: '他是谁？' },
        { type: 'grammar_choice', question: 'The ___ is in the kitchen.', answer: 'B', options: ['garden', 'floor', 'wall', 'tree'], difficulty: 1, chinese: '地板在哪里？' },
      ]
    }
  },
  major4: {
    title: '第四大关',
    lessons: 'Lesson 19-24',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 19-20',
      questions: [
        { type: 'spelling', question: '今天', answer: 'today', hint: 't___', difficulty: 1, chinese: '今天' },
        { type: 'spelling', question: '明天', answer: 'tomorrow', hint: 't______', difficulty: 1, chinese: '明天' },
        { type: 'spelling', question: '昨天', answer: 'yesterday', hint: 'y_______', difficulty: 1, chinese: '昨天' },
        { type: 'spelling', question: '星期', answer: 'week', hint: 'w___', difficulty: 1, chinese: '星期' },
        { type: 'spelling', question: '工作', answer: 'work', hint: 'w___', difficulty: 1, chinese: '工作' },
        { type: 'spelling', question: '家庭作业', answer: 'homework', hint: 'h______', difficulty: 1, chinese: '家庭作业' },
        { type: 'grammar_fill', question: '___ is Monday.', answer: 'Today', hint: '今天', difficulty: 1, chinese: '今天是星期一。' },
        { type: 'grammar_fill', question: '___ is tomorrow.', answer: 'It', hint: '它', difficulty: 1, chinese: '明天是星期二。' },
        { type: 'grammar_fill', question: '___ was yesterday.', answer: 'It', hint: '昨天', difficulty: 1, chinese: '昨天是星期日。' },
        { type: 'grammar_choice', question: 'What day is ___?', answer: 'A', options: ['today', 'tomorrow', 'yesterday', 'now'], difficulty: 1, chinese: '今天是星期几？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 21-22',
      questions: [
        { type: 'spelling', question: '早餐', answer: 'breakfast', hint: 'b_______', difficulty: 1, chinese: '早餐' },
        { type: 'spelling', question: '午餐', answer: 'lunch', hint: 'l___', difficulty: 1, chinese: '午餐' },
        { type: 'spelling', question: '晚餐', answer: 'dinner', hint: 'd____', difficulty: 1, chinese: '晚餐' },
        { type: 'spelling', question: '蛋', answer: 'egg', hint: 'e__', difficulty: 1, chinese: '蛋' },
        { type: 'spelling', question: '面包', answer: 'bread', hint: 'b____', difficulty: 1, chinese: '面包' },
        { type: 'spelling', question: '牛奶', answer: 'milk', hint: 'm___', difficulty: 1, chinese: '牛奶' },
        { type: 'grammar_fill', question: 'I have ___ at 8 oclock.', answer: 'breakfast', hint: '早餐', difficulty: 1, chinese: '我8点吃早餐。' },
        { type: 'grammar_fill', question: 'We have ___ at 12 oclock.', answer: 'lunch', hint: '午餐', difficulty: 1, chinese: '我们12点吃午餐。' },
        { type: 'grammar_fill', question: 'They have ___ at 7 oclock.', answer: 'dinner', hint: '晚餐', difficulty: 1, chinese: '他们7点吃晚餐。' },
        { type: 'grammar_choice', question: 'I want some ___ for breakfast.', answer: 'A', options: ['eggs', 'milk', 'bread', 'all'], difficulty: 1, chinese: '早餐我想吃鸡蛋。' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 23-24',
      questions: [
        { type: 'spelling', question: '电影', answer: 'film', hint: 'f___', difficulty: 1, chinese: '电影' },
        { type: 'spelling', question: '剧院', answer: 'theatre', hint: 't_____', difficulty: 1, chinese: '剧院' },
        { type: 'spelling', question: '酒吧', answer: 'bar', hint: 'b__', difficulty: 1, chinese: '酒吧' },
        { type: 'spelling', question: '餐馆', answer: 'restaurant', hint: 'r________', difficulty: 1, chinese: '餐馆' },
        { type: 'spelling', question: '银行', answer: 'bank', hint: 'b___', difficulty: 1, chinese: '银行' },
        { type: 'spelling', question: '商店', answer: 'shop', hint: 's___', difficulty: 1, chinese: '商店' },
        { type: 'grammar_fill', question: 'Lets go to the ___.', answer: 'theatre', hint: '剧院', difficulty: 1, chinese: '让我们去剧院。' },
        { type: 'grammar_fill', question: 'I want to go to the ___.', answer: 'restaurant', hint: '餐馆', difficulty: 1, chinese: '我想去餐馆。' },
        { type: 'grammar_fill', question: 'The ___ is closed.', answer: 'bank', hint: '银行', difficulty: 1, chinese: '银行关门了。' },
        { type: 'grammar_choice', question: 'Lets watch a ___.', answer: 'A', options: ['film', 'theatre', 'bank', 'shop'], difficulty: 1, chinese: '让我们看电影。' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 19-24 综合',
      questions: [
        { type: 'spelling', question: '今天', answer: 'today', hint: 't___', difficulty: 1, chinese: '今天' },
        { type: 'spelling', question: '明天', answer: 'tomorrow', hint: 't______', difficulty: 1, chinese: '明天' },
        { type: 'spelling', question: '早餐', answer: 'breakfast', hint: 'b_______', difficulty: 1, chinese: '早餐' },
        { type: 'spelling', question: '电影', answer: 'film', hint: 'f___', difficulty: 1, chinese: '电影' },
        { type: 'spelling', question: '餐馆', answer: 'restaurant', hint: 'r________', difficulty: 1, chinese: '餐馆' },
        { type: 'grammar_fill', question: '___ is Monday.', answer: 'Today', hint: '今天', difficulty: 1, chinese: '今天是星期一。' },
        { type: 'grammar_fill', question: 'I have ___ at 8 oclock.', answer: 'breakfast', hint: '早餐', difficulty: 1, chinese: '我8点吃早餐。' },
        { type: 'grammar_fill', question: 'Lets go to the ___.', answer: 'theatre', hint: '剧院', difficulty: 1, chinese: '让我们去剧院。' },
        { type: 'grammar_choice', question: 'What day is ___?', answer: 'A', options: ['today', 'tomorrow', 'yesterday', 'now'], difficulty: 1, chinese: '今天是星期几？' },
        { type: 'grammar_choice', question: 'I want to go to the ___.', answer: 'B', options: ['bank', 'restaurant', 'shop', 'bar'], difficulty: 1, chinese: '我想去餐馆。' },
      ]
    }
  },
  major5: {
    title: '第五大关',
    lessons: 'Lesson 25-30',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 25-26',
      questions: [
        { type: 'spelling', question: '夏天', answer: 'summer', hint: 's_____', difficulty: 1, chinese: '夏天' },
        { type: 'spelling', question: '冬天', answer: 'winter', hint: 'w_____', difficulty: 1, chinese: '冬天' },
        { type: 'spelling', question: '春天', answer: 'spring', hint: 's_____', difficulty: 1, chinese: '春天' },
        { type: 'spelling', question: '秋天', answer: 'autumn', hint: 'a____', difficulty: 1, chinese: '秋天' },
        { type: 'spelling', question: '天气', answer: 'weather', hint: 'w______', difficulty: 1, chinese: '天气' },
        { type: 'spelling', question: '温暖的', answer: 'warm', hint: 'w___', difficulty: 1, chinese: '温暖的' },
        { type: 'grammar_fill', question: '___ is hot in summer.', answer: 'It', hint: '它', difficulty: 1, chinese: '夏天天气很热。' },
        { type: 'grammar_fill', question: '___ is cold in winter.', answer: 'It', hint: '它', difficulty: 1, chinese: '冬天天气很冷。' },
        { type: 'grammar_fill', question: 'The ___ is nice today.', answer: 'weather', hint: '天气', difficulty: 1, chinese: '今天天气很好。' },
        { type: 'grammar_choice', question: 'Which season is hot?', answer: 'A', options: ['summer', 'winter', 'autumn', 'spring'], difficulty: 1, chinese: '哪个季节很热？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 27-28',
      questions: [
        { type: 'spelling', question: '机场', answer: 'airport', hint: 'a_____', difficulty: 1, chinese: '机场' },
        { type: 'spelling', question: '飞机', answer: 'plane', hint: 'p___', difficulty: 1, chinese: '飞机' },
        { type: 'spelling', question: '火车', answer: 'train', hint: 't___', difficulty: 1, chinese: '火车' },
        { type: 'spelling', question: '公共汽车', answer: 'bus', hint: 'b__', difficulty: 1, chinese: '公共汽车' },
        { type: 'spelling', question: '票', answer: 'ticket', hint: 't_____', difficulty: 1, chinese: '票' },
        { type: 'spelling', question: '票务员', answer: 'ticket collector', hint: 't___________', difficulty: 1, chinese: '票务员' },
        { type: 'grammar_fill', question: 'The ___ is late.', answer: 'train', hint: '火车', difficulty: 1, chinese: '火车晚点了。' },
        { type: 'grammar_fill', question: 'I need a ___.', answer: 'ticket', hint: '票', difficulty: 1, chinese: '我需要一张票。' },
        { type: 'grammar_fill', question: 'The ___ is at the station.', answer: 'bus', hint: '公共汽车', difficulty: 1, chinese: '公共汽车在车站。' },
        { type: 'grammar_choice', question: 'Where is the ___?', answer: 'A', options: ['airport', 'plane', 'ticket', 'bus'], difficulty: 1, chinese: '机场在哪里？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 29-30',
      questions: [
        { type: 'spelling', question: '报纸', answer: 'newspaper', hint: 'n________', difficulty: 1, chinese: '报纸' },
        { type: 'spelling', question: '杂志', answer: 'magazine', hint: 'm________', difficulty: 1, chinese: '杂志' },
        { type: 'spelling', question: '新闻', answer: 'news', hint: 'n___', difficulty: 1, chinese: '新闻' },
        { type: 'spelling', question: '时间', answer: 'time', hint: 't___', difficulty: 1, chinese: '时间' },
        { type: 'spelling', question: '日期', answer: 'date', hint: 'd___', difficulty: 1, chinese: '日期' },
        { type: 'spelling', question: '历史', answer: 'history', hint: 'h_____', difficulty: 1, chinese: '历史' },
        { type: 'grammar_fill', question: 'I read the ___ every morning.', answer: 'newspaper', hint: '报纸', difficulty: 1, chinese: '我每天早上看报纸。' },
        { type: 'grammar_fill', question: 'Whats the ___?', answer: 'date', hint: '日期', difficulty: 1, chinese: '今天是几号？' },
        { type: 'grammar_fill', question: 'Whats the ___?', answer: 'time', hint: '时间', difficulty: 1, chinese: '现在几点了？' },
        { type: 'grammar_choice', question: 'I like reading ___', answer: 'A', options: ['magazines', 'newspaper', 'news', 'time'], difficulty: 1, chinese: '我喜欢看杂志。' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 25-30 综合',
      questions: [
        { type: 'spelling', question: '夏天', answer: 'summer', hint: 's_____', difficulty: 1, chinese: '夏天' },
        { type: 'spelling', question: '机场', answer: 'airport', hint: 'a_____', difficulty: 1, chinese: '机场' },
        { type: 'spelling', question: '飞机', answer: 'plane', hint: 'p___', difficulty: 1, chinese: '飞机' },
        { type: 'spelling', question: '报纸', answer: 'newspaper', hint: 'n________', difficulty: 1, chinese: '报纸' },
        { type: 'spelling', question: '天气', answer: 'weather', hint: 'w______', difficulty: 1, chinese: '天气' },
        { type: 'grammar_fill', question: '___ is hot in summer.', answer: 'It', hint: '它', difficulty: 1, chinese: '夏天天气很热。' },
        { type: 'grammar_fill', question: 'I need a ___.', answer: 'ticket', hint: '票', difficulty: 1, chinese: '我需要一张票。' },
        { type: 'grammar_fill', question: 'I read the ___ every morning.', answer: 'newspaper', hint: '报纸', difficulty: 1, chinese: '我每天早上看报纸。' },
        { type: 'grammar_choice', question: 'Which season is hot?', answer: 'A', options: ['summer', 'winter', 'autumn', 'spring'], difficulty: 1, chinese: '哪个季节很热？' },
        { type: 'grammar_choice', question: 'Where is the ___?', answer: 'A', options: ['airport', 'plane', 'ticket', 'bus'], difficulty: 1, chinese: '机场在哪里？' },
      ]
    }
  },
  major6: {
    title: '第六大关',
    lessons: 'Lesson 31-36',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 31-32',
      questions: [
        { type: 'spelling', question: '办公室', answer: 'office', hint: 'o_____', difficulty: 1, chinese: '办公室' },
        { type: 'spelling', question: '医生', answer: 'doctor', hint: 'd____', difficulty: 1, chinese: '医生' },
        { type: 'spelling', question: '医院', answer: 'hospital', hint: 'h_____', difficulty: 1, chinese: '医院' },
        { type: 'spelling', question: '牙医', answer: 'dentist', hint: 'd_____', difficulty: 1, chinese: '牙医' },
        { type: 'spelling', question: '眼镜', answer: 'glasses', hint: 'g_____', difficulty: 1, chinese: '眼镜' },
        { type: 'spelling', question: '头痛', answer: 'headache', hint: 'h______', difficulty: 1, chinese: '头痛' },
        { type: 'grammar_fill', question: 'I work in an ___.', answer: 'office', hint: '办公室', difficulty: 1, chinese: '我在办公室工作。' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'doctor', hint: '医生', difficulty: 1, chinese: '她是医生。' },
        { type: 'grammar_fill', question: 'I have a ___.', answer: 'headache', hint: '头痛', difficulty: 1, chinese: '我头痛。' },
        { type: 'grammar_choice', question: 'Where does the doctor work?', answer: 'A', options: ['hospital', 'office', 'school', 'shop'], difficulty: 1, chinese: '医生在哪里工作？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 33-34',
      questions: [
        { type: 'spelling', question: '冰箱', answer: 'fridge', hint: 'f____', difficulty: 1, chinese: '冰箱' },
        { type: 'spelling', question: '盘子', answer: 'plate', hint: 'p___', difficulty: 1, chinese: '盘子' },
        { type: 'spelling', question: '刀', answer: 'knife', hint: 'k___', difficulty: 1, chinese: '刀' },
        { type: 'spelling', question: '叉子', answer: 'fork', hint: 'f___', difficulty: 1, chinese: '叉子' },
        { type: 'spelling', question: '勺子', answer: 'spoon', hint: 's____', difficulty: 1, chinese: '勺子' },
        { type: 'spelling', question: '杯子', answer: 'cup', hint: 'c__', difficulty: 1, chinese: '杯子' },
        { type: 'grammar_fill', question: 'The milk is in the ___.', answer: 'fridge', hint: '冰箱', difficulty: 1, chinese: '牛奶在冰箱里。' },
        { type: 'grammar_fill', question: 'I need a ___.', answer: 'plate', hint: '盘子', difficulty: 1, chinese: '我需要一个盘子。' },
        { type: 'grammar_fill', question: 'Give me a ___, please.', answer: 'fork', hint: '叉子', difficulty: 1, chinese: '请给我叉子。' },
        { type: 'grammar_choice', question: 'Where is the milk?', answer: 'A', options: ['fridge', 'plate', 'cup', 'fork'], difficulty: 1, chinese: '牛奶在哪里？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 35-36',
      questions: [
        { type: 'spelling', question: '茶', answer: 'tea', hint: 't__', difficulty: 1, chinese: '茶' },
        { type: 'spelling', question: '糖', answer: 'sugar', hint: 's___', difficulty: 1, chinese: '糖' },
        { type: 'spelling', question: '蛋糕', answer: 'cake', hint: 'c___', difficulty: 1, chinese: '蛋糕' },
        { type: 'spelling', question: '饼干', answer: 'biscuit', hint: 'b_____', difficulty: 1, chinese: '饼干' },
        { type: 'spelling', question: '黄油', answer: 'butter', hint: 'b____', difficulty: 1, chinese: '黄油' },
        { type: 'spelling', question: '果酱', answer: 'jam', hint: 'j__', difficulty: 1, chinese: '果酱' },
        { type: 'grammar_fill', question: 'I want a cup of ___.', answer: 'tea', hint: '茶', difficulty: 1, chinese: '我想要一杯茶。' },
        { type: 'grammar_fill', question: 'Do you want some ___?', answer: 'sugar', hint: '糖', difficulty: 1, chinese: '你想要糖吗？' },
        { type: 'grammar_fill', question: 'This ___ is sweet.', answer: 'cake', hint: '蛋糕', difficulty: 1, chinese: '这个蛋糕很甜。' },
        { type: 'grammar_choice', question: 'What do you want to drink?', answer: 'A', options: ['tea', 'cake', 'biscuit', 'butter'], difficulty: 1, chinese: '你想喝什么？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 31-36 综合',
      questions: [
        { type: 'spelling', question: '办公室', answer: 'office', hint: 'o_____', difficulty: 1, chinese: '办公室' },
        { type: 'spelling', question: '医院', answer: 'hospital', hint: 'h_____', difficulty: 1, chinese: '医院' },
        { type: 'spelling', question: '冰箱', answer: 'fridge', hint: 'f____', difficulty: 1, chinese: '冰箱' },
        { type: 'spelling', question: '茶', answer: 'tea', hint: 't__', difficulty: 1, chinese: '茶' },
        { type: 'spelling', question: '蛋糕', answer: 'cake', hint: 'c___', difficulty: 1, chinese: '蛋糕' },
        { type: 'grammar_fill', question: 'I work in an ___.', answer: 'office', hint: '办公室', difficulty: 1, chinese: '我在办公室工作。' },
        { type: 'grammar_fill', question: 'The milk is in the ___.', answer: 'fridge', hint: '冰箱', difficulty: 1, chinese: '牛奶在冰箱里。' },
        { type: 'grammar_fill', question: 'I want a cup of ___.', answer: 'tea', hint: '茶', difficulty: 1, chinese: '我想要一杯茶。' },
        { type: 'grammar_choice', question: 'Where does the doctor work?', answer: 'A', options: ['hospital', 'office', 'school', 'shop'], difficulty: 1, chinese: '医生在哪里工作？' },
        { type: 'grammar_choice', question: 'What do you want to drink?', answer: 'A', options: ['tea', 'cake', 'biscuit', 'butter'], difficulty: 1, chinese: '你想喝什么？' },
      ]
    }
  },
  major7: {
    title: '第七大关',
    lessons: 'Lesson 37-42',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 37-38',
      questions: [
        { type: 'spelling', question: '卧室', answer: 'bedroom', hint: 'b_____', difficulty: 1, chinese: '卧室' },
        { type: 'spelling', question: '浴室', answer: 'bathroom', hint: 'b______', difficulty: 1, chinese: '浴室' },
        { type: 'spelling', question: '起居室', answer: 'living room', hint: 'l_______', difficulty: 1, chinese: '起居室' },
        { type: 'spelling', question: '床', answer: 'bed', hint: 'b__', difficulty: 1, chinese: '床' },
        { type: 'spelling', question: '桌子', answer: 'table', hint: 't___', difficulty: 1, chinese: '桌子' },
        { type: 'spelling', question: '椅子', answer: 'chair', hint: 'c____', difficulty: 1, chinese: '椅子' },
        { type: 'grammar_fill', question: 'The ___ is in the bedroom.', answer: 'bed', hint: '床', difficulty: 1, chinese: '床在卧室里。' },
        { type: 'grammar_fill', question: 'I am in the ___.', answer: 'bathroom', hint: '浴室', difficulty: 1, chinese: '我在浴室里。' },
        { type: 'grammar_fill', question: 'The ___ is in the living room.', answer: 'chair', hint: '椅子', difficulty: 1, chinese: '椅子在起居室里。' },
        { type: 'grammar_choice', question: 'Where is the bed?', answer: 'A', options: ['bedroom', 'bathroom', 'kitchen', 'garden'], difficulty: 1, chinese: '床在哪里？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 39-40',
      questions: [
        { type: 'spelling', question: '太阳', answer: 'sun', hint: 's__', difficulty: 1, chinese: '太阳' },
        { type: 'spelling', question: '月亮', answer: 'moon', hint: 'm___', difficulty: 1, chinese: '月亮' },
        { type: 'spelling', question: '星星', answer: 'star', hint: 's___', difficulty: 1, chinese: '星星' },
        { type: 'spelling', question: '云', answer: 'cloud', hint: 'c___', difficulty: 1, chinese: '云' },
        { type: 'spelling', question: '雨', answer: 'rain', hint: 'r___', difficulty: 1, chinese: '雨' },
        { type: 'spelling', question: '雪', answer: 'snow', hint: 's___', difficulty: 1, chinese: '雪' },
        { type: 'grammar_fill', question: 'The ___ is bright.', answer: 'sun', hint: '太阳', difficulty: 1, chinese: '太阳很亮。' },
        { type: 'grammar_fill', question: 'The ___ is at night.', answer: 'moon', hint: '月亮', difficulty: 1, chinese: '月亮在晚上出现。' },
        { type: 'grammar_fill', question: 'There are many ___ in the sky.', answer: 'stars', hint: '星星', difficulty: 1, chinese: '天空中有很多星星。' },
        { type: 'grammar_choice', question: 'What is bright in the day?', answer: 'A', options: ['sun', 'moon', 'star', 'cloud'], difficulty: 1, chinese: '什么在白天很亮？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 41-42',
      questions: [
        { type: 'spelling', question: '城镇', answer: 'town', hint: 't___', difficulty: 1, chinese: '城镇' },
        { type: 'spelling', question: '村庄', answer: 'village', hint: 'v_____', difficulty: 1, chinese: '村庄' },
        { type: 'spelling', question: '道路', answer: 'road', hint: 'r___', difficulty: 1, chinese: '道路' },
        { type: 'spelling', question: '街道', answer: 'street', hint: 's____', difficulty: 1, chinese: '街道' },
        { type: 'spelling', question: '桥', answer: 'bridge', hint: 'b____', difficulty: 1, chinese: '桥' },
        { type: 'spelling', question: '河流', answer: 'river', hint: 'r___', difficulty: 1, chinese: '河流' },
        { type: 'grammar_fill', question: 'I live in a small ___.', answer: 'town', hint: '城镇', difficulty: 1, chinese: '我住在一个小城镇。' },
        { type: 'grammar_fill', question: 'There is a ___ over the river.', answer: 'bridge', hint: '桥', difficulty: 1, chinese: '河上有一座桥。' },
        { type: 'grammar_fill', question: 'The ___ is long.', answer: 'road', hint: '道路', difficulty: 1, chinese: '道路很长。' },
        { type: 'grammar_choice', question: 'Where do you live?', answer: 'A', options: ['town', 'river', 'bridge', 'road'], difficulty: 1, chinese: '你住在哪里？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 37-42 综合',
      questions: [
        { type: 'spelling', question: '卧室', answer: 'bedroom', hint: 'b_____', difficulty: 1, chinese: '卧室' },
        { type: 'spelling', question: '太阳', answer: 'sun', hint: 's__', difficulty: 1, chinese: '太阳' },
        { type: 'spelling', question: '城镇', answer: 'town', hint: 't___', difficulty: 1, chinese: '城镇' },
        { type: 'spelling', question: '桥', answer: 'bridge', hint: 'b____', difficulty: 1, chinese: '桥' },
        { type: 'spelling', question: '星星', answer: 'star', hint: 's___', difficulty: 1, chinese: '星星' },
        { type: 'grammar_fill', question: 'The ___ is in the bedroom.', answer: 'bed', hint: '床', difficulty: 1, chinese: '床在卧室里。' },
        { type: 'grammar_fill', question: 'The ___ is bright.', answer: 'sun', hint: '太阳', difficulty: 1, chinese: '太阳很亮。' },
        { type: 'grammar_fill', question: 'I live in a small ___.', answer: 'town', hint: '城镇', difficulty: 1, chinese: '我住在一个小城镇。' },
        { type: 'grammar_choice', question: 'Where is the bed?', answer: 'A', options: ['bedroom', 'bathroom', 'kitchen', 'garden'], difficulty: 1, chinese: '床在哪里？' },
        { type: 'grammar_choice', question: 'What is bright in the day?', answer: 'A', options: ['sun', 'moon', 'star', 'cloud'], difficulty: 1, chinese: '什么在白天很亮？' },
      ]
    }
  },
  major8: {
    title: '第八大关',
    lessons: 'Lesson 43-48',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 43-44',
      questions: [
        { type: 'spelling', question: '汽车', answer: 'car', hint: 'c__', difficulty: 1, chinese: '汽车' },
        { type: 'spelling', question: '自行车', answer: 'bicycle', hint: 'b______', difficulty: 1, chinese: '自行车' },
        { type: 'spelling', question: '卡车', answer: 'truck', hint: 't____', difficulty: 1, chinese: '卡车' },
        { type: 'spelling', question: '司机', answer: 'driver', hint: 'd____', difficulty: 1, chinese: '司机' },
        { type: 'spelling', question: '汽油', answer: 'petrol', hint: 'p____', difficulty: 1, chinese: '汽油' },
        { type: 'spelling', question: '车库', answer: 'garage', hint: 'g____', difficulty: 1, chinese: '车库' },
        { type: 'grammar_fill', question: 'The ___ is in the garage.', answer: 'car', hint: '汽车', difficulty: 1, chinese: '汽车在车库里。' },
        { type: 'grammar_fill', question: 'He is a ___.', answer: 'driver', hint: '司机', difficulty: 1, chinese: '他是司机。' },
        { type: 'grammar_fill', question: 'I need some ___.', answer: 'petrol', hint: '汽油', difficulty: 1, chinese: '我需要一些汽油。' },
        { type: 'grammar_choice', question: 'Where is the car?', answer: 'A', options: ['garage', 'house', 'school', 'office'], difficulty: 1, chinese: '汽车在哪里？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 45-46',
      questions: [
        { type: 'spelling', question: '天气', answer: 'weather', hint: 'w______', difficulty: 1, chinese: '天气' },
        { type: 'spelling', question: '多云的', answer: 'cloudy', hint: 'c_____', difficulty: 1, chinese: '多云的' },
        { type: 'spelling', question: '晴朗的', answer: 'sunny', hint: 's_____', difficulty: 1, chinese: '晴朗的' },
        { type: 'spelling', question: '有风的', answer: 'windy', hint: 'w_____', difficulty: 1, chinese: '有风的' },
        { type: 'spelling', question: '下雨的', answer: 'rainy', hint: 'r____', difficulty: 1, chinese: '下雨的' },
        { type: 'spelling', question: '下雪的', answer: 'snowy', hint: 's____', difficulty: 1, chinese: '下雪的' },
        { type: 'grammar_fill', question: 'The ___ is nice today.', answer: 'weather', hint: '天气', difficulty: 1, chinese: '今天天气很好。' },
        { type: 'grammar_fill', question: 'It is ___ today.', answer: 'sunny', hint: '晴朗的', difficulty: 1, chinese: '今天天气晴朗。' },
        { type: 'grammar_fill', question: 'It is ___ in winter.', answer: 'snowy', hint: '下雪的', difficulty: 1, chinese: '冬天下雪。' },
        { type: 'grammar_choice', question: 'What is the weather like today?', answer: 'A', options: ['sunny', 'rainy', 'snowy', 'windy'], difficulty: 1, chinese: '今天天气怎么样？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 47-48',
      questions: [
        { type: 'spelling', question: '身体', answer: 'body', hint: 'b___', difficulty: 1, chinese: '身体' },
        { type: 'spelling', question: '头', answer: 'head', hint: 'h___', difficulty: 1, chinese: '头' },
        { type: 'spelling', question: '手', answer: 'hand', hint: 'h___', difficulty: 1, chinese: '手' },
        { type: 'spelling', question: '脚', answer: 'foot', hint: 'f__', difficulty: 1, chinese: '脚' },
        { type: 'spelling', question: '腿', answer: 'leg', hint: 'l__', difficulty: 1, chinese: '腿' },
        { type: 'spelling', question: '手指', answer: 'finger', hint: 'f_____', difficulty: 1, chinese: '手指' },
        { type: 'grammar_fill', question: 'I have a headache. My ___ hurts.', answer: 'head', hint: '头', difficulty: 1, chinese: '我头痛。' },
        { type: 'grammar_fill', question: 'I use my ___ to write.', answer: 'hand', hint: '手', difficulty: 1, chinese: '我用我的手写字。' },
        { type: 'grammar_fill', question: 'I stand on my ___.', answer: 'feet', hint: '脚', difficulty: 1, chinese: '我用脚站立。' },
        { type: 'grammar_choice', question: 'What do you think with?', answer: 'A', options: ['head', 'hand', 'foot', 'leg'], difficulty: 1, chinese: '你用什么思考？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 43-48 综合',
      questions: [
        { type: 'spelling', question: '汽车', answer: 'car', hint: 'c__', difficulty: 1, chinese: '汽车' },
        { type: 'spelling', question: '天气', answer: 'weather', hint: 'w______', difficulty: 1, chinese: '天气' },
        { type: 'spelling', question: '身体', answer: 'body', hint: 'b___', difficulty: 1, chinese: '身体' },
        { type: 'spelling', question: '头', answer: 'head', hint: 'h___', difficulty: 1, chinese: '头' },
        { type: 'spelling', question: '手', answer: 'hand', hint: 'h___', difficulty: 1, chinese: '手' },
        { type: 'grammar_fill', question: 'The ___ is in the garage.', answer: 'car', hint: '汽车', difficulty: 1, chinese: '汽车在车库里。' },
        { type: 'grammar_fill', question: 'The ___ is nice today.', answer: 'weather', hint: '天气', difficulty: 1, chinese: '今天天气很好。' },
        { type: 'grammar_fill', question: 'I have a headache. My ___ hurts.', answer: 'head', hint: '头', difficulty: 1, chinese: '我头痛。' },
        { type: 'grammar_choice', question: 'Where is the car?', answer: 'A', options: ['garage', 'house', 'school', 'office'], difficulty: 1, chinese: '汽车在哪里？' },
        { type: 'grammar_choice', question: 'What is the weather like today?', answer: 'A', options: ['sunny', 'rainy', 'snowy', 'windy'], difficulty: 1, chinese: '今天天气怎么样？' },
      ]
    }
  },
  major9: {
    title: '第九大关',
    lessons: 'Lesson 49-54',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 49-50',
      questions: [
        { type: 'spelling', question: '音乐会', answer: 'concert', hint: 'c_____', difficulty: 1, chinese: '音乐会' },
        { type: 'spelling', question: '舞会', answer: 'party', hint: 'p___', difficulty: 1, chinese: '舞会' },
        { type: 'spelling', question: '生日', answer: 'birthday', hint: 'b______', difficulty: 1, chinese: '生日' },
        { type: 'spelling', question: '礼物', answer: 'present', hint: 'p_____', difficulty: 1, chinese: '礼物' },
        { type: 'spelling', question: '卡片', answer: 'card', hint: 'c___', difficulty: 1, chinese: '卡片' },
        { type: 'spelling', question: '邀请', answer: 'invitation', hint: 'i________', difficulty: 1, chinese: '邀请' },
        { type: 'grammar_fill', question: 'Lets go to the ___.', answer: 'concert', hint: '音乐会', difficulty: 1, chinese: '让我们去音乐会。' },
        { type: 'grammar_fill', question: 'Happy ___!', answer: 'birthday', hint: '生日', difficulty: 1, chinese: '生日快乐！' },
        { type: 'grammar_fill', question: 'Here is a ___ for you.', answer: 'present', hint: '礼物', difficulty: 1, chinese: '这是给你的礼物。' },
        { type: 'grammar_choice', question: 'When is the ___?', answer: 'A', options: ['party', 'concert', 'birthday', 'present'], difficulty: 1, chinese: '舞会是什么时候？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 51-52',
      questions: [
        { type: 'spelling', question: '问题', answer: 'question', hint: 'q_______', difficulty: 1, chinese: '问题' },
        { type: 'spelling', question: '答案', answer: 'answer', hint: 'a_____', difficulty: 1, chinese: '答案' },
        { type: 'spelling', question: '测验', answer: 'test', hint: 't___', difficulty: 1, chinese: '测验' },
        { type: 'spelling', question: '考试', answer: 'exam', hint: 'e___', difficulty: 1, chinese: '考试' },
        { type: 'spelling', question: '学生', answer: 'student', hint: 's______', difficulty: 1, chinese: '学生' },
        { type: 'spelling', question: '老师', answer: 'teacher', hint: 't______', difficulty: 1, chinese: '老师' },
        { type: 'grammar_fill', question: 'What is the ___?', answer: 'question', hint: '问题', difficulty: 1, chinese: '问题是什么？' },
        { type: 'grammar_fill', question: 'I know the ___.', answer: 'answer', hint: '答案', difficulty: 1, chinese: '我知道答案。' },
        { type: 'grammar_fill', question: 'We have an ___ tomorrow.', answer: 'exam', hint: '考试', difficulty: 1, chinese: '我们明天有考试。' },
        { type: 'grammar_choice', question: 'Who teaches you?', answer: 'A', options: ['teacher', 'student', 'question', 'exam'], difficulty: 1, chinese: '谁教你？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 53-54',
      questions: [
        { type: 'spelling', question: '国家', answer: 'country', hint: 'c_____', difficulty: 1, chinese: '国家' },
        { type: 'spelling', question: '世界', answer: 'world', hint: 'w___', difficulty: 1, chinese: '世界' },
        { type: 'spelling', question: '语言', answer: 'language', hint: 'l_______', difficulty: 1, chinese: '语言' },
        { type: 'spelling', question: '英语', answer: 'English', hint: 'E______', difficulty: 1, chinese: '英语' },
        { type: 'spelling', question: '法语', answer: 'French', hint: 'F_____', difficulty: 1, chinese: '法语' },
        { type: 'spelling', question: '西班牙语', answer: 'Spanish', hint: 'S_______', difficulty: 1, chinese: '西班牙语' },
        { type: 'grammar_fill', question: 'What ___ do you come from?', answer: 'country', hint: '国家', difficulty: 1, chinese: '你来自哪个国家？' },
        { type: 'grammar_fill', question: 'Do you speak ___?', answer: 'English', hint: '英语', difficulty: 1, chinese: '你说英语吗？' },
        { type: 'grammar_fill', question: 'The ___ is beautiful.', answer: 'world', hint: '世界', difficulty: 1, chinese: '世界很美丽。' },
        { type: 'grammar_choice', question: 'How many ___ have you visited?', answer: 'A', options: ['countries', 'worlds', 'languages', 'students'], difficulty: 1, chinese: '你去过多少个国家？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 49-54 综合',
      questions: [
        { type: 'spelling', question: '音乐会', answer: 'concert', hint: 'c_____', difficulty: 1, chinese: '音乐会' },
        { type: 'spelling', question: '生日', answer: 'birthday', hint: 'b______', difficulty: 1, chinese: '生日' },
        { type: 'spelling', question: '问题', answer: 'question', hint: 'q_______', difficulty: 1, chinese: '问题' },
        { type: 'spelling', question: '国家', answer: 'country', hint: 'c_____', difficulty: 1, chinese: '国家' },
        { type: 'spelling', question: '英语', answer: 'English', hint: 'E______', difficulty: 1, chinese: '英语' },
        { type: 'grammar_fill', question: 'Happy ___!', answer: 'birthday', hint: '生日', difficulty: 1, chinese: '生日快乐！' },
        { type: 'grammar_fill', question: 'What is the ___?', answer: 'question', hint: '问题', difficulty: 1, chinese: '问题是什么？' },
        { type: 'grammar_fill', question: 'Do you speak ___?', answer: 'English', hint: '英语', difficulty: 1, chinese: '你说英语吗？' },
        { type: 'grammar_choice', question: 'When is the ___?', answer: 'A', options: ['party', 'concert', 'birthday', 'present'], difficulty: 1, chinese: '舞会是什么时候？' },
        { type: 'grammar_choice', question: 'Who teaches you?', answer: 'A', options: ['teacher', 'student', 'question', 'exam'], difficulty: 1, chinese: '谁教你？' },
      ]
    }
  },
  major10: {
    title: '第十大关',
    lessons: 'Lesson 55-60',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 55-56',
      questions: [
        { type: 'spelling', question: '运动', answer: 'sport', hint: 's___', difficulty: 1, chinese: '运动' },
        { type: 'spelling', question: '足球', answer: 'football', hint: 'f______', difficulty: 1, chinese: '足球' },
        { type: 'spelling', question: '篮球', answer: 'basketball', hint: 'b________', difficulty: 1, chinese: '篮球' },
        { type: 'spelling', question: '网球', answer: 'tennis', hint: 't_____', difficulty: 1, chinese: '网球' },
        { type: 'spelling', question: '游泳', answer: 'swimming', hint: 's_______', difficulty: 1, chinese: '游泳' },
        { type: 'spelling', question: '跑步', answer: 'running', hint: 'r______', difficulty: 1, chinese: '跑步' },
        { type: 'grammar_fill', question: 'I like ___.', answer: 'sport', hint: '运动', difficulty: 1, chinese: '我喜欢运动。' },
        { type: 'grammar_fill', question: 'Do you play ___?', answer: 'football', hint: '足球', difficulty: 1, chinese: '你踢足球吗？' },
        { type: 'grammar_fill', question: 'She is good at ___.', answer: 'swimming', hint: '游泳', difficulty: 1, chinese: '她擅长游泳。' },
        { type: 'grammar_choice', question: 'Which sport do you like?', answer: 'A', options: ['tennis', 'football', 'basketball', 'swimming'], difficulty: 1, chinese: '你喜欢什么运动？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 57-58',
      questions: [
        { type: 'spelling', question: '医生', answer: 'doctor', hint: 'd____', difficulty: 1, chinese: '医生' },
        { type: 'spelling', question: '医院', answer: 'hospital', hint: 'h_____', difficulty: 1, chinese: '医院' },
        { type: 'spelling', question: '病人', answer: 'patient', hint: 'p_____', difficulty: 1, chinese: '病人' },
        { type: 'spelling', question: '护士', answer: 'nurse', hint: 'n____', difficulty: 1, chinese: '护士' },
        { type: 'spelling', question: '药', answer: 'medicine', hint: 'm______', difficulty: 1, chinese: '药' },
        { type: 'spelling', question: '发烧', answer: 'fever', hint: 'f___', difficulty: 1, chinese: '发烧' },
        { type: 'grammar_fill', question: 'The ___ is in the hospital.', answer: 'doctor', hint: '医生', difficulty: 1, chinese: '医生在医院。' },
        { type: 'grammar_fill', question: 'I am a ___.', answer: 'patient', hint: '病人', difficulty: 1, chinese: '我是病人。' },
        { type: 'grammar_fill', question: 'Take this ___.', answer: 'medicine', hint: '药', difficulty: 1, chinese: '吃这个药。' },
        { type: 'grammar_choice', question: 'Where does the nurse work?', answer: 'A', options: ['hospital', 'school', 'office', 'shop'], difficulty: 1, chinese: '护士在哪里工作？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 59-60',
      questions: [
        { type: 'spelling', question: '家庭', answer: 'family', hint: 'f_____', difficulty: 1, chinese: '家庭' },
        { type: 'spelling', question: '父亲', answer: 'father', hint: 'f_____', difficulty: 1, chinese: '父亲' },
        { type: 'spelling', question: '母亲', answer: 'mother', hint: 'm_____', difficulty: 1, chinese: '母亲' },
        { type: 'spelling', question: '兄弟', answer: 'brother', hint: 'b______', difficulty: 1, chinese: '兄弟' },
        { type: 'spelling', question: '姐妹', answer: 'sister', hint: 's_____', difficulty: 1, chinese: '姐妹' },
        { type: 'spelling', question: '父母', answer: 'parents', hint: 'p_____', difficulty: 1, chinese: '父母' },
        { type: 'grammar_fill', question: 'My ___ is big.', answer: 'family', hint: '家庭', difficulty: 1, chinese: '我的家庭很大。' },
        { type: 'grammar_fill', question: 'My ___ is a teacher.', answer: 'father', hint: '父亲', difficulty: 1, chinese: '我父亲是老师。' },
        { type: 'grammar_fill', question: 'I have a ___.', answer: 'brother', hint: '兄弟', difficulty: 1, chinese: '我有一个兄弟。' },
        { type: 'grammar_choice', question: 'Who is your mother?', answer: 'A', options: ['She is kind', 'He is tall', 'They are nice', 'I am happy'], difficulty: 1, chinese: '你妈妈是谁？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 55-60 综合',
      questions: [
        { type: 'spelling', question: '运动', answer: 'sport', hint: 's___', difficulty: 1, chinese: '运动' },
        { type: 'spelling', question: '足球', answer: 'football', hint: 'f______', difficulty: 1, chinese: '足球' },
        { type: 'spelling', question: '医生', answer: 'doctor', hint: 'd____', difficulty: 1, chinese: '医生' },
        { type: 'spelling', question: '家庭', answer: 'family', hint: 'f_____', difficulty: 1, chinese: '家庭' },
        { type: 'spelling', question: '发烧', answer: 'fever', hint: 'f___', difficulty: 1, chinese: '发烧' },
        { type: 'grammar_fill', question: 'I like ___.', answer: 'sport', hint: '运动', difficulty: 1, chinese: '我喜欢运动。' },
        { type: 'grammar_fill', question: 'The ___ is in the hospital.', answer: 'doctor', hint: '医生', difficulty: 1, chinese: '医生在医院。' },
        { type: 'grammar_fill', question: 'My ___ is big.', answer: 'family', hint: '家庭', difficulty: 1, chinese: '我的家庭很大。' },
        { type: 'grammar_choice', question: 'Which sport do you like?', answer: 'A', options: ['tennis', 'football', 'basketball', 'swimming'], difficulty: 1, chinese: '你喜欢什么运动？' },
        { type: 'grammar_choice', question: 'Where does the nurse work?', answer: 'A', options: ['hospital', 'school', 'office', 'shop'], difficulty: 1, chinese: '护士在哪里工作？' },
      ]
    }
  },
  major11: {
    title: '第十一大关',
    lessons: 'Lesson 61-66',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 61-62',
      questions: [
        { type: 'spelling', question: '钥匙', answer: 'key', hint: 'k__', difficulty: 1, chinese: '钥匙' },
        { type: 'spelling', question: '锁', answer: 'lock', hint: 'l___', difficulty: 1, chinese: '锁' },
        { type: 'spelling', question: '门', answer: 'door', hint: 'd___', difficulty: 1, chinese: '门' },
        { type: 'spelling', question: '窗', answer: 'window', hint: 'w_____', difficulty: 1, chinese: '窗' },
        { type: 'spelling', question: '房子', answer: 'house', hint: 'h___', difficulty: 1, chinese: '房子' },
        { type: 'spelling', question: '房间', answer: 'room', hint: 'r___', difficulty: 1, chinese: '房间' },
        { type: 'grammar_fill', question: 'Here is the ___.', answer: 'key', hint: '钥匙', difficulty: 1, chinese: '这是钥匙。' },
        { type: 'grammar_fill', question: 'The ___ is locked.', answer: 'door', hint: '门', difficulty: 1, chinese: '门锁着。' },
        { type: 'grammar_fill', question: 'Open the ___.', answer: 'window', hint: '窗', difficulty: 1, chinese: '打开窗户。' },
        { type: 'grammar_choice', question: 'Where is the key?', answer: 'A', options: ['on the table', 'in the car', 'under the bed', 'behind the door'], difficulty: 1, chinese: '钥匙在哪里？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 63-64',
      questions: [
        { type: 'spelling', question: '花园', answer: 'garden', hint: 'g_____', difficulty: 1, chinese: '花园' },
        { type: 'spelling', question: '树', answer: 'tree', hint: 't___', difficulty: 1, chinese: '树' },
        { type: 'spelling', question: '花', answer: 'flower', hint: 'f_____', difficulty: 1, chinese: '花' },
        { type: 'spelling', question: '草地', answer: 'grass', hint: 'g____', difficulty: 1, chinese: '草地' },
        { type: 'spelling', question: '儿童游乐场', answer: 'playground', hint: 'p________', difficulty: 1, chinese: '儿童游乐场' },
        { type: 'spelling', question: '秋千', answer: 'swing', hint: 's____', difficulty: 1, chinese: '秋千' },
        { type: 'grammar_fill', question: 'The children are in the ___.', answer: 'garden', hint: '花园', difficulty: 1, chinese: '孩子们在花园里。' },
        { type: 'grammar_fill', question: 'There is a big ___.', answer: 'tree', hint: '树', difficulty: 1, chinese: '有一棵大树。' },
        { type: 'grammar_fill', question: 'The ___ is beautiful.', answer: 'flower', hint: '花', difficulty: 1, chinese: '花很漂亮。' },
        { type: 'grammar_choice', question: 'Where are the children playing?', answer: 'A', options: ['garden', 'kitchen', 'bedroom', 'bathroom'], difficulty: 1, chinese: '孩子们在哪里玩？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 65-66',
      questions: [
        { type: 'spelling', question: '商店', answer: 'shop', hint: 's___', difficulty: 1, chinese: '商店' },
        { type: 'spelling', question: '买', answer: 'buy', hint: 'b__', difficulty: 1, chinese: '买' },
        { type: 'spelling', question: '卖', answer: 'sell', hint: 's___', difficulty: 1, chinese: '卖' },
        { type: 'spelling', question: '价格', answer: 'price', hint: 'p____', difficulty: 1, chinese: '价格' },
        { type: 'spelling', question: '便宜', answer: 'cheap', hint: 'c_____', difficulty: 1, chinese: '便宜' },
        { type: 'spelling', question: '贵', answer: 'expensive', hint: 'e________', difficulty: 1, chinese: '贵' },
        { type: 'grammar_fill', question: 'I want to ___ a new car.', answer: 'buy', hint: '买', difficulty: 1, chinese: '我想买一辆新车。' },
        { type: 'grammar_fill', question: 'The shop ___ books.', answer: 'sells', hint: '卖', difficulty: 1, chinese: '商店卖书。' },
        { type: 'grammar_fill', question: 'What is the ___?', answer: 'price', hint: '价格', difficulty: 1, chinese: '价格是多少？' },
        { type: 'grammar_choice', question: 'Is it ___ or expensive?', answer: 'A', options: ['cheap', 'big', 'small', 'new'], difficulty: 1, chinese: '它是便宜还是贵？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 61-66 综合',
      questions: [
        { type: 'spelling', question: '钥匙', answer: 'key', hint: 'k__', difficulty: 1, chinese: '钥匙' },
        { type: 'spelling', question: '门', answer: 'door', hint: 'd___', difficulty: 1, chinese: '门' },
        { type: 'spelling', question: '花园', answer: 'garden', hint: 'g_____', difficulty: 1, chinese: '花园' },
        { type: 'spelling', question: '商店', answer: 'shop', hint: 's___', difficulty: 1, chinese: '商店' },
        { type: 'spelling', question: '价格', answer: 'price', hint: 'p____', difficulty: 1, chinese: '价格' },
        { type: 'grammar_fill', question: 'Here is the ___.', answer: 'key', hint: '钥匙', difficulty: 1, chinese: '这是钥匙。' },
        { type: 'grammar_fill', question: 'The children are in the ___.', answer: 'garden', hint: '花园', difficulty: 1, chinese: '孩子们在花园里。' },
        { type: 'grammar_fill', question: 'I want to ___ a new car.', answer: 'buy', hint: '买', difficulty: 1, chinese: '我想买一辆新车。' },
        { type: 'grammar_choice', question: 'Where is the key?', answer: 'A', options: ['on the table', 'in the car', 'under the bed', 'behind the door'], difficulty: 1, chinese: '钥匙在哪里？' },
        { type: 'grammar_choice', question: 'Is it ___ or expensive?', answer: 'A', options: ['cheap', 'big', 'small', 'new'], difficulty: 1, chinese: '它是便宜还是贵？' },
      ]
    }
  },
  major12: {
    title: '第十二大关',
    lessons: 'Lesson 67-72',
    sub1: {
      title: '第一小关',
      lessons: 'Lesson 67-68',
      questions: [
        { type: 'spelling', question: '医生', answer: 'doctor', hint: 'd____', difficulty: 1, chinese: '医生' },
        { type: 'spelling', question: '医院', answer: 'hospital', hint: 'h_____', difficulty: 1, chinese: '医院' },
        { type: 'spelling', question: '护士', answer: 'nurse', hint: 'n____', difficulty: 1, chinese: '护士' },
        { type: 'spelling', question: '病人', answer: 'patient', hint: 'p_____', difficulty: 1, chinese: '病人' },
        { type: 'spelling', question: '药', answer: 'medicine', hint: 'm______', difficulty: 1, chinese: '药' },
        { type: 'spelling', question: '牙医', answer: 'dentist', hint: 'd_____', difficulty: 1, chinese: '牙医' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'doctor', hint: '医生', difficulty: 1, chinese: '她是医生。' },
        { type: 'grammar_fill', question: 'The ___ is very big.', answer: 'hospital', hint: '医院', difficulty: 1, chinese: '医院很大。' },
        { type: 'grammar_fill', question: 'Take this ___ three times a day.', answer: 'medicine', hint: '药', difficulty: 1, chinese: '每天吃三次这个药。' },
        { type: 'grammar_choice', question: 'Where does the nurse work?', answer: 'A', options: ['hospital', 'school', 'shop', 'garden'], difficulty: 1, chinese: '护士在哪里工作？' },
      ]
    },
    sub2: {
      title: '第二小关',
      lessons: 'Lesson 69-70',
      questions: [
        { type: 'spelling', question: '假期', answer: 'holiday', hint: 'h_____', difficulty: 1, chinese: '假期' },
        { type: 'spelling', question: '旅行', answer: 'travel', hint: 't_____', difficulty: 1, chinese: '旅行' },
        { type: 'spelling', question: '飞机', answer: 'plane', hint: 'p___', difficulty: 1, chinese: '飞机' },
        { type: 'spelling', question: '火车', answer: 'train', hint: 't___', difficulty: 1, chinese: '火车' },
        { type: 'spelling', question: '轮船', answer: 'ship', hint: 's___', difficulty: 1, chinese: '轮船' },
        { type: 'spelling', question: '海滩', answer: 'beach', hint: 'b____', difficulty: 1, chinese: '海滩' },
        { type: 'grammar_fill', question: 'Where are you going on ___?', answer: 'holiday', hint: '假期', difficulty: 1, chinese: '你假期去哪里？' },
        { type: 'grammar_fill', question: 'I like to ___ around the world.', answer: 'travel', hint: '旅行', difficulty: 1, chinese: '我喜欢环游世界。' },
        { type: 'grammar_fill', question: 'We went to the ___ by ___.', answer: 'beach', hint: '海滩', difficulty: 1, chinese: '我们坐飞机去海滩。' },
        { type: 'grammar_choice', question: 'How do you like to travel?', answer: 'A', options: ['by plane', 'on foot', 'by bike', 'by car'], difficulty: 1, chinese: '你喜欢怎么旅行？' },
      ]
    },
    sub3: {
      title: '第三小关',
      lessons: 'Lesson 71-72',
      questions: [
        { type: 'spelling', question: '电影', answer: 'film', hint: 'f___', difficulty: 1, chinese: '电影' },
        { type: 'spelling', question: '剧院', answer: 'theatre', hint: 't_____', difficulty: 1, chinese: '剧院' },
        { type: 'spelling', question: '音乐会', answer: 'concert', hint: 'c_____', difficulty: 1, chinese: '音乐会' },
        { type: 'spelling', question: '唱片', answer: 'record', hint: 'r_____', difficulty: 1, chinese: '唱片' },
        { type: 'spelling', question: '磁带', answer: 'tape', hint: 't___', difficulty: 1, chinese: '磁带' },
        { type: 'spelling', question: '音乐', answer: 'music', hint: 'm____', difficulty: 1, chinese: '音乐' },
        { type: 'grammar_fill', question: 'Lets go to the ___.', answer: 'theatre', hint: '剧院', difficulty: 1, chinese: '让我们去剧院。' },
        { type: 'grammar_fill', question: 'The ___ is fantastic.', answer: 'concert', hint: '音乐会', difficulty: 1, chinese: '音乐会太棒了。' },
        { type: 'grammar_fill', question: 'I like listening to ___.', answer: 'music', hint: '音乐', difficulty: 1, chinese: '我喜欢听音乐。' },
        { type: 'grammar_choice', question: 'What shall we do tonight?', answer: 'A', options: ['watch a film', 'stay home', 'go to bed', 'do homework'], difficulty: 1, chinese: '今晚我们做什么？' },
      ]
    },
    combo: {
      title: '组合关',
      lessons: 'Lesson 67-72 综合',
      questions: [
        { type: 'spelling', question: '医生', answer: 'doctor', hint: 'd____', difficulty: 1, chinese: '医生' },
        { type: 'spelling', question: '假期', answer: 'holiday', hint: 'h_____', difficulty: 1, chinese: '假期' },
        { type: 'spelling', question: '旅行', answer: 'travel', hint: 't_____', difficulty: 1, chinese: '旅行' },
        { type: 'spelling', question: '电影', answer: 'film', hint: 'f___', difficulty: 1, chinese: '电影' },
        { type: 'spelling', question: '音乐会', answer: 'concert', hint: 'c_____', difficulty: 1, chinese: '音乐会' },
        { type: 'grammar_fill', question: 'She is a ___.', answer: 'doctor', hint: '医生', difficulty: 1, chinese: '她是医生。' },
        { type: 'grammar_fill', question: 'Where are you going on ___?', answer: 'holiday', hint: '假期', difficulty: 1, chinese: '你假期去哪里？' },
        { type: 'grammar_fill', question: 'Lets go to the ___.', answer: 'theatre', hint: '剧院', difficulty: 1, chinese: '让我们去剧院。' },
        { type: 'grammar_choice', question: 'Where does the nurse work?', answer: 'A', options: ['hospital', 'school', 'shop', 'garden'], difficulty: 1, chinese: '护士在哪里工作？' },
        { type: 'grammar_choice', question: 'What shall we do tonight?', answer: 'A', options: ['watch a film', 'stay home', 'go to bed', 'do homework'], difficulty: 1, chinese: '今晚我们做什么？' },
      ]
    }
  }
};

if(typeof module !== 'undefined' && module.exports) {
  module.exports = NEW_CONCEPT_QUESTIONS;
}