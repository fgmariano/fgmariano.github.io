function myFunction() {
	var date = new Date;
	var seconds = date.getSeconds() + '';
	var minutes = date.getMinutes() + '';
	var hour = date.getHours() + '';

	var color = "#";
	if (hour.length != 2) {
		color = color + "0" + hour;
	} else {
		color = color + hour;
	}

	if (minutes.length != 2) {
		color = color + "0" + minutes;
	} else {
		color = color + minutes;
	}

	if (seconds.length != 2) {
		color = color + "0" + seconds;
	} else {
		color = color + seconds;
	}
	return color;
}

function getQuote() {
	var quotes = ["These are hard times for dreamers.", "Constantly talking isn't necessarily communicating.",
		"Adults are, like, this mess of sadness and phobias.", "Meet me... in Montauk...", 
		"The past is just a story we tell ourselves.", "We are only here briefly, and in this moment I want to allow myself joy.",
		"Não há ventos favoráveis para aqueles que não sabem onde querem chegar.",
		"The fool looks at a finger that points at the sky.",
		"I am nobody's little weasel.",
		"Suicide is a permanent solution to a temporary problem."];
	var x = Math.floor(Math.random()*10);
	document.getElementById("quote").innerHTML = quotes[x];
}

$(window).load(function() {
    getQuote();
});

window.setInterval(function(){
	var color = myFunction();
	$("body").css("background-color", color);
	document.getElementById("time").innerHTML = color;
}, 1000);