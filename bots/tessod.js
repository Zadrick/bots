let tessod = (botAPI)=> {
    const Telegraf = require(`telegraf`),

    bot = new Telegraf(botAPI)

    bot.on('new_chat_members', (ctx) =>{
        console.log(ctx.from);
        ctx.reply(`
            @${ctx.from.username}
            Hello ${ctx.from.username}, Welcome to us chat!
            read rules of group, and keep to follo them (:
        `, {reply_to_message_id: ctx.message.message_id})
    })
    //2nd char looks like 1st, but 1st is eng char and 2nd is rus
    bot.hears(new RegExp(/бля[tт]ь|блядь|блядин[aа]|[хx]уй|пизд[aа]|пизд[eе]ц|[eе]б[yу]|еба[tт]ь|з[aа][eе]б[aа]л/iuy), ctx=> {
        ctx.reply(`
                    @${ctx.from.username}, выберите другое слово для выражения (:
                `, {reply_to_message_id: ctx.message.message_id})
    })
    bot.help(ctx => ctx.reply('Send me a sticker'))
    bot.on('sticker', ctx => ctx.reply('👍'))
    bot.hears('hi', ctx => ctx.reply('Hey there'))
    bot.launch()
}

module.exports = tessod