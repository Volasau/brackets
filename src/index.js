module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const open = ["(", "[", "{", "|", "1", "3", "5", "7", "8"];
  const close = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let count = str[i];
    if (open.includes(count)) {
      stack.push(count);
    } else {
      if (stack.length == 0) {
        return false;
      }

      let topEl = stack[stack.length - 1];

      if (close[count] === topEl) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
