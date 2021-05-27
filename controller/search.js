const YouTube = require("youtube-sr").default;
const execute = require('./execute')

const { queue } = require('../utilities/configUtil');
function search(message) {
    let id = '';
    const args = message.content.split(" ").filter(arr => arr !== '!play').join(' ');
    YouTube.search(args, { limit: 1 })
        .then(x => {
            id = x[0].id;
            message.content = args.replace(args, '!play https://www.youtube.com/watch?v=' + id)
            execute.execute(message)
        })
        .catch(console.error)
}

module.exports = {
    search
}