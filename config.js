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
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shaka-pair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZJelJhNkhuakNuUUNKWWF5ZG9GTm1jdVg1N3RQbThuZ2JtTldobGdXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek16VCs5Q2pjVE9JVmEzaVZkY2lVY2kyUlF2dXdVOW10Zy9HN3JreFVBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TjI1WjE0SWJ1SmVrdVdnYjRyaFJNV0ZURFg2dEE5MWNkNXZ2NUZPcTBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQ0Njck5lZVYwQnJ4UU91dVhkeDc3Z3NMWDBBbWtkbit5K24rc2dqSGwwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldORHdkdGU5UVdxUFB0RTVTcXhLUnh1TnR0d0VReTdWRDZxbVBoYkI1bjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpNSEdoRy91SEpDR3dMNlpsKzBlNDUycW1DUU52eCtXb1ROS2E0aVgzaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURaZE9iOUttVGFsY29oS1h1TFM5Z2gxRVBCYW9qcFAzZ0FFWnFyQ0FWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1RzelN1NDFROWdWZ1dIcUt6VCtmRHE3c2Z4aHVGNU42SEw0Z2tVMmF6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQN2VyM053dk5OK3I3NWFzYWFMU3oxMGRCZkpGR0NDVVZueGhLVisvMGlrdDhVRytVckpJamNNTEkrNE9zNURmSE5iVTFJenk3aE9LWHNnOVRnWGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiIyaXVVL1I2dzAvMDJRaTNWbDZCbkZGV002K3ZBVDhtMVQ4UFczS2IwdDRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2aU9pTnFpcVJoNlBoOGt3OW5EVTV3IiwicGhvbmVJZCI6IjUyNjkxMGQ1LWQ2NzMtNGIyYi1iYzM1LTUyYjMzMmU5ZjU0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZlNvQURJUVVCN1dxbkF2bWhQWUR0SzJoeVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBkeHFHMEJVNUN5TXg1a1YwZHJaRkVkbjNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwzM0YxMjMyIiwibWUiOnsiaWQiOiIyMzQ5MTUzMjMyMDM4OjI5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNONlErNjhIRU9uMXpyc0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLY291ZDBsODR1SU4xSVVJNWNid1dqcWJzUkt1QVRhcGNMRk4zZUN4R0Q4PSIsImFjY291bnRTaWduYXR1cmUiOiJyN051K2s0SEdwVzQvNVpVY045SzdzUEFrYWtPeHBhVWNNNGxhb2lUZzBmb2drNHppMzlrOWwrQnVLYjZkWHczWmszL1ozdXB6K1VzV21QUmZkVGVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0xVc09ETFVWYS9mVE9Na2RCeCs4OWh6Z3dJWHpIa2FUUnA4dHVralBOdTNPNnFwemdmYTlzajBLQjBFaDVBaXlEZUkyK0Z1Um1RR25QbmtTbWkxaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzMjMyMDM4OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNuS0xuZEpmT0xpRGRTRkNPWEc4Rm82bTdFU3JnRTJxWEN4VGQzZ3NSZy8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU2Mzc3NTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTlpvIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
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
