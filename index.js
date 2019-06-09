const {sumar}=require('./modulos/mate'); // accedemos solamente a la funcion sumar
console.log('la suma es '+ sumar(4,8));

const saludo=require('./modulos/saludos.js');// accedemos a todas la funciones dentro de saludos.js
console.log(saludo.name('jojo'));
console.log(saludo.age(35));

console.log('------------------')

let a=5;
let b=6;
const suma=require('./modulos/colores')(a,b); //cuando se accede a una sola funcion, los
console.log(suma);                            //parametros (a y b) pueden colocarse tambien aqui con el require. 
 
console.log('******************')

const suma2=require('./modulos/colores'); 
console.log('segunda suma :' + suma2(a,b));

const autos=require('./modulos/autos');
console.log(autos.mercedes);
console.log('este auto es :' + autos.renault);

const texto=require('./modulos'); //accedemos directamente a un index.js 
console.log(texto.archivo); 
console.log(texto.archivo2); 

