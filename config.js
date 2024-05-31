const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="allindekosgey6@gmail.com"
global.location="Nairobi,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Allindek/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/K5K7XZhA67xL9PzozeaFq9";
global.website=process.env.GURL || "https://chat.whatsapp.com/K5K7XZhA67xL9PzozeaFq9" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254723663951" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254723663951";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254723663951,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254723663951,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID |"SUHAIL_11_57_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrbkdFendBdU90RGJ3bUtpSmdlY2FNSS9PL3dndW1VR3ZQUFpiUHl4NFBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5aVhvWmd3VVRvaWFiMVlHbVVpWENRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3ZWI2ZjFiLTJiODYtNGY1NC04NzI5LWI2OGY0ZGQwN2I3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDExMyxcbiAgICAgIDExOCxcbiAgICAgIDE2NCxcbiAgICAgIDE5MyxcbiAgICAgIDkxLFxuICAgICAgNDMsXG4gICAgICAxODgsXG4gICAgICAxMDgsXG4gICAgICA0NCxcbiAgICAgIDE1OCxcbiAgICAgIDE3MyxcbiAgICAgIDIwMyxcbiAgICAgIDcsXG4gICAgICAxODIsXG4gICAgICAxMTUsXG4gICAgICAxOTEsXG4gICAgICAyMDUsXG4gICAgICAyMzQsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMjMzLFxuICAgICAgMTE3LFxuICAgICAgMzksXG4gICAgICA5NCxcbiAgICAgIDQ1LFxuICAgICAgOSxcbiAgICAgIDIxMyxcbiAgICAgIDUsXG4gICAgICA3MSxcbiAgICAgIDIwMyxcbiAgICAgIDIzOSxcbiAgICAgIDE5NyxcbiAgICAgIDE5NixcbiAgICAgIDUxLFxuICAgICAgMjA1LFxuICAgICAgMTkxLFxuICAgICAgMTEyLFxuICAgICAgMjQzLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTVWRllKTlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMzY2Mzk1MTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTAzMTkwNzczNzIwODA6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjRzNWtDRUovcTBiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1yTC94b1pUaWRtSk42azM5QUxJVTArZTJSWlFwci9KRlVtOFlJRzB3eDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibnQ1M0FtVVFuZ3NYUFRrTU9VR2FUeU1iVERBNmc0a1o1V1BkMUZEMzFDVEk5aCt6b3VJRWtMNmNtc1NUbUlxN1l3Rmt6cGZuSVVqOXp0U3JyNk9iQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDU0RjIxMHZ5a1ExOFFnUlhocXVMakdNK2VoS1hISXFIVTQ1NlFqOE9QcHl5bm9mT1JkRTFDQnZWaS9zSmRyQ3owK2M3aFBDUEw3YmV4dUs2a2NOakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzIzNjYzOTUxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2ODExMDQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Allinde-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©ALLINDE²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ALLINDE²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ALLINDE-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ALLINDE-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Allinde Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Allinde"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
