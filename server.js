const http = require('http');
const express = require('express');
const app = express();

//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


/////////////////////////////////////BTECHILE///////////////////////////////////////

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

//////////////Presencia
function presence(){
  client.user.setPresence({
    status: "online",
    activity: {
      name: " construir Chile :btechilegif:",
      type: "PLAYING"
    }
  })
}

client.on('ready', () => {
  console.log("Volví ctm");
  presence();
});


//////////////////////////LISTADO ID'S
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=ids")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
    
      msg.channel.send(" ** Listado de ID's ** \n"+ 
                       " ```=id trees --------------------------> Árboles. \n"+ 
                       "=id colors -----------------------------> Colores.\n"+ 
                       "=id slabs --------------------------------> Losas. \n"+ 
                       "=id stone -------------------> Variedades de Roca. \n"+ 
                       "=id sand -------------------> Variedades de Arena. \n"+ 
                       "=id ores -----------------------> Menas y Bloques. \n"+ 
                       "=id stairs ------------> Variedaades de Escaleras. \n"+ 
                       "=id bricks -------------> Variedades de Ladrillos. \n"+ 
                       "=id construction -------> Bloques de Construcción. \n"+ 
                       "=id terrain ---------------> Variedades de Tierra. ``` ")
  }});

///////////MENSAJE EN BLANCO (SIN PING)
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("")
  }});

/////////////////ID Stone  TEXTO
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id stone")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "id", "=ip", "=id trees", "=id slabs", "=id colors", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Variedades de Piedra :rock: ** \n"+ 
                       " ```+----------------------+------+ \n" +
                       "Piedra.                |  1:0 | \n"+ 
                       "+----------------------+------+ \n" +
                       "Granito.               |  1:1 |\n"+ 
                       "+----------------------+------+ \n" +
                       "Granito Pulido.        |  1:2 | \n"+ 
                       "+----------------------+------+ \n" +
                       "Diorita.               |  1:3 | \n"+ 
                       "+----------------------+------+ \n" +
                       "Diorita Pulida.        |  1:4 | \n"+ 
                       "+----------------------+------+ \n" +
                       "Andesita.              |  1:5 |\n"+ 
                       "+----------------------+------+ \n" +
                       "Andesita Pulida.       |  1:6 | \n"+ 
                       "+----------------------+------+ \n" +
                       "Adoquín.               |   4  |\n"+ 
                       "+----------------------+------+ \n" +
                       "Bedrock.               |   7  | \n"+ 
                       "+----------------------+------+ \n" +
                       "Piedra Lisa.           | 43:8 |  \n"+ 
                       "+----------------------+------+ \n" +
                       "Roca Musgosa.          |  48  | \n"+ 
                       "+----------------------+------+ \n" +
                       "Piedra del End.        |  121 | \n" + 
                       "+----------------------+------+ \n ``` " )
  }});

////////////////////ID Ores
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id ores")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Menas :pick: ** \n"+ 
                       " ```+---------------------------+-----+ \n" +
                       "Oro.                        |  14 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Hierro.                     |  15 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Carbón.                     |  16 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Lapislázuli.                |  21 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Diamante.                   |  56 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Redstone.                   |  73 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Esmeralda.                  | 129 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Cuarzo del Nether.          | 153 | \n"+ 
                       "+---------------------------+-----+ \n ``` " +
                       "**Bloques de... **  \n"+ 
                       " ```+---------------------------+-----+ \n" +
                       "Lapislázuli.                |  22 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Música.                     |  25 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Oro.                        |  41 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Hierro.                     |  42 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Diamante.                   |  57 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Esmeralda.                  | 133 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Redstone.                   | 152 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Slime.                      | 165 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Carbón.                     | 173 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Purpur.                     | 201 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Magma.                      | 213 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Verrugas del Nether.        | 214 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "Huesos.                     | 216 | \n" +
                       "+---------------------------+-----+ \n ``` " )
  }});

////////////////ID Stairs TEXTO
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id stairs")){
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" **Escaleras. :ladder: ** \n"
+ "```+---------------------+-----+ \n"
+"| Roble               | 53  | \n"
+"+---------------------+-----+ \n"
+"| Abeto               | 134 | \n"
+"+---------------------+-----+ \n"
+"| Abedul              | 135 | \n"
+"+---------------------+-----+ \n"
+"| Jungla              | 136 | \n"
+"+---------------------+-----+ \n"
+"| Roble Oscuro        | 164 | \n"
+"+---------------------+-----+ \n"
+"| Roca                | 67  | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo            | 108 | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo de Piedra  | 109 | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo del Nether | 114 | \n"
+"+---------------------+-----+ \n"
+"| Arenisca            | 128 | \n"
+"+---------------------+-----+ \n"
+"| Arenisca Roja       | 180 | \n"
+"+---------------------+-----+ \n"
+"| Cuarzo              | 156 | \n"
+"+---------------------+-----+ \n"
+"| Purpur              | 203 | \n"
+"+---------------------+-----+ \n ```"
+" \n"
+"**Orientaciones** \n"
+"```+---------------------+-----+ \n"
+"| Oeste.              |  0  | \n"
+"+---------------------+-----+ \n"
+"| Este.               |  1  | \n"
+"+---------------------+-----+ \n"
+"| Norte.              |  2  | \n"
+"+---------------------+-----+ \n"
+"| Sur.                |  3  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Oeste.    |  4  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Este.     |  5  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Norte.    |  6  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Sur.      |  7  | \n"
+"+---------------------+-----+ \n ```")
  }});

/////////////Embed ID Stairs
client.on('message', msg => {
  if (msg.content === "=em stairs"){
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
    const idstairs =new MessageEmbed()
    .setTitle("**Escaleras :ladder:**")
    .setColor(0x80F373)
    .setDescription("```+---------------------+-----+ \n"
+"| Roble               | 53  | \n"
+"+---------------------+-----+ \n"
+"| Abeto               | 134 | \n"
+"+---------------------+-----+ \n"
+"| Abedul              | 135 | \n"
+"+---------------------+-----+ \n"
+"| Jungla              | 136 | \n"
+"+---------------------+-----+ \n"
+"| Roble Oscuro        | 164 | \n"
+"+---------------------+-----+ \n"
+"| Roca                | 67  | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo            | 108 | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo de Piedra  | 109 | \n"
+"+---------------------+-----+ \n"
+"| Ladrillo del Nether | 114 | \n"
+"+---------------------+-----+ \n"
+"| Arenisca            | 128 | \n"
+"+---------------------+-----+ \n"
+"| Arenisca Roja       | 180 | \n"
+"+---------------------+-----+ \n"
+"| Cuarzo              | 156 | \n"
+"+---------------------+-----+ \n"
+"| Purpur              | 203 | \n"
+"+---------------------+-----+ \n ```"
+" \n"
+"**Orientaciones** \n"
+"```+---------------------+-----+ \n"
+"| Oeste.              |  0  | \n"
+"+---------------------+-----+ \n"
+"| Este.               |  1  | \n"
+"+---------------------+-----+ \n"
+"| Norte.              |  2  | \n"
+"+---------------------+-----+ \n"
+"| Sur.                |  3  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Oeste.    |  4  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Este.     |  5  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Norte.    |  6  | \n"
+"+---------------------+-----+ \n"
+"| Invertida Sur.      |  7  | \n"
+"+---------------------+-----+ \n ```")
    msg.channel.send(idstairs);
  }
});

/////////////////////////////////ID Bricks
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id bricks")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Ladrillos :bricks: ** \n"+ 
                       "```+-----------------------------------+-------+ \n" +
                       "Ladrillos.                          |   45  | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Piedra.                |   98  | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Piedra Musgosa.        |  98:1 | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Piedra Agrietados.     |  98:2 | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Piedra Cincelados.     |  98:3 | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos del Nether.               |  112  | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Prismarina.            | 168:1 | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos de Piedra del End.        |  206  | \n"+ 
                       "+-----------------------------------+-------+ \n" +
                       "Ladrillos del Nether Rojos.         |  215  | \n" +
                       "+-----------------------------------+-------+ \n ``` " )
  }});

/////////////welc
client.on('message', msg => {
  if (msg.content === '=welc') {
    const welc =new MessageEmbed()
    .setTitle(" _¡Bienvenido a BTE Chile!_ ")
    .setColor(0x80F373)
    .addField(":flag_cl:", "Si vienes de visita, pásate por #showcase, y si vienes a construir, pásate por #info y #rules antes de postular.", true)
    .addField(":flag_us:", "If you're reading this, you probably aren't going to build. Go check #showcase to see what we've built!  :D", true)
    msg.channel.send(welc);
  }
});

//////////////ID Construction
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id construction")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Bloques de Construcción :construction_site: ** \n"+ 
                       " ```+---------------------------+-----+ \n" +
                       "| Terracota.                | 172 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "| Terracota (tintada).      | 159 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "| Hormigón.                 | 251 | \n"+ 
                       "+---------------------------+-----+ \n" +
                       "| Cemento.                  | 252 | \n" + 
                       "+---------------------------+-----+ \n ``` " )
  }});

/////////////////ID Terrain
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id terrain")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Terreno :mountain_snow: ** \n"+
                       "```+--------------------+-----+ \n" +
                       "| Pasto.             |  2  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Tierra.            |  3  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Tierra Estéril.    | 3:1 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Podzol.            | 3:2 | \n" +
                       "+--------------------+-----+ \n ``` " )
  }});

///////////ID COLORS
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id colors")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("** Colores :art: ** \n"+ 
                       "```+--------------------+-----+ \n" +
                       "| Blanco.            | :0  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Naranjo.           | :1  | \n"+
                       "+--------------------+-----+ \n" +
                       "| Rosado.            | :2  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Celeste.           | :3  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Amarillo.          | :4  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Verde Claro.       | :5  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Rosado Claro.      | :6  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Gris.              | :7  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Gris Claro.        | :8  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Cian.              | :9  | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Morado.            | :10 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Azul.              | :11 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Café.              | :12 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Verde Oscuro.      | :13 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Rojo.              | :14 | \n"+ 
                       "+--------------------+-----+ \n" +
                       "| Negro.             | :15 | \n" +
                       "+--------------------+-----+ \n ```" )
  }});

////////////////////////ID Slabs
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id slabs")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Losas :white_large_square: ** \n"+ 
                       "```+-----------------------+-------+ \n" +
                       "| Doble Losa de Piedra. |   43  | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Piedra.               |  44:0 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Arenisca.             |  44:1 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Roca.                 |  44:3 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Ladrillo.             |  44:4 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Ladrillos de Piedra.  |  44:5 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Ladrillos del Nether. |  44:6 |\n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Cuarzo.               |  44:7 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Purpur.               |  105  | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Roble.                | 126:0 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Abeto.                | 126:1 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Abedul.               | 126:2 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Jungla.               | 126:3 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Acacia.               | 126:4 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Roble oscuro.         | 126:5 | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Arenisca Roja.        |  182  | \n"+ 
                       "+-----------------------+-------+ \n" +
                       "| Upper Slabs.          |  :+8  |\n" +
                       "+-----------------------+-------+ \n ```" )
  }});

////////////////ID Trees
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id trees")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" ** Árboles :evergreen_tree: ** \n"+ 
                       "```+-----------------------------+-------+ \n"+ 
                       "| Hojas de Roble.             |  18:0 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Hojas de Abeto.             |  18:1 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Hojas de Abedul.            |  18:2 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Hojas de Jungla.            |  18:3 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Hojas de Acacia.            | 161:0 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Hojas de Roble Oscuro.      | 161:1 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Roble.            |  17:0 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Abeto.            |  17:1 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Abedul.           |  17:2 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Jungla.           |  17:3 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Acacia.           | 162:0 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Tronco de Roble Oscuro.     | 162:2 | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Orientación Este-Oeste.     |  :+4  | \n"+ 
                       "+-----------------------------+-------+ \n"+ 
                       "| Orientación Norte-Sur.      |  :+8  | \n" +
                       "+-----------------------------+-------+ \n ```" )
  }});

//////////////////ID Sand
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=id sand")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" **Variaciones :desert: ** \n"+ 
                       "```+-------------------------------+-------+ \n"+
                       "| Arena.                        |   12  | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca.                     |  24:0 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Cincelada.           |  24:1 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Lisa (Cortada).      |  24:2 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Lisa.                |  24:3 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arena Roja.                   |  12:1 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Roja.                | 179:0 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Roja Cincelada.      | 179:1 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arenisca Roja Lisa (Cortada). | 179:2 | \n"+ 
                       "+-------------------------------+-------+ \n"+ 
                       "| Arenisca Roja Lisa.           | 181:9 | \n"+ 
                       "+-------------------------------+-------+ \n"+
                       "| Arena de Almas.               |   88  | \n"+ 
                       "+-------------------------------+-------+ \n ```")
  }});

/////////////Detalles del Server
client.on('message', msg => {
  if (msg.content === '=serverinfo') {
    const serverinfo =new MessageEmbed()
    .setTitle(" --Detalles del Server--")
    .setColor(0x80F373)
    .addField(":white_check_mark:   IP: 172.96.160.35", "‎      ‏‏‎")
    .addField(":white_check_mark:  Versión: Java Forge 1.12.2 (:exclamation: SÓLO PREMIUM).", "‎      ‏‏‎")
    .addField("Mods", "‎      ‏‏‎", true)
    .addField(":small_blue_diamond: Obligatorios:", "CubicChunks, CubicWorldGen. ", false)
    .addField("‎      ‏‏‎", "‎      ‏‏‎", true)
    .addField(":small_blue_diamond: Opionales: ", "WorldEdit, JourneyMap, Foamix, Performant.", false)
    .addField("‎      ‏‏‎", "‎      ‏‏‎", true)
    .addField(":eyes: Recomendado: ", "Optifine, Terramap.", false)
    .addField("‎      ‏‏‎", "‎      ‏‏‎", true)
    .addField("Descarga en #mods.", ":)", false)
    msg.channel.send(serverinfo);
  }
});

/////////////////////////Help
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=help")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send(" **--Lista de Comandos--** \n"+ 
                       "```| =aplanar    |             Tutorial para aplanar.           | \n"+ 
                       "| =apply      |                 Para postular.               | \n"+ 
                       "| =banners    |              Todo sobre banners.             | \n"+ 
                       "| =btechileig |   Instagram de BTE Chile :btechilegif:.      | \n"+ 
                       "| =circles    |         Una guía para hacer círculos.        | \n"+ 
                       "| =circles2   |            Otra guía de circulos...          | \n"+ 
                       "| =id         |                Lista de ID's.                | \n"+ 
                       "| =ip         |                IP del server.                | \n"+ 
                       "| =help       |              Lista de comandos.              | \n"+ 
                       "| =roofs      |              Guías para techos.              | \n"+ 
                       "| =rotate     |     Guías para construcciones angulares.     | \n"+ 
                       "| =tpllshell  | Tutorial para hacer el shell de un edificio. | \n"+ 
                       "| =soloapply  |        Para construir en singleplayer.       | \n"+ 
                       "| =spook      |               Para asustar xd.               | \n"+ 
                       "| =serverinfo |           Info general del server.           | \n"+
                       "| =welc       |              Dar la bienvenida.              | \n ```" )
  }});

////////Embed IP
client.on('message', msg => {
  if (msg.content === '=ip') {
    const ip =new MessageEmbed()
    .setTitle("172.96.160.35")
    .setColor(0x80F373)
    msg.channel.send(ip);
  }
});

////presentación
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=presentación")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("¡Hola! Soy ChileBOT, y fui creado por Nachoo197. Soy un reemplazo de BTE Chile, ya que un día lo secuestraron y no apareció más. En fin, ¡es un gusto el poder estar aquí! :D")
  }});

//////APPLY
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=apply")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("Para postular, ve a esta página (https://buildtheearth.net/buildteams/137/join), inicia sesión con tu cuenta de Discord y rellena el formulario.")
  }});

////INSTAGRAM
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=btechileig")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://www.instagram.com/bte_chile/")
  }});


//////MENSAJES QUE PINGUEAN A QUIEN LO ESCRIBA
client.on('message', msg => {
  if (msg.content === " ") {
    msg.reply(" " );
  }
});
client.on('message', msg => {
  if (msg.content === " ") {
    msg.reply(" " );
  }
});

///////////Formatting codes
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=formatting")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids","id", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://minecraft.gamepedia.com/Formatting_codes")
  }});

////GoodNight
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=gn")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("Buenas noches, descansa.")
  }});

/////APLANAR
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=aplanar")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://www.youtube.com/watch?v=sDlollaLhPQ")
  }});

/////BANNERS
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=banners")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://www.gamergeeks.nz/apps/minecraft/banners/letters")
  }});

client.on('message', msg => {
  if (msg.content === ":v") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "v:") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ":V") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "V:") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ";v") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "v;") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ">:v") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "v:<") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ">:V") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "V:<") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "<:v") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "v:>") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "<:V") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "V:>") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ".>.") {
    msg.reply('No uses pacman, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ".<.") {
    msg.reply('No uses pacman, enfermo.');
  }
});

/////TPLLSHELL
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=tpllshell")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://www.youtube.com/watch?v=hehOrYFs3eg")
  }});

client.on('message', msg => {
  if (msg.content === "v,:") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ':,v') {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ":´v") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "v´:") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ":,V") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "V,:") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === ":´V") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
  if (msg.content === "V´:") {
    msg.reply('Ese tampoco, enfermo.');
  }
});
client.on('message', msg => {
    if (msg.content === 'AAAAA') {
      msg.reply('Que susto...');
    }
});

/////SPOOK (para halloween)
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=spook")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("B00!")
  }});

client.on('message', msg => {
    if (msg.content === ':U') {
      msg.reply('Ese tampoco, enfermo.');
    }
});
client.on('message', msg => {
    if (msg.content === 'U:') {
      msg.reply('Ese tampoco, enfermo.');
    }
});
client.on('message', msg => {
    if (msg.content === ':u') {
      msg.reply('Ese tampoco, enfermo.');
    }
});
client.on('message', msg => {
    if (msg.content === 'u:') {
      msg.reply('Ese tampoco, enfermo.');
    }
});

/////Comando Inválido
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.includes ("=" + (msg.content)) && message.includes(msg.content)  ) {
    msg.channel.send("Por favor, escribe un comando válido.")
  }});

/////SoloApply -para cuando alguien no quiera formar parte de un equipo
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=soloapply")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("Para postular individualmente deberás realizar dos construcciones, a escala real, en singleplayer y rellenar el siguiente formulario:  https://buildtheearth.net/buildteams/137/join. \n" + "Una vez hecho, deberás esperar a que tu postulación sea aprobada. Después de ser aprobada podrás, desde tu mundo singleplayer, construir y contribuir al proyecto. Tu progreso será añadido periódicamente al server. ¡Suerte!");
  }});

/////Circles 1
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith ("=circles")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://i.pinimg.com/736x/0d/51/d1/0d51d154c28c928d6cb02d2be0589376.jpg")
  }});

////////Circles2
client.on('message', msg => {
  if (msg.author == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith ("=circles2")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send("https://i.pinimg.com/originals/5b/bf/0b/5bbf0b11c658c0c00b8518addaef1e2f.png")
  }});

/////////////Rotate
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=rotate")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=roofs", "=circles", "=circles2", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send('https://external-preview.redd.it/5K75A6AkX51VmZSHF0O3IoocgJ3O3TejRKh31QWg678.png?auto=webp&s=5066f742508dfda1c77a1613af943e0ed53880ee')
  }});

/////////////Roofs
client.on('message', msg => {
  if (msg.author.bot == client.user){return}
  let message = msg.content.toLowerCase()
  if(message.startsWith("=roofs")) {
    if(msg.author.bot) return;
    if(msg.content.includes("=apply", "=presentación", "=welc", "=soloapply", "=tpllshell", "=gn", "=aplanar", "=banners", "=btechileig", "=circles", "=circles2", "=rotate", "=help", "=serverinfo", "=spook", "=ids", "=ip", "=id trees", "=id slabs", "=id colors", "=id stone", "=id sand", "=id ores", "=id stairs", "=id bricks", "=id construction", "=id terrain")) return;
      msg.channel.send('https://external-preview.redd.it/hu9kCexmQfFS346eUn3AGr7AL_OSIz6zM9aS_CVD1sc.png?auto=webp&s=03c04be496c9e52be3a7f4ba60df06808702c951')
  }});


client.login('NzcwNzQ5OTE0MzA4NjczNTc3.X5iGyw.pbaPPt696c3_yj43E5olZxVS06Y');