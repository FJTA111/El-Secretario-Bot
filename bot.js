const TelegramBot = require('node-telegram-bot-api');

const token = '587014249:AAHg6bzdLSDJk3vuPMAbvYhdyC62caBZpP4';

const bot = new TelegramBot(token, {polling: true});
const request = require('request');

bot.on('message', (msg) => {
var Hola = "hola";
if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 }
 });

 //Temario.
 bot.onText(/\/temas/, (msg) => {
 bot.sendMessage(msg.chat.id, "Hola "+ msg.from.first_name + ", estos son todos los temas disponibles: 2 - 3 - 8 - 20 - 21 - 22 - 23 - 24 - 25 - 26 - 27 - 28 - 30 - 31 - 32 - 35 - 36 - 39 - 40 - 41.");
 });
 bot.onText(/\/J/, (msg) => {
 bot.sendMessage(msg.chat.id, "Toma "+ msg.from.first_name + ", aquí tienes tu verga de foto.");
 bot.sendPhoto(msg.chat.id,"./fotos/juanjocoaine.jpg" );
 });
 bot.onText(/^\/t (.+)/, function(msg, match){
 var text = match[1];
 if (text == 2){
      bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
      bot.sendDocument(msg.chat.id, "./temario/Tema 2 - Constitución I.pdf");
   }
   else if (text == 3){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 3 - Constitución II.pdf");
   }
   else if (text == 8){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 8 - La Dirección General de la Policía(1ª parte).pdf");
   }
   else if (text == 20){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 20 - Derechos humanos.pdf");
   }
   else if (text == 21){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 21 - Globalización.pdf");
   }
   else if (text == 22){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 22 - Actitudes y valores sociales.pdf");
   }
   else if (text == 23){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 23 - Socialización -1-.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 23 - Socialización -2-.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 23 - Socialización -3-.pdf");
   }
   else if (text == 24){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 24 - Inmigración.pdf");
   }
   else if (text == 25){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", en nada te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 25 - La ciudad.pdf");
   }
   else if (text == 26){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 26 - La seguridad (navegadores).pdf");
   }
   else if (text == 27){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 27 - Drogas (repaso Jorge).pdf");
   }
   else if (text == 27.){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 27 - DROGAS ALUCINÓGENAS.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 27 - DROGAS DEPRESORAS.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 27 - DROGAS ESTIMULANTES.pdf");
   }
   else if (text == 28){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 28 - Desarrollo sostenible.pdf");
   }
   else if (text == 30){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 30 - Informática.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 30 - Informática (conceptos).pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 30 - Informática (resumen).pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 30,31,32 - REPASO.pdf");
   }
   else if (text == 31){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 31 -  Combinaciones de teclas.pdf");
   }
   else if (text == 32){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 32 - Redes (resumen).pdf");
   }
   else if (text == 35){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 28 - Desarrollo sostenible.pdf");
   }
   else if (text == 36){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 36 - Delitos informáticos.pdf");
   }
   else if (text == 39){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 39 - Planimetría.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 39 - Planimetría-2-.pdf");
   }
   else if (text == 40){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 40 - Contabilidad.pdf");
   }
   else if (text == 41){
        bot.sendMessage(msg.chat.id, "Espera "+ msg.from.first_name + ", ya te lo envío.");
        bot.sendDocument(msg.chat.id, "./temario/Tema 41 - Energía 1.pdf");
        bot.sendDocument(msg.chat.id, "./temario/Tema 41 - Energía 2.pdf");
   }
});
