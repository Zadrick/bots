let badWordsBot = token=> {
    const Telegraf = require(`telegraf`),

    bot = new Telegraf(token)

    //2nd char looks like 1st, but 1st is eng char and 2nd is rus
    bot.hears(new RegExp(/бля[tт]ь|блядь|блядин[aа]|[хx]уй|пизд[aа]|пизд[eе]ц|[eе]б[yу]|еба[tт]ь|з[aа][eе]б[aа]л/iuy), ctx=> {
        ctx.reply(`
                    @${ctx.from.username}, выберите другое слово для выражения, ваше сообщение удалено
                `, {reply_to_message_id: ctx.message.message_id})
        ctx.deleteMessage(ctx.message.message_id)
    })
}

module.exports = badWordsBot