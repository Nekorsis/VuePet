export const katakana = [
  {jp: 'ン', ru: 'н'},
  {jp: 'ワ', ru: 'ва'},
  {jp: 'ラ', ru: 'ра'},
  {jp: 'ヤ', ru: 'я'},
  {jp: 'マ', ru: 'ма'},
  {jp: 'ハ', ru: 'ха'},
  {jp: 'ナ', ru: 'на'},
  {jp: 'タ', ru: 'та'},
  {jp: 'サ', ru: 'са'},
  {jp: 'カ', ru: 'ка'},
  {jp: 'ア', ru: 'а'},
  {jp: 'リ', ru: 'ри'},
  {jp: 'ミ', ru: 'ми'},
  {jp: 'ヒ', ru: 'хи'},
  {jp: 'ニ', ru: 'ни'},
  {jp: 'チ', ru: 'ти'},
  {jp: 'シ', ru: 'си'},
  {jp: 'キ', ru: 'ки'},
  {jp: 'イ', ru: 'и'},
  {jp: 'ル', ru: 'ру'},
  {jp: 'ユ', ru: 'ю'},
  {jp: 'ム', ru: 'му'},
  {jp: 'フ', ru: 'фу'},
  {jp: 'ヌ', ru: 'ну'},
  {jp: 'ツ', ru: 'цу'},
  {jp: 'ス', ru: 'су'},
  {jp: 'ク', ru: 'ку'},
  {jp: 'ウ', ru: 'у'},
  {jp: 'レ', ru: 'рэ'},
  {jp: 'メ', ru: 'мэ'},
  {jp: 'ヘ', ru: 'хэ'},
  {jp: 'ネ', ru: 'нэ'},
  {jp: 'テ', ru: 'тэ'},
  {jp: 'セ', ru: 'сэ'},
  {jp: 'ケ', ru: 'кэ'},
  {jp: 'エ', ru: 'э'},
  {jp: 'ヲ', ru: 'во'},
  {jp: 'ロ', ru: 'ро'},
  {jp: 'ヨ', ru: 'ё'},
  {jp: 'モ', ru: 'мо'},
  {jp: 'ホ', ru: 'хо'},
  {jp: 'ノ', ru: 'но'},
  {jp: 'ト', ru: 'то'},
  {jp: 'ソ', ru: 'со'},
  {jp: 'コ', ru: 'ко'},
  {jp: 'オ', ru: '(в)о'}
]

export const hiragana = [
  {jp: 'あ', ru: 'а'},
  {jp: 'か', ru: 'ка'},
  {jp: 'さ', ru: 'са'},
  {jp: 'た', ru: 'та'},
  {jp: 'な', ru: 'на'},
  {jp: 'は', ru: 'ха'},
  {jp: 'ま', ru: 'ма'},
  {jp: 'や', ru: 'я'},
  {jp: 'ら', ru: 'ра'},
  {jp: 'わ', ru: 'ва'},
  {jp: 'が', ru: 'га'},
  {jp: 'ざ', ru: 'дза'},
  {jp: 'だ', ru: 'да'},
  {jp: 'ば', ru: 'ба'},
  {jp: 'ぱ', ru: 'па'},
  {jp: 'い', ru: 'и'},
  {jp: 'き', ru: 'ки'},
  {jp: 'し', ru: 'си'},
  {jp: 'ち', ru: 'ти'},
  {jp: 'に', ru: 'ни'},
  {jp: 'ひ', ru: 'хи'},
  {jp: 'み', ru: 'ми'},
  {jp: 'り', ru: 'ри'},
  {jp: 'ゐ', ru: 'ви'},
  {jp: 'ぎ', ru: 'ги'},
  {jp: 'じ', ru: 'дзи'},
  {jp: 'ぢ', ru: '(дзи)'},
  {jp: 'び', ru: 'би'},
  {jp: 'ぴ', ru: 'пи'},
  {jp: 'う', ru: 'у'},
  {jp: 'く', ru: 'ку'},
  {jp: 'す', ru: 'су'},
  {jp: 'つ', ru: 'цу'},
  {jp: 'ぬ', ru: 'ну'},
  {jp: 'ふ', ru: 'фу'},
  {jp: 'む', ru: 'му'},
  {jp: 'ゆ', ru: 'ю'},
  {jp: 'る', ru: 'ру'},
  {jp: 'ぐ', ru: 'ぐ'},
  {jp: 'ず', ru: 'дзу'},
  {jp: 'づ', ru: '(дзу)'},
  {jp: 'ぶ', ru: 'бу'},
  {jp: 'ぷ', ru: 'пу'},
  {jp: 'え', ru: 'э'},
  {jp: 'け', ru: 'кэ'},
  {jp: 'せ', ru: 'сэ'},
  {jp: 'て', ru: 'тэ'},
  {jp: 'ね', ru: 'нэ'},
  {jp: 'へ', ru: 'хэ'},
  {jp: 'め', ru: 'мэ'},
  {jp: 'れ', ru: 'рэ'},
  {jp: 'ゑ', ru: 'вэ'},
  {jp: 'げ', ru: 'гэ'},
  {jp: 'ぜ', ru: 'дзэ'},
  {jp: 'で', ru: 'дэ'},
  {jp: 'べ', ru: 'бэ'},
  {jp: 'ぺ', ru: 'пэ'},
]

export const generateQuestion = (a) => {
  const alphabet = a === 'katakana' ? katakana : hiragana;
  const question = alphabet[Math.floor(Math.random() * alphabet.length)];
  const variants = [];
  for (let i = 3; i >= 1; i--) {
    const item = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (variants.includes(item) || item.jp === question.jp) {
      i++
    } else {
      variants.push(item)
    }
  }
  variants.push(question);
  return {question: question, variants: shuffle(variants)}
}

export const generateQuestions = () => {
  const questions = [];
  for (let i = 10; i >= 1; i--) {
    const question = generateQuestion();
    if (questions.find(i => (i.question.jp === question.question.jp))) {
      i++
    } else {
      questions.push(question);
    }
  }
  return questions
}

const shuffle = (a) => {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}