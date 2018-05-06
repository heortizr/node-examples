const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log(`Tabla del ${colors.green(argv.base)}`);
                console.log(`${resp}`.white);
            }).catch(err => console.error(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`archivo creado: ${colors.green(archivo)}`);
            }).catch(err => console.error(err));
        break;

    default:
        console.log(`Comando no reconocido`);
        break;
}