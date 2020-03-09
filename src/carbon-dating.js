const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOG_2 = 0.693;
module.exports = function dateSample(sampleActivity) {
  let number = Number(/-?\d+\.?\d*/.exec(sampleActivity));
  if (number > 0 && number < MODERN_ACTIVITY && typeof number !== 'NaN' && typeof sampleActivity === 'string') {
    return Math.ceil(HALF_LIFE_PERIOD / (LOG_2 / Math.log(MODERN_ACTIVITY / number) ));
  }
  return false;
};