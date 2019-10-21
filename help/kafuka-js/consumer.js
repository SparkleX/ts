var kafka = require("kafka-node");
var HighLevelConsumer = kafka.Consumer;

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

client.on("error", function(error) {
  console.error(error);
});

var options = {
  autoCommit: false
};
var consumer = new HighLevelConsumer(client, [{ topic: "testTopic"/*,partition: 1*/ }], options);

consumer.on("message", function(message) {
  console.log(message);
});

consumer.on("error", function(err) {
  console.log("error", err);
});

process.on("SIGINT", function() {
  consumer.close(true, function() {
    process.exit();
  });
});
