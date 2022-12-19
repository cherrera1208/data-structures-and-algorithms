'use strict';

function validateBrackets(string) {

  if (!string) return 'Enter a String';

  const open = ['[', '(', '{'];
  const closed = [']', ')', '}'];
  const bracketStack = [];


  const stringArr = string.split('');

  for (let i = 0; i < stringArr.length; i++) {
    if (open.includes(stringArr[i])) {
      bracketStack.push(stringArr[i]);
    }
    if (closed.includes(stringArr[i])) {
      if (bracketStack.length === 0) {
        return false;
      } else {
        let openBrktIndex = open.indexOf(bracketStack.pop());
        let closedBrktIndex = closed.indexOf(stringArr[i]);
        if (openBrktIndex !== closedBrktIndex) return false;
      }
    }
  }
  if (bracketStack.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  validateBrackets,
};
