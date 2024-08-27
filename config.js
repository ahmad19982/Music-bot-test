module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTI3NzE0NDQ1MDUzMDkzOTA0Mw.GJDSdL.-TQSUbTx7UJNcr30YWL9SYjaVeZ2v-uFLOfow',
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || '664901348709498921',
        extraMessages: false,
        loopMessage: false,
        lang: 'ar',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
