const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprimen consola la tabla', opts)
    .command('crear', 'Genera un txt con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}