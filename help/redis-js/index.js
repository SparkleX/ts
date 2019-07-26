const express = require('express');
var LinkedList = require('linked-list')
//var redis = require("redis");
//var bluebird =require("bluebird");
//var sleep = require('sleep');

//bluebird.promisifyAll(redis);




var vote_data=new LinkedList();
var vote_max = 8000;
var guidePrice = 10000;
var successCount = 0;

function vote_core(data) {
	if(data.price>guidePrice+300) {
		return false;
	}
	if(data.price<guidePrice-300) {
		return false;
	}	
	successCount++
	var success = false;
	var point = vote_data.head;
	while(point!=null) {
		var compare = point;
		if(data.price>compare.price) {			
			compare.prepend(data);
			success = true;
			break;
		}	
		if ((data.price==compare.price ) && (data.time<compare.time)) {
			compare.prepend(data);
			success = true;
			break;
		}
		point = point.next;
	}
	if(success==false && vote_data.size<vote_max) {
		vote_data.append(data);
		success = true;
	}
	if(vote_data.size>vote_max) {
		vote_data.tail.detach();
	}
	guidePrice = vote_data.head.price;
	//console.debug(vote_data);

	return success;

}

var votes = [];


for(var i =0;i<100000;i++) {
	var diff = 300;
	var price = guidePrice - diff + Math.floor((Math.random() * diff * 2) + 1);
	var data = new LinkedList.Item();
	data.user = i;
	data.price = price;
	data.time = new Date();;
	votes.push(data);
}
var from = process.hrtime();
for(var i =0;i<100000;i++) {
	vote_core(votes[i]);
}
//console.debug(vote_data);
var to = process.hrtime(from);
console.info('Execution time (hr): %ds %dms', to[0], to[1] / 1000000);
console.info('SUCCESS %d',successCount);

/*var app = express();

app.get('/', function (req, res) {
	var price = guidePrice + Math.floor((Math.random() * 10) + 1);
	var data = {};
	data.price = price;
	data.time = new Date();;
	var status = vote_core(data);
	data.status = status;
	res.send(data);
});
app.listen(3000);*/