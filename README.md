# Zero - Discord Music Bot

# 🎵 Music commands

```
play <URL>, play music in a voice channel.
pause, pause the current music.
resume, puts the current music back on.
skip, skip to next music.
stop, stop all music.
queue, see the next songs. - Work in Progress
volume <1 - 100>, change the volume. - Work in Progress
clear-queue, remove music in the queue. - Work in Progress
nowplaying, see music in progress. - Work in Progress
```

# 💡 General commands

```
ping, see the bot latency. - Work in Progress
help, see the list of available commands.
```

# ⚙️ Configuration
Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "PREFIX": "!",
  "STAY_TIME": 30
}
```

# ⚙️ Running

```
npm run start
```

## Installation
```
[sudo] npm install forever -g
```
## Usage
```
forever start index.js
```

# 🤝 Contributing

1. [Fork the repository](https://github.com/TylerBurr/zero/fork)
2. Clone your fork: `git clone https://github.com/TylerBurr/zero.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request
