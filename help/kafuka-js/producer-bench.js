var kafka = require('kafka-node');
var Producer = kafka.HighLevelProducer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});

client.on('error', function(error) {
	console.error(error);
  });
  
producer = new Producer(client);

producer.on('error', function (error) {
	console.error(error);
})

producer.on('ready', function () {
	console.log('ready');
});

async function send(i) {
	return new Promise(function(resolve, reject) {
		payloads = [
			{ topic: 'testTopic', messages: i}
		];
		producer.send(payloads, function (error, data) {
			if(error) {
				console.log(error);
				reject(error);
				return;
			}
			resolve();
		});	
	});
	
}
async function main() {
	var i = 0;
	var start = new Date();
	for(i=0;i<=10000;i++) {
		await send(i);
	}
	var end = new Date() - start;
	console.info('Execution time: %dms', end);
	process.exit(0);
}

main();