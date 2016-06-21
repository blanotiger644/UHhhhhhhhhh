var champ = [0];

window.onload = function() { //This places Event Listeners on all the headers. Headers should be replaced with images.
	var i = 1;
	while (i < 132) {
		var champId = document.getElementById(i);
		champ.push = 0;
		champId.addEventListener("click", function() { 
			choose(i); 
		});
		console.log("Added champ " + i + " to the array.");
		i++;
	};
	document.getElementById("top").addEventListener("click", topLane);
	document.getElementById("jg").addEventListener("click", jungle);
	document.getElementById("mid").addEventListener("click", midLane);
	document.getElementById("adc").addEventListener("click", botLane);
	document.getElementById("sup").addEventListener("click", support);
	document.getElementById("postSelect").addEventListener("click", generate);
};

var topLane = function() { //Should run checks on which champs can go top
	console.log("Top Lane Selected.");
	document.getElementById("top").style.color = "red";
	document.getElementById("jg").style.color = "white";
	document.getElementById("mid").style.color = "white";
	document.getElementById("adc").style.color = "white";
	document.getElementById("sup").style.color = "white";
	var topL = 1;
	var jgL = 0;
	var midL = 0;
	var botL = 0;
	var supL = 0;
};

var jungle = function() { //Should run checks on which champs can go jungle
	console.log("Jungle Selected.");
	document.getElementById("jg").style.color = "red";
	document.getElementById("top").style.color = "white";
	document.getElementById("mid").style.color = "white";
	document.getElementById("adc").style.color = "white";
	document.getElementById("sup").style.color = "white";
	var topL = 0;
	var jgL = 1;
	var midL = 0;
	var botL = 0;
	var supL = 0;
};

var midLane = function() { //Should run checks on which champs can go mid
	console.log("Mid Lane Selected.");
	document.getElementById("mid").style.color = "red";
	document.getElementById("top").style.color = "white";
	document.getElementById("jg").style.color = "white";
	document.getElementById("adc").style.color = "white";
	document.getElementById("sup").style.color = "white";
	var topL = 0;
	var jgL = 0;
	var midL = 1;
	var botL = 0;
	var supL = 0;
};

var botLane = function() { //Should run checks on which champs can go adc
	console.log("AD Carry Selected.");
	document.getElementById("adc").style.color = "red";
	document.getElementById("top").style.color = "white";
	document.getElementById("jg").style.color = "white";
	document.getElementById("mid").style.color = "white";
	document.getElementById("sup").style.color = "white";
	var topL = 0;
	var jgL = 0;
	var midL = 0;
	var botL = 1;
	var supL = 0;
};

var support = function() { //Should run checks on which champs can go support
	console.log("Support Selected.");
	document.getElementById("sup").style.color = "red";
	document.getElementById("top").style.color = "white";
	document.getElementById("jg").style.color = "white";
	document.getElementById("mid").style.color = "white";
	document.getElementById("adc").style.color = "white";
	var topL = 0;
	var jgL = 0;
	var midL = 0;
	var botL = 0;
	var supL = 1;
};

var choose = function(i) { //Selects the chosen champion
	var champId = document.getElementById(i);
	champ[i] = 1;
	console.log(i);
	console.log(champ[i]);
	champId.removeEventListener("click", choose(i), true);
	champId.addEventListener("click", function(i) {
		mistake(i);
	});
	champId.style.color = "red";
	console.log("Champ " + i + " Selected.");
};

var mistake = function(i) {
	var champId = document.getElementById(i);
	champ[i] = 0;
	console.log(i);
	console.log(champ[i]);
	champId.removeEventListener("click", mistake(i), true);
	champId.addEventListener("click", function(i) {
		choose(i);
	});
	champId.style.color = "white";
	console.log("Champ " + i + " Selected.");
};

var generate = function() { //Will be the function to display which champs can go where
	if (topL = 1) {
		console.log("Top Champion here.");
	} else if (jgL = 1) {
		console.log("Jungle Champion here.");
	} else if (midL = 1) {
		console.log("Mid Champion here.");
	} else if (botL = 1) {
		console.log("Bot Champion here.");
	} else if (supL = 1) {
		console.log("Support Champion here.");
	} else {
		console.log("Error Occured");
	};
};