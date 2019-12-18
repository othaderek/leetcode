// Reverse Integer function from LC
// 32bit signed integers only

const reverse = (int) => {
    if (int > 2_147_483_647 || int < -2_147_483_647){
        console.log(0);
        return 0;
    }

    if (int < 0){
        let reversed = int.toString().split('').reverse().join('');
        let toNegative = `-${reversed}`
        console.log(parseInt(toNegative));
        
        return parseInt(toNegative);    
    } else{
        let reversed = int.toString().split('').reverse().join('');
        console.log(parseInt(reversed));
        return parseInt(reversed);
    }
    
}

reverse(123)
reverse(-123)
reverse(456)
reverse(-2147483648)

