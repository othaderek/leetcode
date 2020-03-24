function getNthFib(n) {
    // Write your code here.
      let total = 0;
      let previous = 0;
      let i = 0;
      while (i <= n){
          
          total === 0 ? total++ : null
          console.log('previous:', previous);
          console.log('current total',total);
          total = previous + total
          previous = total
          
          i++
        //   console.log(total)
      }
  }

  getNthFib(3)