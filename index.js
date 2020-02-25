// Code your solution here!

function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    let substring = str.substring(1, str.length);
    printString(substring);
  }
  return;
}

function reverseString(str) {
  // return (str === '') ? '' : reverseString(str.substring(1)) + str[0];
  if (str === ''){
    return ''
  }
  return reverseString(str.substring(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}

function addUpTo(arr, i) {
  if (i > 0) {
    return arr[i] + addUpTo(arr, i - 1)
  }
  return arr[i];
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  return (arr[0] > arr[arr.length - 1])
    ? maxOf(arr.slice(0, arr.length - 1))
    : maxOf(arr.slice(1))
}

function includesNumber(arr, num) {
  if (arr.length > 0) {
    return (arr[0] === num)
      ? true
      : includesNumber(arr.slice(1), num)
  }
  return false
}
