function Animator (rate) {
	var self = this;
	var frameRate = rate;
	
	this.queue = [];
	this.timer = null;
	this.push = function(animation) {
		self.queue.push(animation);
		animation.active = true;
	}

	this.animate = function () {
		var counter = 0;
	    for (var i=counter; i<self.queue.length; i++) {
	      if (self.queue[i].active) {
	        self.queue[i].animate();
	        counter = i;
	        break;
	      }
	    }

	    if (self.timer == null) {
	    	console.log("it stop");
	      	self.stop();
	    } 
	}

	this.start = function () {
		if (self.timer || self.active) {
			return false
		}
		self.active = true;
		self.timer = setInterval(self.animate, frameRate);
	}

	this.stop = function () {
		clearInterval(self.timer);
		self.timer = null;
		self.active = false;
		self.queue = [];
	}


}


function Animation(animator, args) {
	/*
	args = {
		start:
		end:
		duration:
		animation:
		onComplete:
	}
	*/

	function createDuration(start, end, duration) {
		var smoothing = []
		for (var i = 0; i < duration/3; i++) {
			smoothing.push(i);
		};
		for (var i = 0; i < duration- 2*(duration/3); i++) {
			smoothing.push(Math.ceil(duration/3));
		};
		for (var i = Math.floor(duration/3); i >= 0; i--) {
			smoothing.push(i);
		};


		var animation = [start];
		var difference = end - start;
		var summation = smoothing.reduce((a,b) => a+b);
		console.log("sum is" + String(summation));
		var temp = start;
		for (var i = 1; i < smoothing.length; i++) {
			temp += difference*smoothing[i]/summation
			
			animation[i] = temp;
		};
		
		return animation;
	}

	var self = this;
	this.animation = args.animation;
	this.onComplete = args.onComplete;
	this.aCoordinate = createDuration(args.start, args.end, args.duration);

	this.frameCount = this.aCoordinate.length;
	this.frame = 0;
	this.active = false;

	this.animate = function() {
    	if (self.active) {
      		if (self.animation) {
        		self.animation(self.aCoordinate[self.frame]);
      		}
      		self.frame += 1;
      		if (self.frame >= self.frameCount-1) {
        		self.active = false;
        		self.frame = 0;
        		self.onComplete();
        		return false;
      		}
      		return true;
    	}
    	return false;
  	}

	this.start = function () {
		animator.push(self);
		if (!animator.active) {
			animator.start();
		}
	}

	this.stop = function() {
		self.active = false;
	}

	
}