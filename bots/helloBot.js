let helloBot = token=> {
    const Telegraf = require(`telegraf`),

    bot = new Telegraf(token)

    bot.on('new_chat_members', (ctx) =>{
        console.log(ctx.from);
        ctx.reply(`
            @${ctx.from.username}
            Hello ${ctx.from.username}, Welcome to us chat!
            read rules of group, and keep to follo them (:
        `, {reply_to_message_id: ctx.message.message_id})
    })
}

module.exports = helloBot