/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if (str.length <= 1) {
    return true;
  }

  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
}

export {isPalindrome};

/*
isPalindrome("tacodog")
-> false + isPalindrome("acoca")

isPalindrome("acoca")
-> true + isPalindrome("coc")

isPalindrome("coc")
-> true + isPalindrome("o")

isPalindrome("o")
-> Returns: true


*/
