var kafka = require('kafka-node');
var stdin = process.openStdin();
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

stdin.addListener("data", function(data) {
	payloads = [
		{ topic: 'test', messages: data}
	];
    producer.send(payloads, function (error, data) {
		if(error) {
			console.log(error);
		}
        console.log(data);
	});	
});

