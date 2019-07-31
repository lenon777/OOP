const obj1 = {
    sayHi: () => console.log('Hi!')
   };
   
   const obj2 = {
    showNumber: () => console.log(parseFloat(Math.random() * 100))
   };
   
   const obj3 = {
    showRandomSymbol: () => console.log(String.fromCharCode(parseFloat(Math.random() * 100)))
   };
   function makeChain(){
       console.log(arguments)
       for(var key in arguments) {
        console.log(arguments[key])
        //makeChain.prototype = Object.create(arguments[key].prototype);
       }
    //    if (!(this instanceof makeChain)){
    //     return new makeChain();
   //}
   }

   const bigFatObject = makeChain(obj1, obj2, obj3);
   
   console.log('​bigFatObject', bigFatObject);
   bigFatObject.sayHi();
   bigFatObject.showNumber();
   bigFatObject.showRandomSymbol();
   