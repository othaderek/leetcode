const plusMinus = arr => {
    let base = arr.length
    let objectMap = {'positive':0, 'negative':0, 'zero':0}
    arr.forEach(num => {
        num > 0 ? objectMap['positive']++ : null
        num < 0 ? objectMap['negative']++ : null
        num === 0 ? objectMap['zero']++ : null
    });
    return Object.values(objectMap).map( i => i/base);
}

plusMinus([1,23,0,-1,-1,-1,99,54,2,-13,-9])