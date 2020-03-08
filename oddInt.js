const findOdd = (array) => {
    let numberMap = {};
    for (let e of array){
        numberMap[e] = (numberMap[e] || 0) + 1
    }
    return Number(Object.keys(numberMap).filter( key => numberMap[key] % 2 != 0));
}

findOdd([1,1,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8])
