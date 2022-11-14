//10.	Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú, para ello, se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los tres tipos 
//detallados en el siguiente tarifario: 

//Concepto Precio Entrada general S/ 150.00 Entrada para mayores de 65 S/ 50.00  Entrada para menores de edad S/ 80.00 
 
//Luego mostrar la cantidad de dinero recaudado por cada tipo de tarifa y el monto recaudado en total. 

let num= +prompt("Ingrese cantidad entrada general vendida")
let num2= +prompt("Ingrese cantidad entrada para moyor vendida")
let num3= +prompt("Ingrese cantidad entrada para menor vendida")

alert(`la cantidad de dinero recaudado en general es: ${num*150} soles, en adulto mayor es:${num2*50} soles y en menor de edad es ${num3*80} soles`);