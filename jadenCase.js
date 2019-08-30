/*
  Jaden Case
  Given a string, capitalize the first lwetter of every word.
  Like Jaden Smith would.

*/


String.prototype.toJadenCase = function () {
  //...
  var arr = this.split(" ")
  for (let i = 0; i < arr.length; i++){
      var strArr = arr[i].split("")
      var firstCapital = strArr.shift().toUpperCase()
      strArr.unshift(firstCapital)
      arr[i] = strArr.join("");
  }
  console.log(arr.join(" "));
  return arr.join(" ");
};

var str1 = "str str"
var str2 = "almost time to Go to work lol"
str1.toJadenCase();
str2.toJadenCase();
