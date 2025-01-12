//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "onuzulikeanthony432@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349067751513";
global.owner = process.env.OWNER_NUMBER || "2349153232038";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.auto_react = process.env.AUTO_REACT || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shaka-pair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhUdm0wWWtNdUlZeGd6MzdLYzErZWpmRi8xVW12ZHdBaUc4OFlaZ2JrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDF1YmxLWk94YWNOU1QxMk1jdjhES1g3YW03K3hHWm0raU9BZ0RZcGpITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRG11STdJdHpCQXQ0WVB4QS8yZ0V2UE5RWklBbHZ2bXhEb1A1d2x6aFdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtcEl0MU1VdW1EVjZpZ2ZlSWhLMk1VVkR2M3ZUTkY4TzQydG94WlJiNTA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGVFQzY2U4VWJLbUtWS0lUSFVtZDJXR3ZyZi8zb0EyOWJORUwzZjBaRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldkUUtMNW1vb3NnQ01qL2tVZS83Q2dLVDZsTFAwd1pCY201VkN4Qld1ZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUE4dml2VGsrdS9QYlBkclJXOUJJdFovcExhM1VTZzhSNHdmaDJwUlVsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURIMXRrSW5MQkdIdXdDemJLTDQ2TzdoODR4cFBTajFoTE1KWktOUlpIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJR2MvbkFuTVd0L1lNMzhLYkFoRlBJVDNRMHMyNVg0TjNEVWsyNjN6MDUzb25IbXZWcDJwSmw2TWVUeVlSZjlWbSszTFY2NHBkRnNIaGVVQjBES2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiI3cDhSL01LMVRnUmpDeU1ValV3UitzMG5taHZWeXlRdGJBT1FVQi9FTzVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPYkV5UzZxa1JWcWVsY29zWng4a2hBIiwicGhvbmVJZCI6IjZhNWI0MzIyLWZmZDMtNGU4My1hZjBmLThjNjE5YjE5M2YzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmOXdTYmt0RmhkQjRXc1B4NVdjSWtvSENaUUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXdwNFcyVW43VzIxeVc1YThaeXZhWk9NbDk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVRN1hLODM4IiwibWUiOnsiaWQiOiIyMzQ5MTUzMjMyMDM4OjU3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWE50KzBHRU1tbWo3d0dHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLOUdFTmpPZVhhaTFBYkNCMnZtbXI4NEtPS1ZuYnI1ZFVMWnNiamQxMHlJPSIsImFjY291bnRTaWduYXR1cmUiOiIrRXB2cEd0bGZjcUtML2U4Z1ZQcTRydXZhVTVISC9wdjg4ZC8wSlRuK01HRnlkdlAzeXlTL0Z0cTd2bGNRUG1KWWlBWVlocEt1Zm5ZQjlzSVBhRTZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYmxrOHlIZjc2RzRpNGNQd2RqcFVoMlVtdm5VQjhUNndQRHhOWjJVSFhGWmt6bkMybUpZYkZLbjBwZDJSRk5HdGZPS2NZZ3FXMlhTUWMzUm15TTBTaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzMjMyMDM4OjU3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN2UmhEWXpubDJvdFFHd2dkcjVwcS9PQ2ppbFoyNitYVkMyYkc0M2RkTWkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY2OTI1NjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTE5In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "📄 How to make 2m daily.doc  ͟𖦝̱ ̱",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "Tony",
  errorChat: process.env.ERROR_CHAT || "",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
