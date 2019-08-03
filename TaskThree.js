const obj1 = {
  sayHi: () => console.log('Hi!')
};

const obj2 = {
  showNumber: () => console.log(parseFloat(Math.random() * 100))
};

const obj3 = {
  showRandomSymbol: () => console.log(String.fromCharCode(parseFloat(Math.random() * 100)))
};

function MakeChain() {
  var arrOfArguments = [];
  for (var key in arguments) {
    arrOfArguments.push(arguments[key]);
  }
  for (var i = arrOfArguments.length - 1; i > 0; i--) {
    arrOfArguments[i].__proto__ = arrOfArguments[i - 1];

  }
  var inst = {};
  inst.__proto__ = arrOfArguments[arrOfArguments.length - 1];
  return inst;
}

const bigFatObject = MakeChain(obj1, obj2, obj3);

console.log('​bigFatObject', bigFatObject);
bigFatObject.sayHi();
bigFatObject.showNumber();
bigFatObject.showRandomSymbol();
