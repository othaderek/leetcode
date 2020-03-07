const getCount = (str) => {
    let vowelsCount = 0;
    let vowelMap = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
    str.split("").forEach( char => vowelMap[char] === true ? vowelsCount += 1 : null)
    return vowelsCount
  }
  
  getCount('abracadabra')