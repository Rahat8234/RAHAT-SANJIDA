const fs = require("fs");
const request = require("request");

module.exports.config = {
    name: "logo",
    version: "2.0.0",
    hasPermission: 0,
    credits: "𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊",
    description: "",
    commandCategory: "user",
    usages: "text",
    cooldowns: 5,
    dependencies: {
      "nayan-server": "",
      "request": ""
      
    }
  },

  run: async function ({ api, event, args }) {
    const { messageID, threadID } = event;
    if (!args[0])
      return api.sendMessage(`
        🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 50...`,
        threadID,
        messageID
      );

    const content = args.join(" ");
    const msg = content.split(" ");
    const number = msg[0].trim();
    let name = msg[1] ? msg.slice(1).join(" ").trim() : "Mohammad Nayan";

    const { ephoto } = require("nayan-server");

    let url;
    switch (number) {
      case "1":
        url = "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html";
        break;
      case "2":
        url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-vang-ruc-215.html";
        break;
      case "3":
        url = "https://ephoto360.com/tao-hieu-ung-chu-neon-da-sac-truc-tuyen-985.html";
        break;
      case "4":
        url = "https://ephoto360.com/hieu-ung-chu-phong-cach-logo-naruto-shippuden-1001.html";
        break;
      case "5":
        url = "https://ephoto360.com/hieu-ung-chu/chu-kim-loai-tong-mau-tim-175.html";
        break;
      case "6":
        url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html";
        break;
      case "7":
        url = "https://ephoto360.com/hieu-ung-chu-neon-canh-ac-quy-online-808.html";
        break;
      case "8":
        url = "https://ephoto360.com/hieu-ung-viet-chu-len-cua-so-mua-truc-tuyen-806.html";
        break;
      case "9":
        url = "https://ephoto360.com/hieu-ung-tao-chu-ky-anh-sang-nhieu-mau-sac-686.html";
        break;
      case "10":
        url = "https://ephoto360.com/tao-avatar-chu-canh-thien-than-nhieu-mau-893.html";
        break;
      case "11":
        url = "https://ephoto360.com/hieu-ung-chu-anh-sang-theo-phong-cach-cong-nghe-tuong-lai-769.html";
        break;
      case "12":
        url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html";
        break;
      case "13":
        url = "https://ephoto360.com/tao-hinh-nen-cho-dien-thoai-theo-phong-cach-galaxy-cuc-chat-586.html";
        break;
      case "14":
        url = "https://ephoto360.com/tao-logo-mascot-phong-cach-galaxy-462.html";
        break;
      case "15":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-galaxy-canh-thien-than-moi-289.html";
        break;
      case "16":
        url = "https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html";
        break;
      case "17":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-da-quy-hong-ngoc-3d-281.html";
        break;
      case "18":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-cam-thach-hoa-van-275.html";
        break;
      case "19":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-mau-sac-160.html";
        break;
      case "20":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-sao-online-85.html";
        break;
      case "21":
        url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html";
        break;
      case "22":
        url = "https://ephoto360.com/hieu-ung-lua/hieu-ung-chu-canh-lua-372.html";
        break;
      case "23":
        url = "https://ephoto360.com/tao-anh-bia-7-vien-ngoc-rong-dragon-ball-online-dep-doc-chat-nhat-476.html";
        break;
      case "24":
        url = "https://ephoto360.com/sinh-nhat/ghi-loi-chuc-len-banh-sinh-nhat-229.html";
        break;
      case "25":
        url = "https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html";
        break;
      case "26":
        url = "https://ephoto360.com/tao-anh-bia-one-piece-dao-hai-tac-truc-tuyen-cuc-dep-626.html";
        break;
      case "27":
        url = "https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html";
        break;
      case "28":
        url = "https://ephoto360.com/che-video-trung-thu-fa-voi-ten-cua-ban-700.html";
        break;
      case "29":
        url = "https://ephoto360.com/hieu-ung-chu/tao-chu-phong-cac-retro-67.html";
        break;
      case "30":
        url = "https://ephoto360.com/tao-logo-theo-ten-phong-cach-galaxy-460.html";
        break;
      case "31":
        url = "https://ephoto360.com/tao-logo-phong-cach-may-chieu-3d-518.html";
        break;
      case "32":
        url = "https://ephoto360.com/tao-logo-hoa-ma-vang-de-xay-dung-thuong-hieu-719.html";
        break;
      case "33":
        url = "https://ephoto360.com/tao-logo-avatar-du-lich-phong-cach-den-trang-643.html";
        break;
      case "34":
        url = "https://ephoto360.com/hieu-ung-chu/tao-chu-bang-tuyet-107.html";
        break;
      case "35":
        url = "https://ephoto360.com/tao-hieu-ung-chu-digital-glitch-truc-tuyen-941.html";
        break;
      case "36":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-phao-bong-356.html";
        break;
      case "37":
        url = "https://ephoto360.com/hieu-ung-chu/chu-canh-thien-than-176.html";
        break;
      case "38":
        url = "https://ephoto360.com/hieu-ung-chu/tao-chu-duoi-nuoc-73.html";
        break;
      case "39":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-giot-nuoc-106.html";
        break;
      case "40":
        url = "https://ephoto360.com/hieu-ung-ve/tao-hieu-ung-chu-ban-dem-hieu-ung-lend-cho-chu-147.html";
        break;
      case "41":
        url = "https://ephoto360.com/hieu-ung-chu/viet-chu-vang-ngoc-online-285.html";
        break;
      case "42":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html";
        break;
      case "43":
        url = "https://ephoto360.com/hieu-ung-viet-chu-3d-len-bai-bien-814.html";
        break;
      case "44":
        url = "https://ephoto360.com/hieu-ung-ve/mau-logo-avatar-galaxy-wolf-cuc-chat-366.html";
        break;
      case "45":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-dance-text-312.html";
        break;
      case "46":
        url = "https://ephoto360.com/hieu-ung-chu/tao-avatar-gold-pro-303.html";
        break;
      case "47":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-anh-long-chu-217.html";
        break;
      case "48":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-equalizer-music-259.html";
        break;
      case "49":
        url = "https://ephoto360.com/tao-hieu-ung-chu-may-tren-bau-troi-711.html";
        break;
      case "50":
        url = "https://ephoto360.com/tao-logo-phong-cach-blackpink-kem-chu-ky-cac-thanh-vien-1002.html";
        break;
      case "51":
        url = "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html";
        break;
      default:
        console.log("Invalid number");
        break;
    }

    if (!fs.existsSync(__dirname + "/cache")) {
      fs.mkdirSync(__dirname + "/cache");
    }

    try {
      let data = await ephoto(url, [name]);
      if (!data || !data.url) {
        throw new Error("Failed to retrieve a valid URL from ephoto.");
      }

       file = fs.createWriteStream(__dirname + "/cache/ephoto.jpg");
      const link = data.url;
      const rqs = request(encodeURI(link));
      rqs.pipe(file);
      file.on("finish", () => {
        setTimeout(function () {
          return api.sendMessage(
            {
              body: `❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : ${global.config.BOTNAME} 🤖\n❐ This Bot Owner : 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊😘\n❐ Your Input Name : ${name}\n\n___________________________________`,
              attachment: fs.createReadStream(__dirname + "/cache/ephoto.jpg"),
            },
            threadID,
            messageID
          );
        }, 5000);
      });
    } catch (err) {
      api.sendMessage(`
       🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 50...`,
        threadID,
        messageID
      );
    }
  },
};
