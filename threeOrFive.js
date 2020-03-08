const solution = (n) => {
    let i = 0;
    let arr = [];
    while (i < n){
        i % 3 === 0 || i % 5 === 0 ? arr.push(i) : null;
        i++
    }
    console.log(arr.reduce((a,b) => a+b));
}


solution(234)