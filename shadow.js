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

  if (message.content.startsWith(prefix + "link-sow")) {
        message.channel.send("https://soulofwolves.wordpress.com/");
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
///////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////
////////comando user \\\\\\\\
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
    }
{
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
///////////////////////////////////////////////////////////////////////////////////////
////Server
if(command === 'server'){

    var server = message.guild;

    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+'', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)

   message.channel.send({ embed });

  }


/////comando help\\\

if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**COMANDOS DE SHADOWBOT**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'play           :: Reproduce auto por youtube.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'link-sow     :: Muestra información de una pagina web de soulofwolves.\n'+



                        '**SHADOWBOT - Servers - guías y de soporte Únete :**\nhttps://discord.gg/BV27bsK');

  }
///////////////////////////////////////////////////////////////////////////////////////
//// Bienvenida a miembros nuevos\\\\
client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('123456789112455845');
   canal.send(`${member.user}, bienvenido al servidor pasala bien.`);

});
////////////////////////////////////////////////////////////////////////////////////////////

});
client.login(config.token);
