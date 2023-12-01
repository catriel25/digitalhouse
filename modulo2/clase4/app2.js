let pagoMes = 4000;
let consumoKWH = 380;

if (consumoKWH > 300){
    console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos
con informarle que se ha ajustado el total a pagar, que será de $${pagoMes * 1.20}`);
}

else{
    console.log(`Debido a que su hogar tubo un consumo menos a 300kwh, 
se mantienen sus subsidios y su total a pagar este mes es de $${pagoMes}`)
}