/**
 * Description Defisce se la parola è palindroma
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
    for (let i = 0; i < word.length/2; i++) {
        console.log(i);
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
};
