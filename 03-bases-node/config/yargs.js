const opts = {
    l: {
        name: 'listar',
        desc: 'Imprime en consola la tabla de multiplicar',
        conf: {
            base: { demand: true, alias: 'b' },
            limite: { alias: 'l', default: 10 }
        }
    },
    c: {
        name: 'crear',
        desc: 'Imprime en texto plano la tabla de multiplicar',
        conf: {
            base: { demand: true, alias: 'b' },
            limite: { alias: 'l', default: 10 }
        }
    }
};

const { argv } = require('yargs')
    .command(opts.l.name, opts.l.desc, opts.l.conf)
    .command(opts.c.name, opts.c.desc, opts.c.conf)
    .help();

module.exports = {
    argv
};