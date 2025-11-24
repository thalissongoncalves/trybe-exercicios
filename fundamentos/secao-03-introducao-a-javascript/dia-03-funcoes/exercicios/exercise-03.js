// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (phrase) => {
  const separatePhrase = phrase.split(' ');
  let biggestWord = "";
  for (index = 0; index < separatePhrase.length; index += 1) {
    if (separatePhrase[index].length > biggestWord.length) {
      biggestWord = separatePhrase[index]
    }
  }

  return biggestWord;
};