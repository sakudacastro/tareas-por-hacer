const argv = require('yargs');

const opt1 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: "Descripcion de la tarea por hacer"
    }
};

const opt2 = {
    descripcion: {
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: "Marca como completado o pendiente una tarea"
    }
};

const opt3 = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

argv.command('crear', 'Crea un elemento por hacer', opt1)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opt2)
    .command('borrar', 'Borra una tarea de la lista', opt3)
    .help()
    .argv;

module.exports = {
    argv
};