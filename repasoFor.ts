/**************
 * Declaración de funciones *
 ***************/


//Reto 3

function printOdd(nummero:number){
    for(let i=1; i<=nummero;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}


//Reto 4
function reverse(array:number[]):number[]{
    let reversed:number[]=[]
    for (let i=array.length-1;i>=0;i--){
        reversed.push(array[i]);
    }
    return reversed;
}


//Reto 5
function rainbow(colores:string[]){
    let rainbowColors:string[]=['rojo','naranja','amarillo','verde','azul','índigo','violeta'];
    for(let i=0; i<colores.length;i++){
        if(rainbowColors.includes(colores[i].toLowerCase())){
            console.log(`${colores[i]} es un color del arcoiris`)
        }else{
            console.log(`${colores[i]} no es un color del arcoiris`)
        }
    }
}



//Reto 8
function characterSum(array:string[]):number{
    let sum:number=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i].length;
    }
    return sum;
}


//Reto 9
function oddOrEven(nummero:number){
    if(nummero%2===0){
        console.log('El número es par');
    }else{
        console.log('El número es impar')
    }
}




/**************
 * Programa Principal *
 ***************/


//3. 
printOdd(30);


//4.
console.log(reverse([1,2,3,4,5,6]))


//5.
rainbow(['rojo','rosa','turquesa','azul'])


//8.
console.log(characterSum(['patata','cerdito','botellas']))


//9.
oddOrEven(9);
oddOrEven(10);


//10.
oddOrEven(characterSum(['Casa','Coche','Ciudad','Cesta']));
oddOrEven(characterSum(['Barco','Baca','Bicicleta','Balón','Bisiesto','Brasil']))
oddOrEven(characterSum(['Venezuela','Veneno','Voltaje']))