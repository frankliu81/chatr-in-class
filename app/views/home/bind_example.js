var cookie = {
  sugar: 10,
  flour: 10,
  calorieCount: function(){
    return this.sugar * 4 + this.flour * 3.5;
  }
};

var myMethod = function(){
  var cookie = {
    sugar: 10,
    flour: 10,
    calorieCount: function(){
      return this.sugar * 4 + this.flour * 3.5;
    }//.bind({sugar: 5, flour: 5})  // find with a different object, change what
                                  // this means.  this is actually just a javascript
                                  // object with curly braces
  }
  return cookie.calorieCount();
}

// without the bind, this references the cookie object
// myMethod() returns 75

// after bind, this references {sugar: 5, flour: 5};
// myMethod() returns 37.5
// 5*4 + 5*3.5 = 37.5

var cookie1 = {
  sugar: 10,
  flour: 10,
  info: function(){
    // let's say you have a neseted function
    var nestedFunction = function() {
      // what is this?
      // this is actually goes to the global object in nested function
      // it returns the windows object
      //console.log(this);
    }
    nestedFunction();
    return "This cookie has " + this.sugar + " g of sugar and " + this.flour +
    "g of flour";
  }
}
cookie1.info();
