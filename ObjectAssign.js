function myAssign(currentObj) {
  var arrOfArguments = [];
  for (var key in arguments) {
    arrOfArguments.push(arguments[key]);
  }
  for (var i = 1; i < arrOfArguments.length; i++) {
    for (var key in arrOfArguments[i]) {
      if(arrOfArguments[i].hasOwnProperty(key)){
        currentObj[key] = arrOfArguments[i][key];
      }
    }
  }
  return currentObj;
}
var asd = {
  a: "aaa",
  b: "bbb",
  c: "ccc"
}
var qwe = {
  z: "zzz",
  q: "qqq"
}

var zxc = {
  z: "zzz",
  a: "aaaAAA",
  p: "ppp",
  o: "oooooPPP"
}
qwe.__proto__ = zxc;
var newObj = myAssign({},asd,qwe);