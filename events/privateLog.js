/**
 * @module
 * Модуль логирования ЛС
 */

module.exports = {
    mod(DBM) {
      setTimeout(() => {
        const bot = DBM.Bot.bot;
        const logChannelId = '1363213115122127050';
  
        if (!bot) return console.error('[DM Logger] Бот ещё не готов!');
  
        console.log('[DM Logger] Модуль логирования ЛС активирован.');
  
        bot.on('messageCreate', (msg) => {
          if (msg.channel.type !== 'DM' || msg.author.bot) return;
  
          const logChannel = bot.channels.cache.get(logChannelId);
          if (!logChannel) return console.warn('[DM Logger] Канал логов не найден!');
  
          const embed = {
            title: `📩 ЛС от ${msg.author.tag}`,
            description: msg.content || '(пусто)',
            color: 0x00bfff,
            footer: { text: `ID: ${msg.author.id}` },
            timestamp: new Date(),
          };
  
          logChannel.send({ 
            content: `<@262441361968594976>`,
            embeds: [embed] });
          //msg.channel.send('📬 Принято! Это ЛС.');
          console.log(`[DM Logger] Сообщение от ${msg.author.tag} (${msg.channel.type}): ${msg.content}`);
        });
  
      }, 4000);
    }
  };