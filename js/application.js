var q1 = {
	q: "What was Pepsi originally called?",
	a: ["Pepsi Cola","Brad's Drink","Pecsi","A Bully Drink"],
	correct: 1,
	fact: "Pepsi was created and developed in 1893 as Brad's Drink by Caleb Bradham."
}
var q2 = {
	q: "True or false: Pepsi is marketed as Pecsi in Argentina.",
	a: ["True", "False"],
	correct: 0,
	fact: "True! In 2009, Pepsi began marketing itself as Pecsi due to 25% of the population mispronouncing the name."
}
var q3 = {
	q: "What was the name of Pepsi's discontinued citrus flavored beverage, introduced in the early 90s?",
	a: ["Crystal Pepsi","Crystal by Pepsi","Pepsi Crystal","Pepsi Blue"],
	correct: 1,
	fact: '"Crystal by Pepsi" was introduced shortly after "Crystal Pepsi" was discontinued in 1993.'
}
var q4 = {
	q: "True or false: The red and blue Pepsi Globe logo is meant to model the concept of yin and yang.",
	a: ["True","False"],
	correct: 1,
	fact: "False! The Pepsi Globe was introduced to show support for WWII, but it caught on and became Pepsi's primary logo in 1945."
}
var q5 = {
	q: "What size of drink did Pepsi introduce?",
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
		$('#infoBox').fadeIn().html(question.q);
		var answersHtml = "";
		for (var i = 0; i < question.a.length; i++) {
			answersHtml += "<p><input name='"+i+"' type='radio' id='"+i+"' />";
			answersHtml += "<label for='"+i+"'>"+question.a[i]+"</label></p>";
		};
		$('#answers').html(answersHtml);
	}
}

function displayFact() {
	var question = questions[qCount];
	$("#infoBox").html(question.fact);
	$("#answers").html('<form action="#"><button id="nextButton" type="submit" class="btn waves-effect">Next Question</button></form>');
	$("#nextButton").on("click", function(event) {
		event.preventDefault();
		changeQuestion();
		checkAnswer(answer);
	})
}


function checkAnswer(answer){
	var question = questions[qCount];

		if(question.correct == answer){
			qCorrect++;
			$("#quizProgress > li:nth-child("+(qCount+1)+")").html("&#x2714;");
		} else {
			$("#quizProgress > li:nth-child("+(qCount+1)+")").html("&#x2718;");
		};
	qCount++;
}

$(document).ready(function() {
	$( "#startButton" ).on('click',function( event ) {
		event.preventDefault();
		$("#infoBox").fadeOut(function() {
			$("#startButton").fadeOut(function() {
					changeQuestion();
					$("#answers").fadeIn();
					$("#infoBox").fadeIn();
			});
		});
	});
		$("#answers").on('click','input',function() {
		var answer = $(this).attr('name');
		displayFact();
		checkAnswer(answer);
	});
});