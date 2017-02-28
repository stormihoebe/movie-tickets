
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
	$("#result").html("Movie Name: " + movieInput +"<br>"+ " Age Range: " + ageInput + "<br>"+" Time of Day: " + timeInput + "<br>"+" Your ticket price is " + price);
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
