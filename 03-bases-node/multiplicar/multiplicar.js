const fs = require('fs');

let multiplicar = (base, limite) => {

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    return data;
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor de base '${base}' no es un numero`);
        }

        resolve(multiplicar(base, limite));
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject(`El valor de base '${base}' no es un numero`);
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, multiplicar(base, limite), (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo
};