/*Exercise 9 */
/*import * as Actor from 'actor';
import * as eventEmitter from 'eventEmitter';
import * as logger from 'logger';
import * as movie from 'movie';
*/

/*Exercise 3*/

class EventEmitter {
	
	constructor(){
		this.eventList = {};
	}

	on (eventName, cb){ //What to call when the event is emitted
	if(!this.eventList[eventName]){
		this.eventList[eventName] = [];	//If there are no function array for this event, we create it
	}
	this.eventList[eventName].push(cb); //We insert the callback function to be executed in the event functionts list
	console.log("added function "+cb+" at " + this.eventList[eventName] +" event");
	}

	emit (eventName){ //Event catcher
		if(this.eventList[eventName]){ //We check if there is an array of functions for this event
			this.eventList[eventName].forEach(fn =>{ //We call the functions for this event
				console.log('executing event functions')
				fn.call();
				console.log('functions executed')
			})
		}
	}

	off (eventName) { //Deletes the event
	this.eventList.pop(eventName);
	}
}

/*Exercise 1*/

class Movie extends EventEmitter{
	
	constructor(title, year, duration){
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.cast = [];
	}

	play(){
		super.emit('play')
	}

	pause(){
		super.emit("pause")
	}

	resume(){
		super.emit("play")
	}

	addCast(actors){
		if (Array.isArray(actors)) {
			for (let i = 0; i < actors.length; i++) {
				this.cast.push(actors[i].name);
			}
		}
		else{
		this.cast.push(actors)
		}
	}
};

/*Exercise 5*/

class Logger {

	log(info){
		console.log("some info " + info); //fix
	}

}

/*Exercise 7*/

class Actor {
	constructor(name,lastName){
		this.name = name;
	}
}


/*Exercise 2*/

let aMovie = new Movie ("Sharknado",2015,125);

function playMovie(){
	aMovie.play();
	console.log(aMovie.title,aMovie.year,aMovie.duration);
	console.log(aMovie);	
}

function pauseMovie(){
	aMovie.pause();
}

function resumeMovie(){
	aMovie.resume();
}

/*Exercise 6*/
let Social = {
	share: function (name){
		console.log("Share " + this.title + " with "+name);
	},

	likes: function (name){
		console.log(name + " likes " + this.title);
	}
}


/*Testing*/


aMovie.on('play', fn => {aMovie.play});
aMovie.emit('play');

const emitter = new EventEmitter();
emitter.emit('play');

/*Fix logger*/
/*let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
logger.log = 'this is the loggers log';
terminator.on('play', logger.log);
terminator.play();*/

aMovie = Object.assign(aMovie,Social);
aMovie.share("Mike Wazowsky");
aMovie.likes("The other blue monster");

let actorsArray = [
  new Actor('Paul Winfield'),
  new Actor('Michael Biehn'),
  new Actor('Linda Hamilton')
];

aMovie.addCast('Chuck Norris');
aMovie.addCast(actorsArray);
console.log(aMovie.cast);

aMovie.play();