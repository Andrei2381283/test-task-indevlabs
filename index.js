const findMissingNum = (arr) => {
  const obj = {}; // Make liniar memory algorithm but allows save liniar algorithm for time
  let minNum = Infinity; // Infinity is a convenient type for finding minimum number

  for(const num of arr) {
    if(obj[num]) throw 'Array has duplicates';
    obj[num] = true; // Put numbers to object for easy and fast access
    if(typeof num !== 'number') throw 'Array contains non number value'; // Non number values can break function, throw null
    if(num < minNum) minNum = num; // Find minimum number in array for ignore
  }
  for(const num of arr) {
    if(num === minNum) continue; // Ignore minimum number
    if(!obj[num - 2] && num > minNum + 2) throw 'Multiple answers'; // Throw null because array contains multiple missing values
    if(!obj[num - 1]) return num - 1; // Find expected number
  }

  return null; // Throw null if expected value not found
}

module.exports = findMissingNum;