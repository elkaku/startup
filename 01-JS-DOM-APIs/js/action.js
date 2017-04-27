/*Button function*/

document.getElementById("aButton").addEventListener("click", jokeApiConnect);

function jokeApiConnect(){
	var xhr = new XMLHttpRequest();	//creating the object
	xhr.responseType='json'; //telling the object wich response type is going to get

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			document.getElementById("mainSection").innerHTML=xhr.response.value.joke; //accesing and showing the JSON object
		}
	}
	xhr.open("GET", "http://api.icndb.com/jokes/random", true);
	xhr.send();		
}

function makeCall(url){
	
	return new Promise(function(resolve,reject)){
		var xhr = new new XMLHttpRequest();
		xhr.open('GET', url);

		xhr.onload = function(){
			
		}

	}
}