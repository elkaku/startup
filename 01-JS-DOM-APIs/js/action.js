/*Button function*/

document.getElementById("aButton").addEventListener("click", jokeApiConnect);

function jokeApiConnect(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://api.icndb.com/jokes/random",false);
	xhr.send();	


	var obj=JSON.parse(xhr.responseText);
	document.getElementById("mainSection").innerHTML=obj[0].joke;//Improve, we need the joke content not the object
}