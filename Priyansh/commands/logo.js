const fs = require("fs");
const axios = require("axios");
const request = require("request");

module.exports = {
  config: {
    name: "logo",
    version: "2.0.0",
    hasPermission: 0,
    credits: "RAHAT",
    description: "",
    commandCategory: "user",
    usages: "text",
    cooldowns: 5,
    dependencies: {
      "nayan-server": "",
    },
  },

  run: async function ({ api, event, args }) {
    const { messageID, threadID } = event;
    api.setMessageReaction("⏳️", messageID);

    if (!args[0])
      return api.sendMessage(
        `🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 50...`,
        threadID,
        messageID
      );

    const content = args.join(" ");
    const msg = content.split(" ");
    const number = msg[0].trim();
    let name = msg[1] ? msg.slice(1).join(" ").trim() : "Mohammad Nayan";

    const { ephoto } = require("nayan-server");

    let url;
    // Mapping URLs based on user input number.
    switch (number) {
      case "1":
        url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html";
        break;
      case "2":
        url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-vang-ruc-215.html";
        break;
      // Continue adding cases for all numbers as in your original code...
      case "50":
        url = "https://ephoto360.com/tao-logo-phong-cach-blackpink-kem-chu-ky-cac-thanh-vien-1002.html";
        break;
      case "51":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html";
        break;
      default:
        return api.sendMessage(
          `Invalid option! Please choose a valid number between 1 and 51.`,
          threadID,
          messageID
        );
    }

    if (!fs.existsSync(__dirname + "/cache")) {
      fs.mkdirSync(__dirname + "/cache");
    }

    try {
      let data = await ephoto(url, [name]);
      if (!data || !data.url) {
        throw new Error("Failed to retrieve a valid URL from ephoto.");
      }

      var file = fs.createWriteStream(__dirname + "/cache/ephoto.jpg");
      const link = data.url;
      const rqs = request(encodeURI(link));
      api.setMessageReaction("✅", messageID);
      rqs.pipe(file);
      file.on("finish", () => {
        setTimeout(function () {
          return api.sendMessage(
            {
              body: `❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : ${global.config.BOTNAME} 🤖\n❐ This Bot Owner : Khan Rahul RK😘\n❐ Your Input Name : ${name}\n\n___________________________________`,
              attachment: fs.createReadStream(__dirname + "/cache/ephoto.jpg"),
            },
            threadID,
            messageID
          );
        }, 5000);
      });
    } catch (err) {
      console.error(err);
      api.sendMessage(
        `🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 50...`,
        threadID,
        messageID
      );
    }
  },
};
