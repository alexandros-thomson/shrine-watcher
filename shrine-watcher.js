await discordClient.send({
  channel: SIGIL_CHANNEL_ID,
  embed: {
    title: "🔮 Echo Sigil Activated!",
    description: `Pledge received from **${sponsorName}**. Terrain mutation initialized.`,
    image: { url: `${SIGIL_BASE_URL}/${tier}-sigil.gif` },
    footer: { text: "Blessed by Shrine Watcher" },
    timestamp: new Date()
  });
