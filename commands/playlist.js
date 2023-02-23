const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça as melhores playlist de estudos'),

  async execute(interaction) {
    await interaction.reply('https://open.spotify.com/playlist/5pPGLR2GFjHjG8hD8DVRt2?si=b6853c308b594d35');
  }
}
