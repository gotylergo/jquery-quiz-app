var q1 = {
	q: "What was Pepsi originally called?",
	qNo: 1,
	a: ["Pepsi Cola","Brad's Drink","Pecsi","A Bully Drink"],
	correct: 1,
	fact: "Pepsi was created and developed in 1893 as Brad's Drink by Caleb Bradham."
}
var q2 = {
	q: "True or false: Pepsi is marketed as Pecsi in Argentina.",
	qNo: 2,
	a: ["True", "False"],
	correct: 0,
	fact: "True! In 2009, Pepsi began marketing itself as Pecsi due to 25% of the population mispronouncing the name."
}
var q3 = {
	q: "What was the name of Pepsi's discontinued citrus flavored beverage, introduced in the early 90s?",
	qNo: 3,
	a: ["Crystal Pepsi","Crystal by Pepsi","Pepsi Crystal","Pepsi Blue"],
	correct: 1,
	fact: '"Crystal by Pepsi" was introduced shortly after "Crystal Pepsi" was discontinued in 1993.'
}
var q4 = {
	q: "True or false: The red and blue Pepsi Globe logo is meant to model the concept of yin and yang.",
	qNo: 4,
	a: ["True","False"],
	correct: 1,
	fact: "False! The Pepsi Globe was introduced to show support for WWII, but it caught on and became Pepsi's primary logo in 1945."
}
var q5 = {
	q: "What size of drink did Pepsi introduce?",
	qNo: 5,
	a: ["6.5 ounce", "20 ounce","1 liter","2 liter"],
	correct: 3,
	fact: "PepsiCo introduced the first two-liter sized soft drink bottle in 1970."
}
var qCount
var qCorrect
function startGame() {
	qCount = 0;
	qCorrect = 0;
	$("#infoBox").html(q1.q);
	alert("startGame");
};

$(document).ready(function() {
	$("body").hover(function() {
		$("#content").fadeIn();
	});
	$( "#startButton" ).click(function( event ) {
	event.preventDefault();
	$("#infoBox").fadeOut(function() {
		$(this).html(q1.q).fadeIn();
	});
	$("#startButton").fadeOut(function() {
			$("#answers").fadeIn();
	});
	qCount = 1;
	});
	$("#answers").submit(function() {
		alert("it works");
	});
});