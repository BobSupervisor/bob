const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
      
      if (message.content === 'bob') {
    	message.reply('Hi, My Name Is Boby The Supervisor, just ask me i help ya :) ');
  	}
	
	if (message.content === 'pan') {
    	message.reply('Pan Pan Are Awesome :)');
  	}
	
	if (message.content === 'help') {
    	message.reply(' -!bob command, bob will introduce hiself  -ping command for ping -pan command, pan pan the maker -ice command, ice bear for president');
  	}
	
	if (message.content === 'ice') {
    	message.reply('VOTE ICE BEAR FOR 2019 PRESIDENT OF INDONESIA');  	
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
