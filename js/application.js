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
var qCount = 0;
var qCorrect = 0;
var questions = [q1,q2,q3,q4,q5];

function changeQuestion(){
	if(qCount >= questions.length){
		$('#answers').fadeOut();
		$('#infoBox').html('Quiz Complete: You Scored '+qCorrect+' of '+questions.length);
	} else {
		var question = questions[qCount];
		$('#infoBox').html(question.q);
		var html = "";
		for (var i = 0; i < question.a.length; i++) {
			html += "<p><input name='"+i+"' type='radio' id='"+i+"' />";
			html += "<label for='"+i+"'>"+question.a[i]+"</label></p>";
		};
		$('#answers').html(html);
	}
}

function checkAnswer(answer){
	var question = questions[qCount];

		if(question.correct == answer){
			qCorrect++;
		}

	console.log(qCorrect);

	qCount++;
	changeQuestion();
}

$(document).ready(function() {
	$("body").hover(function() {
		$("#content").fadeIn();
	});
	$( "#startButton" ).click(function( event ) {
		event.preventDefault();
		$("#infoBox").fadeOut(function() {
			$("#startButton").fadeOut(function() {
					changeQuestion();
					$("#answers").fadeIn();
					$("#infoBox").fadeIn();
			});
		});
		
		// qCount = 1;
	});
	$("#answers").on('click','input',function() {
		var answer = $(this).attr('name');
		checkAnswer(answer);
	});
});