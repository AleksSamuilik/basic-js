const SEASONS = ['winter', 'spring', 'summer', 'autumn'];

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date)) {
    throw new Error();
  }
let number = date.getMonth();
  if(number<11 && number>7){
    return SEASONS[3];
  } else if (number<8 && number>4){
    return SEASONS[2];
  } else if (number<5 & number>1){
    return SEASONS[1];
  } else {
    return SEASONS[0];
  }
};