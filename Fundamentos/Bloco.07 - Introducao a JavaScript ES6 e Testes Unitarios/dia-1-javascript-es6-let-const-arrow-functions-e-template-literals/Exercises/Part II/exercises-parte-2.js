const longestWord = text => {
  let longestWord = text.split(' ');
  let maxlength = 0;
  let result = '';

  for (word of longestWord) {
    if(word.length > maxlength) {
      maxlength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));