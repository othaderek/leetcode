const fib = (n) => {
    if (n === 2){
        return 1
    } else if (n === 1){
        return 0
    } else {
        return fib(n-1) + fib(n -2)
    }
}

fib(6)