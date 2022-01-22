const { get } = require("https");
module.exports = {
  name: "ok",
  aliases: [],
  description: "ok",
  usage: "ok",
  run: async (client, message, args) => { 
    
get("https://neko-love.xyz/api/v1/neko", (res) => {
    const { statusCode } = res;
    if (statusCode != 200) {
        res.resume;
    }
    res.setEncoding("utf8");
    let rawData = '';
    res.on("data", (chunk) => {
        rawData += chunk;
    });
    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.error(err.message);
});