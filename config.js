//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kipkogeimeshack6@gmail.com";
global.location = "Kapsabet,Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/DJMESHK/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagAqpD3gvWdo0IxmZ2Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/DJMESHK/Queen_Anita-V2_BetaV1/blob/main/lib/assets/asta.jpg?raw=true";
global.devs = "https://t.me/koechM";
global.sudo = process.env.SUDO || "254716091070";
global.owner = process.env.OWNER_NUMBER || "254716091070";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://github.com/DJMESHK/Queen_Anita-V2_BetaV1/blob/main/lib/assets/asta.jpg?raw=true";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0dsejZRWFJGZEZvcXRRUXYxYUNOZ0lGbC9JcG5Dcmw3dm54NFRaaGFWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGEyNXl2MExhZ0JEWkdSbFRJNEZsd2VhTldqZzVHL09YUTd4MTNObnlHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT1NQekpqWTZmekRRcjZObEFJNkloTmpIOWJVRkcwcmtuU0FNZUZ2SzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUm9yY0diOE5QZTNuUEdYaUZwK2xnamxUWlVaOUIvUVhlVHlCYms1UnpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEUU5EbTBnZmZibXBGMGZERGVZd0VkSU5rSUxwanBkcDBCekRVdHlsbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4eTMxcnNYYUVPTk1rRXkvcWE3cnd6OHErREpMbTg0SlR5Y1hQZ1hnbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZyR3dzZzVXRWpyNmdnb0JjWmRGWFQzZXJRMXRqTkw2S2MvKzdZZ0ZYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGEyU3VRTnZxQnZHbVBPclhZKzBQdEdmNGJiR3c4UjlWRGpYNlFQVlVSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ2aXpZc2pYclJsSFBJNHRoT0hORDZ5akhEQzFjVlQzQ2tyeW56djV4MUpvd3NscWJPL1lsdENjYWltSGNzQXd0d2w3K1JhWjkzUW5ZOThBTFNzS2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJZZWxvbEFLZkhMZFp1a2o4bjUrTUhVQk5ub3JPQXRMU0RTU0ltN0M0c2drPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzRnNDQWM5S1FGbXBQS2J5REdGM2VBIiwicGhvbmVJZCI6IjliZDRmYTllLWJiM2MtNDA0NC1iYTVkLTE0NWMxMzJkYzU1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTbnRGd0lud2RQY09MMm1aOWk1U3hOTmlVQWc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPaTBMMHF2RHVsdHVYekZ4U2tEWTVtNmxpdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uSW9yZ0VFSVMrakxZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpwaWI3Zm1IcVV5WUh2RzR5a1doYUU3Z28wdHUvYnpjamt4QVdiQ0RnMDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYrSUNkQURHZGRXSWk1WjZaeTJDc2hoS3JxcGVrem1Ic3hTOVUzSUptUW5FbVB6UnZBWTBERnRjaS9UZHNPMVBGWGlEVlNVa0c4eVhOTjZOTGJDcUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxcUhjcEhmdGxDMzQ2TlRHcDNRZGx1d1dZcUtIcnY5d1czWHcrdkF6QytFUE4zcHVsOUFTcFp3NjV1cURZbmprV2FOT09lOWNhak5vc0JXSFBhT0VpZz09In0sIm1lIjp7ImlkIjoiMjU0NzE2MDkxMDcwOjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQxMDU5OTM4NDcxOTU1OjE1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTYwOTEwNzA6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2FZbSszNWg2bE1tQjd4dU1wRm9XaE80S05MYnYyODNJNU1RRm13ZzROUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDYzNTA2LCJsYXN0UHJvcEhhc2giOiIzUkVSbXkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "MESH_TECH_V1",
  author: process.env.PACK_AUTHER || "MESH_TECH_V1",
  packname: process.env.PACK_NAME || "M E S H",
  botname: process.env.BOT_NAME || "MESH_TECH_V1",
  ownername: process.env.OWNER_NAME || "Kipkogei",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "M E S H").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
