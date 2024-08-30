import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://test.mosquitto.org:1883');

client.on('connect', () => {
  console.log('Client connecté');
  client.subscribe('go-eCharger/244994/#', (err) => { 
    if (!err) {
      client.publish('go-eCharger/244994/#', 'Hallo MQTT');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`${topic}: ${message.toString()}`);
});
