/*Exercise 3*/

export default class EventEmitter {
	
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