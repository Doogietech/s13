//7.	Ingresar un número de 3 cifras y luego mostrar 
//la suma de sus cifras elevada al cuadrado. 

let num = prompt("Ingrese un numero de 3 cifras")

if(num>900|| num<100){
    alert(`error`)
}
else{
    let n = num.toString();
    let s = parseInt(n.charAt(0)) + parseInt(n.charAt(1)) + parseInt(n.charAt(2));
    let resultaddo = Math.pow(s,2);
    alert(`la suma de sus cifra elevado al cuandrado es: ${resultaddo} del  numero${num}`);
}
