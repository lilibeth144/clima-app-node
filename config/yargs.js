 const argv=require('yargs').options({
    direccion : {
        alias:'d',
        demand:true,
        desc:'Direccion de la ciudad para obtener el clima'
    }
 }).argv;
 console.log(argv.direccion);
 module.exports={
    argv
 }