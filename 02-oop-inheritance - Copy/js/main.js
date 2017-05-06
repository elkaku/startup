/*Exercise 9 */
import * as Actor from 'actor';
import * as eventEmitter from 'eventEmitter';
import * as logger from 'logger';
import * as movie from 'movie';

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

let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
aMovie.on('play', logger.log);

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