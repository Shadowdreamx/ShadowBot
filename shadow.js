const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Server up!");
});
var prefix = config.prefix;

  client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;

  if (message.content.startsWith(prefix + "shadow")) {
    message.channel.send("Shadow, Que Necesitan?");
}
if (message.content.startsWith(prefix + "berse")) {
      message.channel.send("Berseker, Que Necesitan?");
  }

if (message.content.startsWith(prefix + "st")) {
  const moment = require("moment");
  require('moment-duration-format');

  const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


  const embed = new Discord.RichEmbed()
  .setColor(0x66ff66)

  .setAuthor(`Bot info`, client.user.avatarURL)
  .addField(`Dueño`, `shadow-bot#1041`, true)
  .addField(`Version`, `1.0.0`, true)
  .addField(`Libreria`, `Discord ^11.2.1 (Js)`, true)

  .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`Uptime`, `${actividad}`, true)
  .addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)

  .addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
  .addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
  .addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

  message.channel.send({embed});
}
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'user'){
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;

        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x66b3ff)

       message.channel.send({ embed });
    }else{
      const embed = new Discord.RichEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x66b3ff)

     message.channel.send({ embed });
    }

  }

let miembro = message.mentions.members.first();
let nombrerol = args.split(' ').slice(1).join(' ');

let role = message.guild.roles.find("name", nombrerol);
let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
     
if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.');
if(!role) return message.channel.send('Rol no encontrado en el servidor.');
    
miembro.addRole(role).catch(console.error);
message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);
  
});
client.login(config.token);
