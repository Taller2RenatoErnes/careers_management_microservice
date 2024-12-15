const amqp = require('amqplib');
const careersController = require('../controllers/careerController');
const subjectController = require('../controllers/subjectController');
const {updateProgress} = require('../controllers/progressController');

const handlers = {
  
};


let channel;

class RabbitService{
  constructor(){
    this.queueName = 'careers_queue';
    this.handlers = handlers;
  }




  async setupRabbitMQ(){
    try {
      const connection = await amqp.connect(process.env.RABBITMQ_URL);
      channel = await connection.createChannel();
  

      this.consumeResponse();

    } catch (error) {
      console.error('Error configurando RabbitMQ:', error);
    }
  }
 
  consumeResponse(){
    console.log(`Escuchando mensajes en la cola: ${this.queueName}...`);
    
    channel.consume(
        this.queueName,
        async (msg) => {
            try {
                const message = JSON.parse(msg.content.toString());
                console.log(`Mensaje recibido en la cola ${this.queueName}:`, message);

                await updateProgress(message);
                channel.ack(msg);
            } catch (error) {
                console.error(`Error procesando mensaje en ${this.queueName}:`, error);
                reject(error);
            }
        },
        { noAck: false }
    );
    
  }
}


// Generar un ID único para correlacionar solicitudes y respuestas
const generateCorrelationId = () => {
  return Math.random().toString() + Date.now().toString();
};


module.exports = RabbitService;