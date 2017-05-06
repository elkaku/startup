/*Exercise 1*/

export default class Movie extends EventEmitter{
	
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

