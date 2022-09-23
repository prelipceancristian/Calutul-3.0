const fs = require('node:fs');
const path = require('node:path');

class CommandHelper{

    static GetCommandFiles() {
        const commandsPath = path.join(__dirname, '..', '/commands');
        return fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    }
}

module.exports = CommandHelper;
