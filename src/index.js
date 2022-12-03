const qrcode = require('qrcode-terminal');
const banco = require("./banco");
const stages = require("./stages");

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    let resp = stages.step[getStage(message.from)].obj.execute(
        message.from,
        message.body
    );

    for(let index = 0; index < resp.length; index++){
        const element = resp[index];
        client.sendMessage(message.from,element)
    }
});

function getStage(user){
    return banco.db[user].stage;
};

client.initialize();