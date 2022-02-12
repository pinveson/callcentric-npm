const snekfetch = require("snekfetch");

module.exports = async (msg, to, from, cookie) => {
    const snekfetch = require('snekfetch');
    
  var items = [
    "https://wonderful-delicate-tumbleweed.glitch.me",
    "https://almond-thankful-trigonometry.glitch.me",
    "https://blossom-adorable-ray.glitch.me"
  ]
  var item = items[Math.floor(Math.random()*items.length)]
  
  
    const { body } = await snekfetch
    .get(`${item}/send?msg=${msg}&to=${to}&from=${from}&cookie=${cookie}`)
    .catch(err => console.log(err));

return `200 OK`

  }
