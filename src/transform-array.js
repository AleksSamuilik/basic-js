const COMMAND = ['--discard-next','--discard-prev','--double-next','--double-prev'];

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error';
    };
    let result = [];
    let index = 0;
      while (index < arr.length) {
      if (arr[index] === COMMAND[0]) {
        index += 2;
      } else if (arr[index] ===  COMMAND[1]) {
        result.pop();
        index += 1;
      } else if (arr[index] ===  COMMAND[2]) {
        if (index + 1 < arr.length) {
          result.push(arr[index + 1], arr[index + 1]);
        }
        index += 2;
      } else if (arr[index] ===  COMMAND[3]) {
        if (index > 0) {
          result.push(arr[index - 1]);
        }
        index += 1;
      } else {
        result.push(arr[index]);
        index += 1;
      }
    }
    return result;
  };