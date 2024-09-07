import twilio from 'twilio';
import 'dotenv/config';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

import { fastify } from 'fastify';
import cors from '@fastify/cors';

const server = fastify();
await server.register(cors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
});

server.post('/send-message', (request, reply) => {
  let objRquest = request.body;
  // console.log(objRquest);

  // return reply.status(200).send();

  client.messages
    .create({
      body: objRquest.body,
      to: objRquest.phone, // Text your number +5567981145503
      from: process.env.PHONE_FROM, // From a valid Twilio number
    })
    .then((message) => {
      console.log(message);
      return reply.status(200).send({
        success: true,
        error: '',
        details: '', // Inclui mais informações sobre o erro
      });
    })
    .catch((error) => {
      console.error('Error sending message:', error.message);
      return reply.status(400).send({
        success: false,
        error: error.message,
        details: error.moreInfo, // Inclui mais informações sobre o erro
      });
    });
});

server.listen({
  port: 3000,
});
