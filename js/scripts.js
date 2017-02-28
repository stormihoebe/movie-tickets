
function Movie(name, age, time){
this.name = name;
this.age = age;
this.time = time;
};

var movieInput;
var ageInput;
var timeInput;
var movieInputObject;
var price;
Movie.prototype.Ticket = function() {
	if (ageInput === "Senior"){
		price = "$30"
	}else{
		price = "$50"
	};
	$("#resultMovie").text(movieInput);
	$("#resultAge").text("Age Range: " + ageInput );
	$("#resultTime").text("Showtime: " + timeInput );
	$("#resultPrice").text("Ticket Price: " + price);
};
$(function(){

$("#movieinfo").submit(function(event){
	event.preventDefault();
	movieInput = $("#movieName").val();
	ageInput = $("#age").val();
	timeInput =$("#timeOfDay").val();

movieInputObject = new Movie(movieInput, ageInput, timeInput);
console.log(ageInput);
movieInputObject.Ticket();

}); //submit function






});
