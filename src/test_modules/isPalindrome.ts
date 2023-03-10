export function isPalindromeUsingBuiltInFunc(str: string): boolean {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Reverse the string and compare to the original
  return cleanStr === cleanStr.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  // Remove all non-alphanumeric characters and convert to lowercase
  let cleanStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/[a-zA-Z0-9]/.test(char)) {
      cleanStr += char.toLowerCase();
    }
  }

  // check is Palindrome
  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr.charAt(i) !== cleanStr.charAt(cleanStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
