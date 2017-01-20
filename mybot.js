var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {

    let prefix = "-";
    if(!msg.content.startsWith(prefix)) return;

    if (msg.content.startsWith(prefix + "ping")) {
      msg.channel.sendMessage("pong!");
    }

    else if (msg.content.startsWith(prefix + "Karaoke")) {
      msg.channel.sendMessage("The next karaoke is due to begin on **21st Jan at 5pm EST** to the theme MCU Factor");
    }

    else if (msg.content.startsWith(prefix + "Leads")) {
      msg.channel.sendMessage("**The current MCU leads are - ** RAG17 | CI, EmmaGrill | TBL, Bragswag | Monitoring, Novicehunter | Forums, Mungo | CI, ThinkPuppy | Applications, Seth | Showcase");
    }

    else if (msg.content.startsWith(prefix + "Leaders")) {
      msg.channel.sendMessage("**The current MCU leaders are -** CaptainTwinkle | Interaction, BocaRaton | Management, EmmaLie | Recruitment, Elaria | Unknown");
    }

    else if (msg.content.startsWith(prefix + "Directors")) {
      msg.channel.sendMessage("**The current MCU directors are -** Aftor | Managing Director, MineplexNinja | Creative Director");
    }

    else if (msg.content.startsWith(prefix + "Meeting")) {
      msg.channel.sendMessage("**Attention @everyone. A meeting is about to begin in the meeting channel. Please join this channel as soon as possible.");
    }

    else if (msg.content.startsWith(prefix + "NextStap")) {
      msg.channel.sendMessage("The next Sub Team Acceptance Party is due to be held on **27th January**");
    }

    else if (msg.content.startsWith(prefix + "event")) {
      msg.channel.sendMessage("@everyone an event is now being held in the events channel. Please make your way their if you wish to be included.");
    }

    else if (msg.content.startsWith(prefix + "creator")) {
      msg.channel.sendMessage("This bot was created by **Prelent**. For build / bot requests please PM him!");
    }

    else if (msg.content.startsWith(prefix + "rules")) {
      msg.channel.sendMessage("**If you have been tagged for not following the MCU rules, please catch up on them here - **https://sites.google.com/prod/view/mineplexcommunityuniters/rules?authuser=0");
    }

    else if (msg.content.startsWith(prefix + "invite")) {
      msg.channel.sendMessage("To invite a player to our discord, please give them this link - https://discord.gg/BFXnW6g");
    }

    else if (msg.content.startsWith(prefix + "LTmeeting")) {
      msg.channel.sendMessage("@here the LT is currently in a meeting. Please do not disturb them with mentions or PMs until this meeting has concluded. Thank you for your appreciation!");
    }

    else if (msg.content.startsWith(prefix + "applications")) {
      msg.channel.sendMessage("Please check with the -leads of the team you are applying as it may be closed. **Forums** - https://goo.gl/forms/fx5sBX74lgUbIFr62 | **TBL Member** - https://goo.gl/JJwLtr | **Mentoring** - https://goo.gl/forms/AtwenIlKAKehdhc92 | **Monitoring** - https://docs.google.com/forms/d/16cPmitiVYTAdVvo2xH1ugo-zx6DSGg2PXrFuGE22X9s/edit | **CI** - https://docs.google.com/forms/d/e/1FAIpQLSfwaEInV2Rk8nWmmQ0Iesxz1UldRX31ixPELZgl6tmcOegt8Q/viewform");
    }

    else if (msg.content.startsWith(prefix + "constitution")) {
      msg.channel.sendMessage("**The constitution lets you know your rights as an LT, Member or Visitor. ** https://goo.gl/rI8SZa**");
    }

    else if (msg.content.startsWith(prefix + "showcaseapp")) {
      msg.channel.sendMessage("https://goo.gl/Y8rqdm");
    }

    else if (msg.content.startsWith(prefix + "memberapp")) {
      msg.channel.sendMessage("https://goo.gl/02RDy1");
    }

    else if (msg.content.startsWith(prefix + "TBLgoals")) {
      msg.channel.sendMessage("https://goo.gl/9Se9ry");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login("MjcxODk5Nzg4NTcwNjU2NzY4.C2NLbg.EAbD-aPIPdnsmzcKFBl63OIt6oc");