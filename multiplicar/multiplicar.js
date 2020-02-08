const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('no es numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(colors.green(`"tabla-${base}" has been saved and limit ${limite}!`));
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`tabla ${base}==`.green);
    console.log('==============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
    //mais funcion
}