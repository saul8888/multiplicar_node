//const fs = require('express');
//const fs = require('./fs');
const { argv } = require('./config/yargs')
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');
//console.log(multiplicar);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('no comando');
}

//let base = 7;
//console.log(process.argv);
//console.log(argv);

let argv2 = process.argv;
//let parametro = argv[2];
//console.log(parametro);
//let base = parametro.split('=')[1]
//console.log(argv.base);

//console.log('limite', argv.limite);
//console.log(argv2);

//console.log(base);