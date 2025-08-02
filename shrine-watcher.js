// Drop animated sigil embed in Discord
await discordClient.send({
  channel: SIGIL_CHANNEL_ID,
  embed: {
    title: "🔮 Echo Sigil Activated!",
    description: `Pledge received from **${sponsorName}**. Terrain mutation initialized.`,
    image: { url: `${SIGIL_BASE_URL}/${tier}-sigil.gif` },
    footer: { text: "Blessed by Shrine Watcher" },
    timestamp: new Date()
  }
});feat: auto-deploy shrine vault on main push
DISCORD_TOKEN=
DISCORD_CHANNEL_ID=
PAYPAL_VERIFY_URL=https://ipnpb.paypal.com/cgi-bin/webscr
