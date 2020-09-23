// imports
const { argv } = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const { colors } = require('colors');

// constants
const comando = argv._[0];

// options
switch (comando) {
    case 'crear':
        console.log(crear(argv.descripcion));
        break;

    case 'listar':
        // console.log(getListado());
        let listado = getListado();

        for (const tarea of listado) {
            console.log('=========================='.green);
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(borrar(argv.descripcion));
        break;

    default:
        console.log('Comando no reconocido 😒');
        break;
}