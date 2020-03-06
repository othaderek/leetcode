const sockMerchant = (n, ar) => {
    let colorsMap = {};
    for (element of ar){
        colorsMap[element] = (colorsMap[element] || 0) + 1
    }

    let pairKeys = Object.keys(colorsMap).filter( key => colorsMap[key] > 1)
    let pairs = pairKeys.map( key => Math.floor(colorsMap[key]/2))
    let total = pairs.reduce( (a,b) => a+b)
    return total
}

let array = [1,2,3,4,4,4,3,3,2,0,9,12,23,3233,333,3,333]
sockMerchant(array.length, array)