module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let array = str.split('');
  for (let i = 0; i < array.length; i++) {
    let brCon = bracketsConfig.filter( (elem) => elem.includes(array[i]))
    //console.log(brCon)
    let left = brCon[0][0];
    let right = brCon[0][1];
    if (left == right) {
      if (stack[stack.length - 1] == array[i]) {
        stack.pop();
      } else {
        stack.push(array[i]);
      }
    } else {
      if (array[i] == left) {
          stack.push(array[i])
          continue
      } else if (array[i] == right) {
         if (stack[stack.length -1] != left) {
            return false
          }
        stack.pop()
      }
    }
  }
  if (stack.length == 0) {
    return true
  } else {
    return false
  }
}
