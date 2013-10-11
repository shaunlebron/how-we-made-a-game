var Punchcard = Punchcard || {};

Punchcard.create = function(canvasId, width, timestamps) {
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext('2d');

	// make dimensions be 27x10 units^2
	// (allows 2 units on the left and bottom for the axis labels
	//  and 1 unit on the right and top for padding)
	var size = width / 27;
	var height = size * 10;
	canvas.width = width;
	canvas.height = height;

	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,width,height);

	// create and initialize distribution structure
	var dayHours = [];
	var maxCount = 0;
	var day,hour;
	for (day=0; day<7; day++) {
		dayHours[day] = [];
		for (hour=0; hour<24; hour++) {
			dayHours[day][hour] = 0;
		}
	}

	// populate distribution structure
	var t;
	var date;
	var count = 0;
	for (t in timestamps) {
		count++;
		date = new Date(parseInt(t)*1000);
		day = date.getDay();
		hour = date.getHours();
		dayHours[day][hour] += 1;
		maxCount = Math.max(maxCount, dayHours[day][hour]);
	}

	function getHourX(hour) {
		return size*(hour+2)+size/2;
	}

	function getDayY(day) {
		return size*(day+1)+size/2;
	}

	// draw axes and labels
	var x,y,x0,x1,y0,y1;
	var tickLen = size/6;

	// draw axes
	ctx.beginPath();
	x0 = getHourX(-1);
	x1 = getHourX(24);
	y0 = getDayY(-1);
	y1 = getDayY(7);
	ctx.moveTo(x0, y0);
	ctx.lineTo(x0, y1);
	ctx.lineTo(x1, y1);

	// draw axis ticks
	for (day=0; day<7; day++) {
		x0 = getHourX(-1);
		x1 = x0 + tickLen;
		y = getDayY(day);
		ctx.moveTo(x0,y);
		ctx.lineTo(x1,y);
	}
	for (hour=0; hour<24; hour++) {
		y0 = getDayY(7);
		y1 = y0 - tickLen;
		x = getHourX(hour);
		ctx.moveTo(x,y0);
		ctx.lineTo(x,y1);
	}
	ctx.strokeStyle = "#555";
	ctx.lineWidth = 1;
	ctx.stroke();

	ctx.font = (size*0.4) + "px Lucida";
	ctx.textBaseline = "middle";
	ctx.textAlign = "right";
	ctx.fillStyle = "#AAA";
	var dayNames = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
	for (day=0; day<7; day++) {
		x = getHourX(-1.5);
		y = getDayY(day);
		ctx.fillText(dayNames[day], x, y);
	}

	ctx.textBaseline = "top";
	ctx.textAlign = "center";
	var hourNames = "12am 1 2 3 4 5 6 7 8 9 10 11 12pm 1 2 3 4 5 6 7 8 9 10 11".split(" ");
	for (hour=0; hour<24; hour++) {
		x = getHourX(hour);
		y = getDayY(7.5);
		ctx.fillText(hourNames[hour], x, y);
	}

	// draw distribution circles
	var radius;
	for (day=0; day<7; day++) {
		y = getDayY(day);
		for (hour=0; hour<24; hour++) {
			x = getHourX(hour);
			alpha = (dayHours[day][hour] / maxCount);
			radius = alpha * size/2;
			ctx.fillStyle = "rgba(0,0,0," + alpha + ")";
			ctx.beginPath();
			ctx.arc(x,y,radius,0,Math.PI*2);
			ctx.fill();
		}
	}
};
