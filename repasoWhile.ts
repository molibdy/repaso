/**************
 * Declaración de funciones *
 ***************/


//Reto 6
function hasEven(array:number[]):string{
    let mensaje:string='No hay ningún número par';
    let i:number=0;
    let hasEven:boolean=false
    while(i<array.length && !hasEven){
        if (array[i]%2===0){
            hasEven=true;
            mensaje='Hay un número par';
        }
        i++;
    }
    return mensaje
}



//Reto 7
function allStartWithM(array:string[]):boolean{
    let allStartWithM:boolean=true
    let i:number=0;
    while(i<array.length && allStartWithM){
        if(array[i].slice(0,1)!='M'){
            allStartWithM=false;
        }
        i++;
    }
    return allStartWithM
}




/**************
 * Programa Principal *
 ***************/



 //6.

 console.log(hasEven([1,3,5,7,9,11]))
 console.log(hasEven([1,3,6,7,9,11]))



 //7.
 console.log(allStartWithM(['María','Mercedes','Marcos','Marta']))
 console.log(allStartWithM(['María','Mercedes','Juana','Marcos','Marta']))
