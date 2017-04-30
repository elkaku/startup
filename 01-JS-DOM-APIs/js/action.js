/*Exercise 6 - Button function*/

document.getElementById("aButton").addEventListener("click", ApiConnect);

function ApiConnect(){
	const xhr = new XMLHttpRequest();	//creating the object
	xhr.responseType='json'; //telling the object wich response type is going to get

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			document.getElementById("mainSection").innerHTML=xhr.response.value.joke; //accesing and showing the JSON object
		}
	}
	xhr.open("GET","http://api.icndb.com/jokes/random", true);
	xhr.send();		
}

/*Exercise 7 reusable function*/

const makeCall = config => {

	const promise = new Promise((resolve, reject) =>{ //promise is created
		
		const xhr = new XMLHttpRequest(); //connection object
		
		xhr.onload = function() {
			if (xhr.status == 200) {
				resolve(xhr.responseText); // sets te resolve of the promise to the response text received
			}
			else{
				reject(); //executes reject code
			}
		};

		xhr.onerror = function(){
			reject();	//if connection fails, prints reject code
		};

		xhr.open("GET", config.url,true); //uses the config object url
		xhr.send(); //connects

	});

	return promise; //returns the promise
};

const printHtmlData = (id,text) =>{ // prints the data in html, receives the id of the element and the text to print
	document.getElementById(id).innerHTML = text;
	};

const getDataAndPrint = (configObject) => { //main function, recevies the config and calls the others
  printHtmlData("joke", "");	//clears the html elements by ID
  printHtmlData("error", "");
  
	makeCall(configObject) //calls the connection function
	  .then(result => {
	    const data = JSON.parse(result); //how does it knows the response?
	    printHtmlData("joke", data.value.joke);  //assings response JSON to data and calls the print function
	  })
	  .catch(() => {
	    printHtmlData("error", "Request Error");  //in case of failure (I.E: url not found), prints the request error message
	    document.getElementById('mainSection').style.background = "Red"; //how do i target all section elements? (Exercise 8)
	  });  
}

const getJoke = () => {		//functions called from the html
  getDataAndPrint(configCorrect)
}

const getJokeWIthError = () => {
  getDataAndPrint(configFail)
}

const configCorrect = { //testing values
  url: "http://api.icndb.com/jokes/random" //config ubject url declared
};

const configFail = {
  url: "http://incorrect-url.com/"
};

/*End of exercise 7*/

/*Exercise 9*/

const repoUrl = {
	url:"https://api.github.com/search/repositories?q=JavaScript"
}

const getRepos = () => {
	getRepoAndPrint(repoUrl);
}

const getRepoAndPrint = (configObject) => { //main function, recevies the config and calls the others
  printHtmlData("joke", "");	//clears the html elements by ID
  printHtmlData("error", "");
  
	makeCall(configObject) //calls the connection function
	  .then(result => {
	    const data = JSON.parse(result); //how does it knows the response?
	    printHtmlData("repos", data.items[0].full_name);  //assings response JSON to data and calls the print function
	  })
	  .catch(() => {
	    printHtmlData("error", "Request Error");  //in case of failure (I.E: url not found), prints the request error message
	    document.getElementById('mainSection').style.background = "Red"; //how do i target all section elements? (Exercise 8)
	  });  
}