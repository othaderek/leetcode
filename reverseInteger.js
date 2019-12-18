// Reverse Integer function from LC
// 32bit signed integers only

const reverse = (int) => {
    let reversed;
    
    if (int < 0){
        reversed = int.toString().split('').reverse().join('');
        reversed = `-${reversed}`
    } else{
        reversed = int.toString().split('').reverse().join('');
    }
    
    reversed = parseInt(reversed);
    if ( reversed > 2147483647 || reversed < -2147483647){
        return 0;
    } else {
        return parseInt(reversed);
    }
}

reverse(123)
reverse(-123)
reverse(456)
reverse(-2147483648)

