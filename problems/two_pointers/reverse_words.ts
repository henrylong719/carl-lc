export function reverseWords(sentence: string) {
  return sentence
    .split(' ')
    .filter((word) => !!word)
    .reverse();
}

// reverse words using double pointer
export function reverseWordsUsingDoublePointer(sentence: string) {
  const wordsArray = sentence.split(' ').filter((w) => !!w);

  let left = 0;
  let right = wordsArray.length - 1;

  while (left < right) {
    let temp = wordsArray[right];
    wordsArray[right] = wordsArray[left];
    wordsArray[left] = temp;

    left++;
    right--;
  }

  return wordsArray.join(' ');
}

console.log(reverseWordsUsingDoublePointer('Hello     World'));
