module.exports = {
  name: "8ball",
  aliases: ["8"],
  description: "8ball is cool ig",
  usage: "8ball",
  run: async (client, message, args) => {

        let question = args[0]
       



    if (!question) {
      message.channel.send("You will have to enter your question next to the command!")
    }
     

   else {

      let responses = ["Of course","NO","Yes","No","Without a doubt","Probably","Maybe","Who knows","I dont know","I am not sure about that"]

      let response = Math.floor(Math.random() * responses.length)

      message.reply(responses[response])

    }


  }
}