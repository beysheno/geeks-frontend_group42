function charCount(str, x) {
  return str.toLowerCase().split(x).length - 1;
}
console.log(charCount("Abrakadabra", "a"));

function hidePhone(num) {
  let newNum = num.slice(0, -2) + "XX";
  return newNum;
}
console.log(hidePhone("+996 555 123 123"));
