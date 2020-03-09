const   SEPARATOR     = '+',
        REPEATE_TIMES = 1,
        ADDITIONAL_SEPARATOR = '|',
        ADDITIONAL    = '',
        ADDITIONAL_REPEATE_TIMES = 1;

module.exports = function repeater( str, options ) {
    if (typeof str !== 'string' || !(str instanceof String)) {
        str = String(str);
      }

      let {
        repeatTimes: repTim = REPEATE_TIMES,
        separator: sep = SEPARATOR,
        addition: add = ADDITIONAL,
        additionRepeatTimes: addRepTim = ADDITIONAL_REPEATE_TIMES,
        additionSeparator: addSep = ADDITIONAL_SEPARATOR,
      } = options;

      
  if (typeof add !== 'string' || !(add instanceof String)) {
    add = String(add);
  }
  const addString = new Array(addRepTim).fill(add).join(addSep);
  return new Array(repTim).fill(`${str}${addString}`).join(sep);
};
