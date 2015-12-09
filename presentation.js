function draw () {

	

	var graphData = [{
		title: {
		text: "Aplysia's withdrawal after training"
		},
		axisX: {
		title: "Days after training",
		minimum: 0,
		maximum: 7.5
		},
		axisY: {
		title: "Duration of withdrawal (%)",
		titleFontSize: 20,
		minimum: 0,
		maximum: 1000
		},
		data: [{
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "Control",
		dataPoints: [
		{x: 0, y: 100},
		{x: 1, y: 95},
		{x: 4, y: 92}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "4 Single Shocks",
		dataPoints: [
		{x: 0, y: 100},
		{x: 1, y: 300},
		{x: 4, y: 150}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "4 trains per day for 4 days",
		dataPoints: [
		{x: 0, y: 100},
		{x: 1, y: 900},
		{x: 7, y: 750}
		]
		}]
	}, {
		title: {
		text: "EPSP Change with Protein Inhibitor"
		},
		axisX: {
		title: "Hours after Injection",
		minimum: 0,
		maximum: 27
		},
		axisY: {
		title: "EPSP Amplitude Change (%)",
		titleFontSize: 30,
		minimum: -25,
		maximum: 150
		},
		data: [{
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "Single Shock",
		dataPoints: [
		{x: 0, y: 0},
		{x: 1, y: 75},
		{x: 2, y: 1},
		{x: 3, y: -1},
		{x: 24, y: -2}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "5 Shocks",
		dataPoints: [
		{x: 0, y: 0},
		{x: 3, y: 150},
		{x: 24, y: 80}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "5 Shocks + Protein Inhibitor",
		dataPoints: [
		{x: 0, y: 0},
		{x: 1, y: 82},
		{x: 3, y: -1},
		{x: 24, y: -1}
		]
		}]
	}, {
		title: {
		text: "Long Term Memory with Injection of CRE"
		},
		axisY: {
		title: "EPSP Amplitude Change (%)",
		titleFontSize: 30,
		minimum: -20,
		maximum: 60
		},
		data: [{
		type: "column",
		dataPoints: [
		{y: -4, label: "No treatment"},
		{ y: 41, label: "5x5HT"},
		{y: -8, label: "5x5HT + CRE"}
		]
		}]
	}, {
		title: {
		text: "Synapse Specific Long Term Facilitation"
		},
		axisX: {
		title: "hours after training",
		minimum: 0,
		maximum: 72
		},
		axisY: {
		title: "EPSP Amplitude Change (%)",
		titleFontSize: 20,
		minimum: -10,
		maximum: 100
		},
		data: [{
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "Control",
		dataPoints: [
		{x: 0, y: 0},
		{x: 1, y: 75},
		{x: 2, y: 40},
		{x: 4, y: 50},
		{x: 12, y: 40},
		{x: 24, y: 90},
		{x: 48, y:80},
		{x:72, y:70}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "+ Emetine",
		dataPoints: [
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 4, y: 0},
		{x: 12, y: 0},
		{x: 24, y: 0}
		]
		}, {
		type: "line",
		showInLegend: true,
		lineThickness: 5,
		markerSize: 10,
		legendText: "+ Rapamycin",
		dataPoints: [
		{x: 0, y: 0},
		{x: 1, y: 65},
		{x: 2, y: 25},
		{x: 4, y: 65},
		{x: 12, y: 50},
		{x: 24, y: 75},
		{x: 48, y: 50},
		{x: 72, y: -8}
		]
		}]
	},];

	var width = window.innerWidth;
	var height = window.innerHeight;

	var customGraph = document.createElement("div");
	customGraph.id = "graph";
	customGraph.width = width-100;
	customGraph.height = height;
	customGraph.style.top = "0px";
	customGraph.style.left = "0px";
	customGraph.style.zIndex = "-1";


	


	var canvas = document.getElementById('presentation');

	document.body.insertBefore(customGraph, canvas);

	
	canvas.width = width;
	canvas.height = height;
	canvas.style.position = "absolute";
	canvas.style.top = "0px";
	canvas.style.left = "0px";

	canvas.addEventListener("click", mouseClick, false);

	var chart = new CanvasJS.Chart("graph",
    {
      theme: "theme2",
      title:{
        text: "test"
      },
      width: window.innerWidth-20,
      height: window.innerHeight*3/4,
      animationEnabled: false,
      axisX: {
		title: "Days after training",
		minimum: 0,
		maximum: 7
	},
      axisY:{
		title: "Duration of withdrawal (% of control)",
		minimum: 0,
		maximum: 1000
	},
      data: [{
		type: "line",
		showInLegend: true,
		legendText: "Control",
		dataPoints: [
		{x: 0, y: 100}
	
		]
	}, {
		type: "line",
		showInLegend: true,
		legendText: "4 Single Shocks",
		dataPoints: [
		{x: 0, y: 100}
		]
	}, {
		type: "line",
		showInLegend: true,
		legendText: "4 trains per day for 4 days",
		dataPoints: [
		{x: 0, y: 100}
		]
	}]
    });



	

	

	var languageImage = new Image();
	languageImage.src = "img/language.jpg";

	var bikeImage = new Image();
	bikeImage.src = "img/bike.jpg";

	var questionImage = new Image();
	questionImage.src = "img/question.jpg";

	var poetryImage = new Image();
	poetryImage.src = "img/poetry.jpg";

	var brainImage = new Image();
	brainImage.src = "img/brain.jpg";

	var kandelAplysiaImage = new Image();
	kandelAplysiaImage.src = "img/kandel_aplysia.jpg";

	var aplysiaImage = new Image();
	aplysiaImage.src = "img/aplysia.jpg";

	var siphonImage = new Image();
	siphonImage.src = "img/siphon.jpg";

	var kandelImage = new Image();
	kandelImage.src = "img/kandel.png";

	var gunImage = new Image();
	gunImage.src = "img/gun.jpg";

	var circuitImage = new Image();
	circuitImage.src = "img/circuit.jpg";

	var electricityImage = new Image();
	electricityImage.src = "img/electricity.png";

	var pkaImage = new Image();
	pkaImage.src = "img/pka.gif";

	var ionChannelImage = new Image();
	ionChannelImage.src = "img/ion_channel.png";

	var labDishImage = new Image();
	labDishImage.src = "img/lab_dish.jpg";

	var dnaImage = new Image();
	dnaImage.src = "img/DNA.jpg";

	var synapseImage = new Image();
	synapseImage.src = "img/synapse.jpg";

	var ribosomeImage = new Image();
	ribosomeImage.src = "img/ribosome.jpg";

	var context = canvas.getContext('2d');

	var animator = new Animator(20);
	var animations = [];
	var count = 0;

	var subtitle = true;

	function drawScaledImage(img) {
		var result = {}
		if (img.width/img.height >= width/height) {
			result.width = width;
			result.height = width*img.height/img.width;
			context.drawImage(img, 0, (height-result.height)/2.0, result.width, result.height);
			return;
		} else {
			result.height = height;
			result.width = height*img.width/img.height;
			context.drawImage(img, (width-result.width)/2.0, 0, result.width, result.height);
			return;
		}

	}

	function mouseClick() {
		animations[count].start();
		count++;
	}

	function nextAnimation() {
		animations[count].start();
		count++;
	}

	function animationInit(value) {
		context.clearRect(0,0,width, height);
		drawScaledImage(questionImage);
		context.fillStyle = "rgba(256, 256,256," + String(value) + ")";
		context.fillRect (0,0, width, height);
	}

	function newImage(subtitle, image, value) {
		context.clearRect(0,0,width, height);
		drawScaledImage(image);
		if (subtitle) {
			context.fillStyle = "rgba(0,0,0,0.5)";
			context.fillRect(0,height-100, width-20, 100);
			context.fillStyle = "rgb(256,256,256)";
			context.font = "25px Verdana";
			context.textAlign = "center";
			context.fillText(subtitle, width/2, height - 50, width);
		}
		context.fillStyle = "rgba(256, 256,256," + String(value) + ")";
		context.fillRect (0,0, width, height);
	}

	function newSubtitle(subtitle, image, value) {
		context.clearRect(0,0,width, height);
		drawScaledImage(image);
		if (subtitle) {
			context.fillStyle = "rgba(0,0,0,0.5)";
			context.fillRect(0,height-100, width-20, 100);
			context.fillStyle = "rgba(256,256,256," + String(value) + ")";
			context.font = "25px Verdana";
			context.textAlign = "center";
			context.fillText(subtitle, width/2, height - 50, width);
		}
	}

	function transformData(metaData) {
		var result = $.extend(true, {}, metaData);

		var temp = $.extend(true, [], metaData.data);
		function reduceData(original) {
			if (original.dataPoints.length > 0) {
				original.dataPoints = [original.dataPoints[0]];
			}
			return original
		}
		temp = temp.map(reduceData);
		result.data = temp;
		return result;

	}
	function setupGraph(subtitle, metaData, value) {

		console.log(subtitle);

		customGraph.style.opacity = 1;
		
		chart.options.title = metaData.title;
		chart.options.axisX = metaData.axisX;
		chart.options.axisY = metaData.axisY;
		chart.options.animationEnabled = false;
		chart.options.data = metaData.data;
		chart.render();

		context.clearRect(0,0,width, height);
		if (subtitle) {
			context.fillStyle = "rgba(0,0,0,0.5)";
			context.fillRect(0,height-100, width-20, 100);
			context.fillStyle = "rgb(256,256,256)";
			context.font = "25px Verdana";
			context.textAlign = "center";
			context.fillText(subtitle, width/2, height - 50, width);
		}
		context.fillStyle = "rgba(256, 256,256," + String(value) + ")";
		context.fillRect (0,0, width, height);
	}

	function graphSubtitle(subtitle, metaData, value) {

		customGraph.style.opacity = 1;
		
		chart.options.title = metaData.title;
		chart.options.axisX = metaData.axisX;
		chart.options.axisY = metaData.axisY;
		chart.options.animationEnabled = false;
		chart.options.data = metaData.data;
		chart.render();

		context.clearRect(0,0,width, height);
		if (subtitle) {
			context.fillStyle = "rgba(0,0,0,0.5)";
			context.fillRect(0,height-100, width-20, 100);
			context.fillStyle = "rgba(256,256,256," + String(value) + ")";
			context.font = "25px Verdana";
			context.textAlign = "center";
			context.fillText(subtitle, width/2, height - 50, width);
		}
	}

	function clearGraph() {
		nextAnimation()
		customGraph.style.opacity = 0;
	}

	

	function longTermMemory(subtitle, value) {
		if ((value >= 0) && (value < 1))  {
			context.clearRect(0,0,width, height);
			context.beginPath();
			context.arc(200, height/2, 100, 0, 2*Math.PI, true );
			context.stroke();
			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("5HT (Tail)", 200, height/2 + 10);
			context.drawImage(electricityImage, 200 + 100, height/2 - 100, 70, 70);
			
			context.beginPath();
			context.moveTo(300, height/2);
			context.lineTo(width - 350, height/2);
			context.stroke();

			context.beginPath();
			context.moveTo(width - 350, height/2);
			context.lineTo(width - 325, height/2 - 25);
			context.lineTo(width - 425, height/2 + 75);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 200, 100, 0, 2*Math.PI, true );
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Sensory", width - 300, 200 + 10);

			context.beginPath();
			context.moveTo(width-300, 300);
			context.lineTo(width-300, 400);
			context.lineTo(width - 200, 500);
			context.lineTo(width - 400, 500);
			context.lineTo(width-300, 400);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 670, 150, 0 , 2*Math.PI, true);
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Motor", width - 300, 670 + 10);

			context.fillStyle = "rgba(256, 256,256," + String(1-value) + ")";
			context.fillRect (0,0, width, height);
		}  else if (value < 2) {
			context.clearRect(0,0,width, height);
			context.beginPath();
			context.arc(200, height/2, 100, 0, 2*Math.PI, true );
			context.stroke();
			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("5HT (Tail)", 200, height/2 + 10);
			context.drawImage(electricityImage, 200 + 100 + (width/2)*(value-1), height/2 - 100, 70, 70);
			
			context.beginPath();
			context.moveTo(300, height/2);
			context.lineTo(width - 350, height/2);
			context.stroke();

			context.beginPath();
			context.moveTo(width - 350, height/2);
			context.lineTo(width - 325, height/2 - 25);
			context.lineTo(width - 425, height/2 + 75);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 200, 100, 0, 2*Math.PI, true );
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Sensory", width - 300, 200 + 10);

			context.beginPath();
			context.moveTo(width-300, 300);
			context.lineTo(width-300, 400);
			context.lineTo(width - 200, 500);
			context.lineTo(width - 400, 500);
			context.lineTo(width-300, 400);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 670, 150, 0 , 2*Math.PI, true);
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Motor", width - 300, 670 + 10);
		} else if (value < 3) {
			context.clearRect(0,0,width, height);
			context.beginPath();
			context.arc(200, height/2, 100, 0, 2*Math.PI, true );
			context.stroke();
			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("5HT (Tail)", 200, height/2 + 10);
			context.drawImage(electricityImage, 200 + 100 + (width/2), height/2 - 100, 70, 70);
			
			context.beginPath();
			context.moveTo(300, height/2);
			context.lineTo(width - 350, height/2);
			context.stroke();

			context.beginPath();
			context.moveTo(width - 350, height/2);
			context.lineTo(width - 325, height/2 - 25);
			context.lineTo(width - 425, height/2 + 75);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 200, 100, 0, 2*Math.PI, true );
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Sensory", width - 300, 200 + 10);

			context.beginPath();
			context.moveTo(width-300, 300);
			context.lineTo(width-300, 400);
			context.lineTo(width - 200, 500);
			context.lineTo(width - 400, 500);
			context.lineTo(width-300, 400);
			context.stroke();

			context.beginPath();
			context.arc(width - 300, 670, 150, 0 , 2*Math.PI, true);
			context.stroke();

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Motor", width - 300, 670 + 10);

			var t = value - 2;

			context.fillStyle = "rgb(256,256,256)";
			context.fillRect((width - 375)*(1-t), height/2*(1-t) , 75*(1-t) + t*width, 50*(1-t)+t*height);

			context.strokeRect((width - 375)*(1-t), height/2*(1-t) , 75*(1-t) + t*width, 50*(1-t)+t*height);
			function drawInsideRect(a, b, c, d) {
				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect((width - 375)*(1-t), height/2*(1-t) , 75*(1-t) + t*width, 50*(1-t)+t*height);
		} else if (value < 4) {
			var t = value - 3;
			context.clearRect(0,0,width, height);

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("5HT Neuron", 150, 100);


			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Presynaptic Synapse", width- 400, height - 300);

			context.textAlign = "center";
			context.fillStyle = "rgb(0,0,0)";
			context.font = "25px Verdana";
			context.fillText("Serotonin", 400, height/4);

			for (var i = 0; i < 3; i++) {

				var distance = 50;
				context.fillStyle = "rgb(256, 0, 0)";
				context.beginPath();
				context.arc( 200 + i*distance, height/3 - i*distance, 15, 0 , 2*Math.PI, true);
				context.fill();
			};


			context.fillStyle = "rgba(256, 256,256," + String(1-t) + ")";
			context.fillRect (0,0, width, height);
		

			function drawInsideRect(a, b, c, d) {
				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect(0,0,width, height);

		} else if (value < 5) {
			var t = value - 4;
			context.clearRect(0,0,width, height);

			context.textAlign = "center";
			context.fillStyle = "rgba(0, 0,0," + String(1-t) + ")";
			context.font = "25px Verdana";
			context.fillText("5HT Neuron", 150, 100);


			context.textAlign = "center";
			context.fillStyle = "rgba(0, 0,0," + String(1-t) + ")";
			context.font = "25px Verdana";
			context.fillText("Presynaptic Synapse", width- 400, height - 300);

			context.textAlign = "center";
			context.fillStyle = "rgba(0, 0,0," + String(1-t) + ")";
			context.font = "25px Verdana";
			context.fillText("Serotonin", 400, height/4);

			for (var i = 0; i < 3; i++) {

				var distance = 50;
				context.fillStyle = "rgb(256, 0, 0)";
				context.beginPath();
				context.arc( (200 + i*distance)*(1-t) + (500 + i*distance)*t  , (height/3 - i*distance)*(1-t) + t*(height/3 - i*distance + 300), 15, 0 , 2*Math.PI, true);
				context.fill();
			};

		

			function drawInsideRect(a, b, c, d) {
				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect(0,0,width, height);
		} else if (value < 6) {
			context.clearRect(0,0,width, height);

			var t = value - 5;

			

			

			if (t < 1/3) {

				context.beginPath();
				context.arc(700, height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgba(0, 256, 0,"+ String(t*3)+" )";
				context.fill();
				
				

				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0,"+ String(t*3)+" )";
				context.font = "20px Verdana";
				context.fillText("ATP", 700, height*2/3 + 10);

			} else if (t < 2/3) {

				context.beginPath();
				context.arc(700 - (t*3-1)*100, height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgba(0, 256, 0,"+ String(t*3)+" )";
				context.fill();
				
				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0,"+ String(2-t*3 )+" )";
				context.font = "20px Verdana";
				context.fillText("ATP", 700 - (t*3 - 1)*100, height*2/3 + 10);

			} else {

				context.beginPath();
				context.arc(700 - (3-3*t)*100, height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgba(0, 256, 0,"+ String(t*3)+" )";
				context.fill();
				
				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0,"+ String(t*3 - 2 )+" )";
				context.font = "20px Verdana";
				context.fillText("cAMP", 700 - (3-3*t)*100, height*2/3 + 10);
			}

			

			for (var i = 0; i < 3; i++) {

				var distance = 50;
				context.fillStyle = "rgb(256, 0, 0)";
				context.beginPath();
				context.arc(  (500 + i*distance)  ,  (height/3 - i*distance + 300), 15, 0 , 2*Math.PI, true);
				context.fill();
			};

			function drawInsideRect(a, b, c, d) {



				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect(0,0,width, height);
		} else if (value < 7) {
			var t = value - 6;
			context.clearRect(0,0,width, height);

			for (var i = 0; i < 3; i++) {

				var distance = 50;
				context.fillStyle = "rgba(256, 0, 0, " + String(1-t)+")";
				context.beginPath();
				context.arc(  (500 + i*distance)  ,  (height/3 - i*distance + 300), 15, 0 , 2*Math.PI, true);
				context.fill();
			};

			context.beginPath();
			context.arc(700 , height*2/3, 30, 0, 2*Math.PI, true);
			context.fillStyle = "rgb(0, 256, 0 )";
			context.fill();
				
			context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("cAMP", 700 , height*2/3 + 10);


			context.fillStyle = "rgba(256, 0, 256, "+String(t)+")";
			context.fillRect(800, height*2/3 - 100, 100, 200);

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(800, height*2/3, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(900, height*2/3, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgba(256, 0, 256, "+String(t)+")";
			context.beginPath();
			context.arc(900, height*2/3, 28, 0 , Math.PI*2, true);
			context.fill();

			context.textAlign = "center";
			context.fillStyle = "rgba(0, 0, 0,"+String(t)+" )";
			context.font = "20px Verdana";
			context.fillText("PKA", 850, height*2/3-50);


			function drawInsideRect(a, b, c, d) {



				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect(0,0,width, height);


		} else if (value < 8) {
			var t = value - 7;

			context.clearRect(0,0,width, height);

			
				
			


			context.fillStyle = "rgb(256, 0, 256)";
			context.fillRect(800, height*2/3 - 100, 100, 200);

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(800, height*2/3, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(900, height*2/3, 30, 0 , Math.PI*2, true);
			context.fill();


			context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("PKA", 850, height*2/3-50);


			if (t < 1/2) {
				context.beginPath();
				context.arc(700 + t*200 , height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgb(0, 256, 0 )";
				context.fill();

				context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("cAMP", 700 + t*200 , height*2/3 + 10);

				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(900, height*2/3, 28, 0 , Math.PI*2, true);
				context.fill();

			} else {
				context.beginPath();
				context.arc(800 , height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgb(0, 256, 0 )";
				context.fill();

				context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("cAMP", 800 , height*2/3 + 10);

				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(900 + (2*t-1)*100, height*2/3, 28, 0 , Math.PI*2, true);
				context.fill();

			}



			function drawInsideRect(a, b, c, d) {



				context.beginPath();
				context.moveTo(a, b+d/2);
				context.lineTo(a+d/2, b);
				context.stroke();

				context.beginPath();
				context.moveTo(a+c/8, b+d);
				context.lineTo(a+c/8+d, b);
				context.stroke();
			}

			drawInsideRect(0,0,width, height);

		} else if (value < 9) {
			var t = value - 8;
			context.clearRect(0,0,width, height);

			if (t < 1/2) {
				context.fillStyle = "rgb(256, 0, 256)";
				context.fillRect(800, height*2/3 - 100, 100, 200);

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(800, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(900, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();


				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("PKA", 850, height*2/3-50);

				context.beginPath();
				context.arc(800 , height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgb(0, 256, 0 )";
				context.fill();

				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("cAMP", 800 , height*2/3 + 10);

				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(1000, height*2/3*(1-2*t)+2*t*height , 28, 0 , Math.PI*2, true);
				context.fill();

				function drawInsideRect(a, b, c, d) {



					context.beginPath();
					context.moveTo(a, b+d/2);
					context.lineTo(a+d/2, b);
					context.stroke();

					context.beginPath();
					context.moveTo(a+c/8, b+d);
					context.lineTo(a+c/8+d, b);
					context.stroke();
				}

				drawInsideRect(0,0,width, height);

			} else {
				context.beginPath();
				context.moveTo(0, height/2);
				context.lineTo(width, height/2);
				context.stroke();

				context.beginPath();
				context.moveTo(0, height/2 + 200);
				context.lineTo(width, height/2 + 200);
				context.stroke();


				function roundedRect(x,y,width,height,radius){
					context.beginPath();
					context.moveTo(x,y+radius);
					context.lineTo(x,y+height-radius);
					context.quadraticCurveTo(x,y+height,x+radius,y+height);
					context.lineTo(x+width-radius,y+height);
					context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
					context.lineTo(x+width,y+radius);
					context.quadraticCurveTo(x+width,y,x+width-radius,y);
					context.lineTo(x+radius,y);
					context.quadraticCurveTo(x,y,x,y+radius);
					context.fill();
				}

				context.fillStyle = "rgb(0, 0, 256)";
				roundedRect(width/2 - 50, height/2 - 50, 40, 100, 10);
				roundedRect(width/2 + 10, height/2 - 50, 40, 100, 10);

				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("Calcium channel", width/2 , height/2 + 80);



				context.fillStyle = "rgb(256, 0, 256)";
				roundedRect(1000 - 50, height/2 - 50, 40, 100, 10);
				roundedRect(1000 + 10, height/2 - 50, 40, 100, 10);

				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("Potassium channel", 1000 , height/2 + 80);

				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(1000, 0*(1-2*t)+(2*t-1)*(height/2 - 50) , 28, 0 , Math.PI*2, true);
				context.fill();

			}

		} else if (value < 10) {
			var t = value - 9;

			context.clearRect(0,0,width, height);
			context.beginPath();
			context.moveTo(0, height/2);
			context.lineTo(width, height/2);
			context.stroke();

			context.beginPath();
			context.moveTo(0, height/2 + 200);
			context.lineTo(width, height/2 + 200);
			context.stroke();


			function roundedRect(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.fill();
			}

			context.fillStyle = "rgb(0, 0, 256)";
			roundedRect(width/2 - 50, height/2 - 50, 40, 100, 10);
			roundedRect(width/2 + 10, height/2 - 50, 40, 100, 10);

			context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("Calcium channel", width/2 , height/2 + 80);



			context.fillStyle = "rgb(256, 0, 256)";
			roundedRect(1000 - 50, height/2 - 50, 40, 100, 10);
			roundedRect(1000 + 10, height/2 - 50, 40, 100, 10);

			context.textAlign = "center";
			context.fillStyle = "rgb(0, 0, 0 )";
			context.font = "20px Verdana";
			context.fillText("Potassium channel", 1000 , height/2 + 80);

			context.fillStyle = "rgb(256, 0, 256)";
			context.beginPath();
			context.arc(1000, (height/2 - 50) , 28, 0 , Math.PI*2, true);
			context.fill();

			function arraw(x1, y1, x2, y2, size) {
				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.lineTo(x2-size, y2+size);
				context.moveTo(x2, y2);
				context.lineTo(x2+size, y2+size);
				context.stroke();
			}

			arraw(width/2, (height/2 + 100), width/2, (height/2 + 100)*(1-t) + (height/2-100)*t, 10 )


		} else if (value < 11) {
			var t = value - 10;
			context.clearRect(0,0,width, height);

			if (t< 1/2) {
				context.fillStyle = "rgb(256, 0, 256)";
				context.fillRect(800, height*2/3 - 100, 100, 200);

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(800, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(900, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();


				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("PKA", 850, height*2/3-50);

				context.beginPath();
				context.arc(800 , height*2/3, 30, 0, 2*Math.PI, true);
				context.fillStyle = "rgb(0, 256, 0 )";
				context.fill();

				context.textAlign = "center";
				context.fillStyle = "rgb(0, 0, 0 )";
				context.font = "20px Verdana";
				context.fillText("cAMP", 800 , height*2/3 + 10);

				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(1000, height*2/3*(1-2*t), 28, 0 , Math.PI*2, true);
				context.fill();

				function drawInsideRect(a, b, c, d) {



					context.beginPath();
					context.moveTo(a, b+d/2);
					context.lineTo(a+d/2, b);
					context.stroke();

					context.beginPath();
					context.moveTo(a+c/8, b+d);
					context.lineTo(a+c/8+d, b);
					context.stroke();
				}

				drawInsideRect(0,0,width, height);

			} else {
				context.beginPath();
				function roundedRectStroke(x,y,width,height,radius){
					context.beginPath();
					context.moveTo(x,y+radius);
					context.lineTo(x,y+height-radius);
					context.quadraticCurveTo(x,y+height,x+radius,y+height);
					context.lineTo(x+width-radius,y+height);
					context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
					context.lineTo(x+width,y+radius);
					context.quadraticCurveTo(x+width,y,x+width-radius,y);
					context.lineTo(x+radius,y);
					context.quadraticCurveTo(x,y,x,y+radius);
					context.stroke();
				}

				roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

				context.fillStyle = "rgb(256,0,0)";

				context.fillRect(width/6 + 100, 75, 300, 25);
				context.fillRect(width/6 + 500, 75, 300, 25);


				context.fillStyle = "rgb(256, 0, 256)";
				context.beginPath();
				context.arc(1000, height*(2-2*t) + (2*t-1)*150, 28, 0 , Math.PI*2, true);
				context.fill();


			}
			
		} else if (value < 12) {
			var t = value - 11;
			context.clearRect(0,0,width, height);

			if (t<1/2) {
				context.fillStyle = "rgba(256, 0, 256, "+String(1-2*t)+")";
				context.beginPath();
				context.arc(1000, 150, 28, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgba(0,0,256,"+ String(2*t)+ "  )";
				context.fillRect(width/6 + 850, 50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect(width/6+850, 75, 25, 25);

				context.textAlign = "center";
				context.fillStyle = "rgba(256, 256, 256, "+ String(2*t) + " )";
				context.font = "20px Verdana";
				context.fillText("CREB1", width/6+910 , 90);


			} else {

				context.fillStyle = "rgb(0,0,256 )";
				context.fillRect((width/6 + 850)*(2-2*t) + (2*t-1)*(width/6 + 750), 50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6 + 850)*(2-2*t) + (2*t-1)*(width/6 + 750), 75, 25, 25);

				context.textAlign = "center";
				context.fillStyle = "rgba(256, 256, 256, "+ String(2-2*t)+ " )";
				context.font = "20px Verdana";
				context.fillText("CREB1", width/6+910 , 90);

			}

			context.beginPath();
			function roundedRectStroke(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.stroke();
			}

			roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

			context.fillStyle = "rgb(256,0,0)";

			context.fillRect(width/6 + 100, 75, 300, 25);
			context.fillRect(width/6 + 500, 75, 300, 25);



		} else if (value < 13) {
			var t = value - 12;
			context.clearRect(0,0,width, height);
			function roundedRect(x,y,width,height,radius){
					context.beginPath();
					context.moveTo(x,y+radius);
					context.lineTo(x,y+height-radius);
					context.quadraticCurveTo(x,y+height,x+radius,y+height);
					context.lineTo(x+width-radius,y+height);
					context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
					context.lineTo(x+width,y+radius);
					context.quadraticCurveTo(x+width,y,x+width-radius,y);
					context.lineTo(x+radius,y);
					context.quadraticCurveTo(x,y,x,y+radius);
					context.fill();
			}


			if (t<1/2) {
				
				context.fillStyle = "rgba(0,256,0,"+String(2*t)+")";
				roundedRect(width/6 + 600, 125, 150, 25, 10);

				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0, "+ String(2*t) + " )";
				context.font = "20px Verdana";
				context.fillText("Ubiquitin C-terminal Hydrolase", width/6+700 , 175);


			} else {


				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0, "+ String(2-2*t) + " )";
				context.font = "20px Verdana";
				context.fillText("Ubiquitin C-terminal Hydrolase", width/6+700 , 175);


				context.fillStyle = "rgba(256, 0, 256,"+ String(2*t-1)+" )";
				context.fillRect(width/6+700, height*2/3 - 100, 100, 200);

				context.fillStyle = "rgb(256,256,256 )";
				context.beginPath();
				context.arc(width/6+700, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(width/6+800, height*2/3, 30, 0 , Math.PI*2, true);
				context.fill();


				context.textAlign = "center";
				context.fillStyle = "rgba(0, 0, 0,"+ String(2*t-1)+"  )";
				context.font = "20px Verdana";
				context.fillText("PKA", width/6+750, height*2/3-50);

				context.fillStyle = "rgba(256, 0, 256,"+ String(2*t-1)+" )";
				context.beginPath();
				context.arc(width/6+800, height*2/3, 28, 0 , Math.PI*2, true);
				context.fill();


				context.fillStyle = "rgb(0,256,0)";
				roundedRect(width/6 + 600, 125*(2-2*t) + (2*t-1)*height*2/3, 150, 25, 10);

			}

			context.fillStyle = "rgb(0,0,256 )";
			context.fillRect((width/6 + 750), 50, 100, 75);

			context.fillStyle = "rgb(256,256,256)";
			context.fillRect((2*t-1)*(width/6 + 750), 75, 25, 25);



			context.beginPath();
			function roundedRectStroke(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.stroke();
			}

			roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

			context.fillStyle = "rgb(256,0,0)";

			context.fillRect(width/6 + 100, 75, 300, 25);
			context.fillRect(width/6 + 500, 75, 300, 25);


		} else if (value < 14) {

			context.clearRect(0,0,width, height);
			var t = value - 13;


			context.fillStyle = "rgb(256, 0, 256 )";
			context.fillRect(width/6+700, height*2/3 - 100 - t*100, 100, 100);
			context.fillRect(width/6+700, height*2/3  + t*100, 100, 100)

			context.fillStyle = "rgb(256,256,256 )";
			context.beginPath();
			context.arc(width/6+700, height*2/3 - t*100, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(width/6+800, height*2/3 - t*100, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgb(256,256,256 )";
			context.beginPath();
			context.arc(width/6+700, height*2/3 + t*100, 30, 0 , Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgb(256,256,256)";
			context.beginPath();
			context.arc(width/6+800, height*2/3 + t*100, 30, 0 , Math.PI*2, true);
			context.fill();


			context.textAlign = "center";
			context.fillStyle = "rgba(0, 0, 0,"+ String(1-t)+"  )";
			context.font = "20px Verdana";
			context.fillText("PKA", width/6+750, height*2/3-50);

			context.fillStyle = "rgb(256, 0, 256 )";
			context.beginPath();
			context.arc(width/6+800, height*2/3, 28, 0 , Math.PI*2, true);
			context.fill();


			context.fillStyle = "rgb(0,256,0)";
			roundedRect(width/6 + 600, height*2/3, 150, 25, 10);



			context.fillStyle = "rgb(0,0,256 )";
			context.fillRect((width/6 + 750), 50, 100, 75);

			context.fillStyle = "rgb(256,256,256)";
			context.fillRect((2*t-1)*(width/6 + 750), 75, 25, 25);



			
			function roundedRectStroke(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.stroke();
			}

			roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

			context.fillStyle = "rgb(256,0,0)";

			context.fillRect(width/6 + 100, 75, 300, 25);
			context.fillRect(width/6 + 500, 75, 300, 25);

		} else if (value < 15) {
			var t = value - 14;
			context.clearRect(0,0,width, height);

			if (t<1/2) {
				context.fillStyle = "rgba(256, 0, 256, "+String(1-2*t)+" )";
				context.fillRect(width/6+700, height*2/3 - 100 - 100, 100, 100);
				context.fillRect(width/6+700, height*2/3  + 100, 100, 100)

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(width/6+700, height*2/3 - 100, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(width/6+800, height*2/3 - 100, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(width/6+700, height*2/3 + 100, 30, 0 , Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(256,256,256)";
				context.beginPath();
				context.arc(width/6+800, height*2/3 + 100, 30, 0 , Math.PI*2, true);
				context.fill();



				context.fillStyle = "rgba(256, 0, 256, "+String(1-2*t)+" )";
				context.beginPath();
				context.arc(width/6+800, height*2/3, 28, 0 , Math.PI*2, true);
				context.fill();


				context.fillStyle = "rgba(0,256,0, "+String(1-2*t)+")";
				roundedRect(width/6 + 600, height*2/3, 150, 25, 10);

				context.fillStyle = "rgba(0,256, 0, "+String(2*t)+" )";
				context.fillRect((width/6 + 500), 125, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6 + 500), 150, 25, 25);

				context.fillStyle = "rgba(0, 0, 0,"+String(2*t)+")";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("C/EBP", width/6+560, 170);





			} else {

				context.fillStyle = "rgb(0,256, 0)";
				context.fillRect((width/6 + 500)*(2-2*t) + (2*t-1)*(width/6+375), 125*(2-2*t) + (2*t-1)*50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6 + 500)*(2-2*t) + (2*t-1)*(width/6+375), 150*(2-2*t) + (2*t-1)*75, 25, 25);

				context.fillStyle = "rgba(0, 0, 0,"+String(2*t)+")";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("C/EBP", (width/6+560)*(2-2*t) + (2*t-1)*(width/6+375+60), 170*(2-2*t) + (2*t-1)*95);

			}




				context.fillStyle = "rgb(0,0,256 )";
				context.fillRect((width/6 + 750), 50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6 + 750), 75, 25, 25);


			



			
			function roundedRectStroke(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.stroke();
			}

			roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

			context.fillStyle = "rgb(256,0,0)";

			context.fillRect(width/6 + 100, 75, 300, 25);
			context.fillRect(width/6 + 500, 75, 300, 25);

		} else if (value <= 16) {
			var t = value - 15;
			context.clearRect(0,0,width, height);

			context.fillStyle = "rgb(0,256, 0)";
			context.fillRect((width/6+375), 50, 100, 75);

			context.fillStyle = "rgb(256,256,256)";
			context.fillRect((width/6+375), 75, 25, 25);

			context.fillStyle = "rgb(0, 0, 0)";
			context.textAlign = "center";
			context.font = "20px Verdana";
			context.fillText("C/EBP",(width/6+375+60), 95);

			context.fillStyle = "rgba(0, 256, 256, "+String(t)+")";
			context.beginPath();
			context.arc(width/6 + 200, 160, 40, 0, Math.PI*2, true);
			context.fill();

			context.fillStyle = "rgba(0, 0, 0, "+String(t)+")";
			context.textAlign = "center";
			context.font = "20px Verdana";
			context.fillText("EF1\u03b1",(width/6 + 200), 170);

			context.fillStyle = "rgb(0,0,256 )";
			context.fillRect((width/6 + 750), 50, 100, 75);

			context.fillStyle = "rgb(256,256,256)";
			context.fillRect((width/6 + 750), 75, 25, 25);

			
			function roundedRectStroke(x,y,width,height,radius){
				context.beginPath();
				context.moveTo(x,y+radius);
				context.lineTo(x,y+height-radius);
				context.quadraticCurveTo(x,y+height,x+radius,y+height);
				context.lineTo(x+width-radius,y+height);
				context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
				context.lineTo(x+width,y+radius);
				context.quadraticCurveTo(x+width,y,x+width-radius,y);
				context.lineTo(x+radius,y);
				context.quadraticCurveTo(x,y,x,y+radius);
				context.stroke();
			}

			roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

			context.fillStyle = "rgb(256,0,0)";

			context.fillRect(width/6 + 100, 75, 300, 25);
			context.fillRect(width/6 + 500, 75, 300, 25);


		} else {
			var t = value - 16;

			context.clearRect(0,0,width, height);

			if (t<1/3) {
				context.fillStyle = "rgb(0,256, 0)";
				context.fillRect((width/6+375), 50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6+375), 75, 25, 25);

				context.fillStyle = "rgb(0, 0, 0)";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("C/EBP",(width/6+375+60), 95);

				context.fillStyle = "rgb(0, 256, 256)";
				context.beginPath();
				context.arc(width/6 + 200, 160*(1-3*t) + 3*t*height, 40, 0, Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(0, 0, 0)";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("EF1\u03b1",(width/6 + 200), 170*(1-3*t) + 3*t*height);

				context.fillStyle = "rgb(0,0,256 )";
				context.fillRect((width/6 + 750), 50, 100, 75);

				context.fillStyle = "rgb(256,256,256)";
				context.fillRect((width/6 + 750), 75, 25, 25);

				
				function roundedRectStroke(x,y,width,height,radius){
					context.beginPath();
					context.moveTo(x,y+radius);
					context.lineTo(x,y+height-radius);
					context.quadraticCurveTo(x,y+height,x+radius,y+height);
					context.lineTo(x+width-radius,y+height);
					context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
					context.lineTo(x+width,y+radius);
					context.quadraticCurveTo(x+width,y,x+width-radius,y);
					context.lineTo(x+radius,y);
					context.quadraticCurveTo(x,y,x,y+radius);
					context.stroke();
				}

				roundedRectStroke(width/6, -200, width*2/3, height/2, 50);

				context.fillStyle = "rgb(256,0,0)";

				context.fillRect(width/6 + 100, 75, 300, 25);
				context.fillRect(width/6 + 500, 75, 300, 25);

			} else if (t<2/3) {

				context.beginPath();
				context.moveTo(0, height/2 + 200);
				context.lineTo(width, height/2 + 200);
				context.moveTo(width/2, 0);
				context.lineTo(width/2, height/2-100);
				context.lineTo(width/2 - 250, height/2 + 150);
				context.moveTo(width/2 - 350, height/2 + 150);
				context.lineTo(width/2 - 150, height/2 + 150);
				context.stroke();

				context.fillStyle = "rgb(0, 256, 256)";
				context.beginPath();
				context.arc(width/2 + 60, (3*t-1)*( height/2-100), 40, 0, Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgb(0, 0, 0)";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("EF1\u03b1",(width/2 + 60), (3*t-1)*( height/2-90));

			} else {
				context.beginPath();
				context.moveTo(0, height/2 + 200);
				context.lineTo(width, height/2 + 200);
				context.moveTo(width/2, 0);
				context.lineTo(width/2, height/2-100);
				context.lineTo(width/2 - 250, height/2 + 150);
				context.moveTo(width/2 - 350, height/2 + 150);
				context.lineTo(width/2 - 150, height/2 + 150);
				context.stroke();

				context.fillStyle = "rgba(0, 256, 256, "+String(3-3*t)+")";
				context.beginPath();
				context.arc(width/2 + 60, ( height/2-100), 40, 0, Math.PI*2, true);
				context.fill();

				context.fillStyle = "rgba(0, 0, 0, "+String(3-3*t)+")";
				context.textAlign = "center";
				context.font = "20px Verdana";
				context.fillText("EF1\u03b1",(width/2 + 60), ( height/2-90));

				function synapse(x1, y1, x2, y2) {
					context.beginPath();
					context.moveTo(x1, y1);
					context.lineTo(x2, y2);
					context.moveTo(x2 - 100, y2);
					context.lineTo(x2 + 100, y2);
					context.stroke()
				}

				synapse(width/2, height/2-100, (3-(3*t))*width/2 + (3*t-2)*(width/2 + 250), (3-(3*t))*(height/2-100) + (3*t-2)*(height/2 + 150));

			}
		}

		if (subtitle) {
			context.fillStyle = "rgba(0,0,0,0.5)";
			context.fillRect(0,height-100, width-20, 100);
			context.fillStyle = "rgb(256,256,256)";
			context.font = "25px Verdana";
			context.textAlign = "center";
			context.fillText(subtitle, width/2, height - 50, width);
		}

	}





	animations.push(new Animation(animator, {
		start: 0,
		end: 0,
		duration: 50,
		animation: animationInit,
		onComplete: null
	}));

	

	

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: animationInit,
		onComplete: nextAnimation
	}));

	


	
	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null,"Have you ever wondered what happened in the brain when we learn a new language?", languageImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null,"Have you ever wondered what happened in the brain when we learn a new language?", languageImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null,"When we learn how to ride a bike?", bikeImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null,"When we learn how to ride a bike?", bikeImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null,"When we memorize the poetry?", poetryImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null,"When we memorize the poetry?", poetryImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null,"How does your brain store your memory?", brainImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "How does your brain store your memory?", brainImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "There are 100 billions neurons in the brain and they communicate through 1000 trillion synapse connections.", brainImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "There are 100 billions neurons in the brain and they communicate through 1000 trillion synapse connections.", brainImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Scientists discovered that brain stores the memory by strengthening, weakening and forming new synapses.", brainImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Scientists discovered that brain stores the memory by strengthening, weakening and forming new synapses.", brainImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "It all began in 1950s when Professor Kandel conducted his series of experiments on Aplysia.", kandelAplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "It all began in 1950s when Professor Kandel conducted his series of experiments on Aplysia.", kandelAplysiaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Today we are going to have a glimpse of this remarkable journey that uncovers the secret of memory.", kandelAplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Today we are going to have a glimpse of this remarkable journey that uncovers the secret of memory.", kandelAplysiaImage),
		onComplete: nextAnimation
	}));

	

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "What makes Aplysia an ideal subject to study memory?", aplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "What makes Aplysia an ideal subject to study memory?", aplysiaImage),
		onComplete: nextAnimation
	}));



	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "There are 100 billions neurons in the human brain while there are only 20k neurons in the Aplysia brain", aplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "There are 100 billions neurons in the human brain while there are only 20k neurons in the Aplysia brain", aplysiaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "While the former one is too complex to study, we understood the neural circuit in Aplysia well.", aplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "While the former one is too complex to study, we understood the neural circuit in Aplysia well.", aplysiaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "In order to study the learning behaviors in Aplysia, Professor Kandel focus on a specific defensive reflex:", aplysiaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "In order to study the learning behaviors in Aplysia, Professor Kandel focus on a specific defensive reflex:", aplysiaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "the withdrawal of the gill upon the stimulation of the siphon.", siphonImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "the withdrawal of the gill upon the stimulation of the siphon.", siphonImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "When a weak stimulus is applied to the siphon, the siphon and gill are withdrawn into the shelf", siphonImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "When a weak stimulus is applied to the siphon, the siphon and gill are withdrawn into the shelf", siphonImage),
		onComplete: nextAnimation
	}));
	

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "Kandel focuses on sensitization learning, which animal learns to respond strongly to a neutral stimulus.", kandelImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Kandel focuses on sensitization learning, which animal learns to respond strongly to a neutral stimulus.", kandelImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "For example, if someone is startled by a gunshot nearby, that person will react strongly to any unexpected noise.", gunImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "For example, if someone is startled by a gunshot nearby, that person will react strongly to any unexpected noise.", gunImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "Similarly, by receiving electrical shock, Aplysia learn to enhance its defensive reflex even to innocuous stimulus.", aplysiaImage),
		onComplete: null
	}));
	

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Similarly, by receiving electrical shock, Aplysia learn to enhance its defensive reflex even to innocuous stimulus.", aplysiaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: setupGraph.bind(null, "If the tail is repetitively shocked, this learning effect lasts for weeks and 1 day when single shock is applied.", graphData[0]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: setupGraph.bind(null, "If the tail is repetitively shocked, this learning effect lasts for weeks and 1 day when single shock is applied.", graphData[0]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: setupGraph.bind(null, "Kandel injected the protein synthesis inhibitor into the neuron and found out only long term memory is blocked.", graphData[1]),
		onComplete: null
	}));



	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "Kandel injected the protein synthesis inhibitor into the neuron and found out only long term memory is blocked.", graphData[1]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "This means that long term memory requires protein synthesis while short term does not.", graphData[1]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: setupGraph.bind(null, "This means that long term memory requires protein synthesis while short term does not.", graphData[1]),
		onComplete: clearGraph
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "Kandel then found out that the neuronal circuits are exactly same across every Aplysia.", circuitImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Kandel then found out that the neuronal circuits are exactly same across every Aplysia.", circuitImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "How can learning happen at the system that is so precisely wired?", circuitImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "How can learning happen at the system that is so precisely wired?", circuitImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "He reached to a conclusion that learning is happened at the strength of the synapses.", circuitImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "He reached to a conclusion that learning is happened at the strength of the synapses.", circuitImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "It is known serotonergic neuron leads to sensitization by increasing the releases of neurotransmitter.", circuitImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "It is known serotonergic neuron leads to sensitization by increasing the releases of neurotransmitter.", circuitImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Professor Kandel found out that serotonin will recruit cAMP unit which will recruit PKA.", circuitImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Professor Kandel found out that serotonin will recruit cAMP unit which will recruit PKA.", circuitImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "There are two parts of PKA, the catalytic part and the regulatory part.", pkaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "There are two parts of PKA, the catalytic part and the regulatory part.", pkaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Usually the regulatory part of PKA regulates the catalytic part of PKA.", pkaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Usually the regulatory part of PKA regulates the catalytic part of PKA.", pkaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "However, cAMP will bind on the regulatory part of PKA and hence release the catalytic part of PKA", pkaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "However, cAMP will bind on the regulatory part of PKA and hence release the catalytic part of PKA", pkaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "To test this, Kandel injects serotonin, cAMP and catalytic PKA into synapses and observe short term memory", pkaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "To test this, Kandel injects serotonin, cAMP and catalytic PKA into synapses and observe short term memory", pkaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "So how does catalytic PKA increase the release of the neurotransmitter? ", ionChannelImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "So how does catalytic PKA increase the release of the neurotransmitter? ", ionChannelImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Professor Kandel found a specific potassium channel which can be blocked by catalytic PKA.", ionChannelImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Professor Kandel found a specific potassium channel which can be blocked by catalytic PKA.", ionChannelImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "By reducing potassium current, neuron increases the calcium which is in charge of release of neurotransmitters.", ionChannelImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "By reducing potassium current, neuron increases the calcium which is in charge of release of neurotransmitters.", ionChannelImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "Next, Kandel discovered a way to culture a single sensory and a single motor neuron in a cultured dish.", labDishImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Next, Kandel discovered a way to culture a single sensory and a single motor neuron in a cultured dish.", labDishImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "By injecting puffs of serotonin, he is able to trigger both short term and long term memory in this simple system.", labDishImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "By injecting puffs of serotonin, he is able to trigger both short term and long term memory in this simple system.", labDishImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "In this system, by repetitively injects serotonin, the catalytic PKA has time to translocate into the nucleus", dnaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "In this system, by repetitively injects serotonin, the catalytic PKA has time to translocate into the nucleus", dnaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "PKA then starts a series of transcriptional cascade starting with CREB-1 transcription factor.", dnaImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "PKA then starts a series of transcriptional cascade starting with CREB-1 transcription factor.", dnaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "CREB-1 is named because it binds onto CRE genes.", dnaImage),
		onComplete: null
	}));

	

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "CREB-1 is named because it binds onto CRE genes.", dnaImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: setupGraph.bind(null, "How does Professor Kandel CREB-1 is important in long term memory formation?", graphData[2]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "How does Professor Kandel CREB-1 is important in long term memory formation?", graphData[2]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "1. he injects CRE elements and this completely blocked the long term memory", graphData[2]),
		onComplete: null
	}));
	

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "1. he injects CRE elements and this completely blocked the long term memory", graphData[2]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "2. by injecting CREB-1 into nucleus along, he can trigger the formation of long term memory.", graphData[2]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: setupGraph.bind(null, "2. by injecting CREB-1 into nucleus along, he can trigger the formation of long term memory.", graphData[2]),
		onComplete: clearGraph
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "Scientists began to be interested in the transcription cascade of CREB-1.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Scientists began to be interested in the transcription cascade of CREB-1.", synapseImage),
		onComplete: nextAnimation
	}));

		animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "One of its first immediate target is ubiquitin C-terminal hydrolase.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "One of its first immediate target is ubiquitin C-terminal hydrolase.", synapseImage),
		onComplete: nextAnimation
	}));

		animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "It is responsible to decompose the regulatory subunit of PKA and hence strengthen the synapse.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "It is responsible to decompose the regulatory subunit of PKA and hence strengthen the synapse.", synapseImage),
		onComplete: nextAnimation
	}));

		animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "However, even this kind of transcription cannot last forever.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "However, even this kind of transcription cannot last forever.", synapseImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "How does Aplysia maintain a long term memory that lasts for weeks?", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "How does Aplysia maintain a long term memory that lasts for weeks?", synapseImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "What Professor Kandel found is a second form of long term memory, the growth of a new synapse.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "What Professor Kandel found is a second form of long term memory, the growth of a new synapse.", synapseImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "At the downstream of CREB-1, there is C/EBP protein which can act as transcription factor", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "At the downstream of CREB-1, there is C/EBP protein which can act as transcription factor", synapseImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "It transcribes EF1\u03b1 which contributes to the formation of the new synapse.", synapseImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "It transcribes EF1\u03b1 which contributes to the formation of the new synapse.", synapseImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "After solving the mystery of the long term memory, a natural question arises.", questionImage),
		onComplete: null
	}));

		animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "After solving the mystery of the long term memory, a natural question arises.", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Is long term memory synapse specific? The answer is yes.", questionImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "Is long term memory synapse specific? The answer is yes.", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "But since the protein is produced in the nucleus, how does the protein know which synapse it needs to go?", questionImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "But since the protein is produced in the nucleus, how does the protein know which synapse it needs to go?", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "What Professor Kandel found out is indeed the protein is transported to every synapse", questionImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "What Professor Kandel found out is indeed the protein is transported to every synapse", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "But only those synapse which are marked by serotonin can use the protein for synaptic growth.", questionImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "But only those synapse which are marked by serotonin can use the protein for synaptic growth.", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "How does cell achieve this kinds of the selectivity? The answer lies in the local synthesis of protein in synapse.", questionImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "How does cell achieve this kinds of the selectivity? The answer lies in the local synthesis of protein in synapse.", questionImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newImage.bind(null, "It's been know that dendrites contain many ribosomes whose job is to produce protein.", ribosomeImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: newSubtitle.bind(null, "It's been know that dendrites contain many ribosomes whose job is to produce protein.", ribosomeImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newSubtitle.bind(null, "Kandel then conjectured that it is the local synthesis of the protein that facilitates the growth of the synapse.", ribosomeImage),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: newImage.bind(null, "Kandel then conjectured that it is the local synthesis of the protein that facilitates the growth of the synapse.", ribosomeImage),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: setupGraph.bind(null, "He injected emetine, rapamycin two common protein inhibitors and see if the long term memory still persists.", graphData[3]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "He injected emetine, rapamycin two common protein inhibitors and see if the long term memory still persists.", graphData[3]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "And he found out that emetine blocks the long term memory while rapamycin inhibits maintenance of the new synapse.", graphData[3]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "And he found out that emetine blocks the long term memory while rapamycin inhibits maintenance of the new synapse.", graphData[3]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "This means that the emetine-sensitive protein is necessary for initiation of the new synapse", graphData[3]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "This means that the emetine-sensitive protein is necessary for initiation of the new synapse", graphData[3]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "while rapamycin-sensitive protein is necessary to maintain the new synapse.", graphData[3]),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 0,
		duration: 50,
		animation: graphSubtitle.bind(null, "while rapamycin-sensitive protein is necessary to maintain the new synapse.", graphData[3]),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: graphSubtitle.bind(null, "Let's put everything together here:", graphData[3]),
		onComplete: null
	}));


	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: setupGraph.bind(null, "Let's put everything together here:", graphData[3]),
		onComplete: clearGraph
	}));





	animations.push(new Animation(animator, {
		start: 0,
		end: 1,
		duration: 50,
		animation: longTermMemory.bind(null, "A shock at the tail triggers the release of serotonin"),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 1,
		end: 2,
		duration: 50,
		animation: longTermMemory.bind(null, "A shock at the tail triggers the release of serotonin"),
		onComplete: nextAnimation
	}));



	animations.push(new Animation(animator, {
		start: 2,
		end: 3,
		duration: 50,
		animation: longTermMemory.bind(null, "A shock at the tail triggers the release of serotonin"),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 3,
		end: 4,
		duration: 50,
		animation: longTermMemory.bind(null, "A shock at the tail triggers the release of serotonin"),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 4,
		end: 5,
		duration: 50,
		animation: longTermMemory.bind(null, "Serotonin then changes ATP into cAMP"),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 5,
		end: 6,
		duration: 100,
		animation: longTermMemory.bind(null, "Serotonin then changes ATP into cAMP"),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 6,
		end: 7,
		duration: 50,
		animation: longTermMemory.bind(null, "cAMP then binds on the regulatory PKA which allows catalytic PKA to release"),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 7,
		end: 8,
		duration: 50,
		animation: longTermMemory.bind(null, "cAMP then binds on the regulatory PKA which allows catalytic PKA to release"),
		onComplete: null
	}));


	animations.push(new Animation(animator, {
		start: 8,
		end: 9,
		duration: 50,
		animation: longTermMemory.bind(null, "PKA then blocks K+ channels. The reduction of K+ allows greater calcium to release more neurotransmitter."),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 9,
		end: 10,
		duration: 50,
		animation: longTermMemory.bind(null, "PKA then blocks K+ channels. The reduction of K+ allows greater calcium to release more neurotransmitter."),
		onComplete: null
	}));
	

	animations.push(new Animation(animator, {
		start: 10,
		end: 11,
		duration: 100,
		animation: longTermMemory.bind(null, "Five consecutive shock gives catalytic PKA enough time to translocate to nucleus to activate CREB-1."),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 11,
		end: 12,
		duration: 100,
		animation: longTermMemory.bind(null, "Five consecutive shock gives catalytic PKA enough time to translocate to nucleus to activate CREB-1."),
		onComplete: null
	}));

		

	animations.push(new Animation(animator, {
		start: 12,
		end: 13,
		duration: 100,
		animation: longTermMemory.bind(null, "ubiquitin C-terminal hydrolase it transcribes next can decompose the regulatory PKA."),
		onComplete: nextAnimation
	}));

	animations.push(new Animation(animator, {
		start: 13,
		end: 14,
		duration: 100,
		animation: longTermMemory.bind(null, "ubiquitin C-terminal hydrolase it transcribes next can decompose the regulatory PKA."),
		onComplete: null
	}));


	animations.push(new Animation(animator, {
		start: 14,
		end: 15,
		duration: 50,
		animation: longTermMemory.bind(null, "At the down stream of CREB-1, C/EBP protein is transcribed."),
		onComplete: null
	}));



	animations.push(new Animation(animator, {
		start: 15,
		end: 16,
		duration: 100,
		animation: longTermMemory.bind(null, "C/EBP itself can then act as a transcription factor which then transcribe EF1\u03b1 protein."),
		onComplete: null
	}));

	animations.push(new Animation(animator, {
		start: 16,
		end: 17,
		duration: 150,
		animation: longTermMemory.bind(null, "EF1\u03b1 protein will then be transported to synapse to help grow new synapse."),
		onComplete: null
	}));



	nextAnimation();

	
}


window.onload = function () {
	draw();
}