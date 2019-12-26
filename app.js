const argv1=require('./config/yargs.js').argv;
const clima=require('./clima/clima')
console.log(argv1.d);
clima.getClima(argv1.d).then(console.log)
    .catch(console.log);

try {
    if (argv1.d==='Madrid'){
        console.log("Si es Madrid")
        }else
    {throw "error no es Madrid"}

}
catch (err) {
    // sentencias para manejar cualquier excepción
    //console.log(err); // pasa el objeto de la excepción al manejador de errores
}