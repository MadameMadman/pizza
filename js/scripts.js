var topping = [];

function Pizza(size,topping) {
  this.size = size;
  this.topping = topping;
  this.price;
};

Pizza.prototype.makeCost = function() {
  this.price = 12;
    if (this.size === 'small') {
      this.price -= 3;
    } else if (this.size === 'medium') {
      this.price += 3;
    } else if (this.size === 'large') {
      this.price += 10;
    }
    for (var i = 0; i < this.topping.length; i++) {
    this.price += 2;
  }

}

Pizza.prototype.shortDescription = function() {
  return this.size + " " + this.topping + " pizza: $" + this.price;
}


//front-end section

$(document).ready (function(){

	$("form#pizzaSubmit").submit(function(event){
    event.preventDefault();
  	var size = $("input[name=size]:checked").val();
    if (!size) {
      alert("please enter a size");
    return false;
  };
    var topping = $("input[name='topping']:checked").map(function() {
        return this.value;
      }).get();
    var newPizza = new Pizza(size, topping);
    newPizza.makeCost();
  	$("ul#result").append("<li> " + newPizza.shortDescription() + "</li>");

  });


});
