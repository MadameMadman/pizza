function Pizza(size,cheese) {
  this.size = size;
  this.cheeze = cheese;
  this.baseCost = 0;
}

Pizza.prototype.makeCost = function(size, cheesee) {
  this.cost = parseInt(this.size + this.cheese);

};


//front-end section

$(document).ready (function(){

	$("#pizzaSubmit").click(function(){
    event.preventDefault();
  	var size = $("input[name=size]:checked").val()
    var cheese = $("input:checkbox[name=cheese]:checked").val()
    console.log(size, cheese);
    var myOrder = new Pizza(size, cheese);
  	$("#result").append("$" + parseInt(myOrder.makeCost()) + " ");
  });
});
