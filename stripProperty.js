/*
Strip property
*/ 
var object = {
    string: "Hi",
    yo: "hello"
}
function stripProperty(obj, prop) {
    // write your code here
    return obj[prop] ? delete obj[prop] && obj : obj;
}
  console.log(stripProperty(object, "blah"));
  
