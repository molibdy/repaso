/**************
 * Declaración de funciones *
 ***************/



//Reto 1.

function zodiacSign(fecha:Date):string{
    let signo:string='';
    fecha.setFullYear(2000)
    if(fecha<= new Date(2000,2,19) && fecha>= new Date(2000,1,20)){
        signo='Acuario'
    }
    else if(fecha<= new Date(2000,3,20) && fecha>= new Date(2000,2,20)){
        signo='Piscis'
    }
    else if(fecha<= new Date(2000,4,19) && fecha>= new Date(2000,3,21)){
        signo='Aries'
    }
    else if(fecha<= new Date(2000,5,20) && fecha>= new Date(2000,4,20)){
        signo='Tauro'
    }
    else if(fecha<= new Date(2000,6,20) && fecha>= new Date(2000,5,21)){
        signo='Geminis'
    }
    else if(fecha<= new Date(2000,7,22) && fecha>= new Date(2000,6,21)){
        signo='Cancer'
    }
    else if(fecha<= new Date(2000,8,22) && fecha>= new Date(2000,7,23)){
        signo='Leo'
    }
    else if(fecha<= new Date(2000,9,22) && fecha>= new Date(2000,8,23)){
        signo='Virgo'
    }
    else if(fecha<= new Date(2000,10,22) && fecha>= new Date(2000,9,23)){
        signo='libra'
    }
    else if(fecha<= new Date(2000,11,21) && fecha>= new Date(2000,10,23)){
        signo='Escorpio'
    }
    else if(fecha<= new Date(2000,12,21) && fecha>= new Date(2000,11,22)){
        signo='Sagitario'
    }
    else if(fecha<= new Date(2000,1,21) || fecha>= new Date(2000,12,22)){
        signo='Capricornio'
    }
    return signo
}





//Reto 2.

function whatContinent(pais:string){
    let Europa:string[]=['España', 'Francia', 'Italia', 'Alemania', 'Suecia']
    let Asia:string[]=['China', 'Japón', 'India','Vietnam', 'Pakistan']
    let America:string[]=['Perú','Colombia','Argentina','Ecuador','Canadá']
    let Africa:string[]=['Etiopía','Marruecos','Sudán','Congo','Benin']
    if (Europa.includes(pais)){
        console.log('Europa');
    }
    else if (Asia.includes(pais)){
        console.log('Asia');
    }
    else if (America.includes(pais)){
        console.log('América');
    }
    else if (Africa.includes(pais)){
        console.log('África');
    }
    else{
        console.log('Oceanía');
    }
}





/**************
 * Programa Principal *
 ***************/


//1.
let fecha:Date= new Date(1993,2,18);
console.log(zodiacSign(fecha))


 //2.
 whatContinent('España');








//Alternatives

 //Reto 1.

// function zodiacSign(fecha:number[]):string{
//     let signo:string='';
//     if(fecha[1]==1 && fecha[2]>=20 || fecha[1]==2 && fecha[2]<=19){
//         signo='Acuario'
//     }
//     else if(fecha[1]==2 && fecha[2]>=20 || fecha[1]==3 && fecha[2]<=20){
//         signo='Piscis'
//     }
//     else if(fecha[1]==3 && fecha[2]>=21 || fecha[1]==4 && fecha[2]<=19){
//         signo='Aries'
//     }
//     else if(fecha[1]==4 && fecha[2]>=20 || fecha[1]==5 && fecha[2]<=20){
//         signo='Tauro'
//     }
//     else if(fecha[1]==5 && fecha[2]>=21 || fecha[1]==6 && fecha[2]<=20){
//         signo='Geminis'
//     }
//     else if(fecha[1]==6 && fecha[2]>=21 || fecha[1]==7 && fecha[2]<=22){
//         signo='Cancer'
//     }
//     else if(fecha[1]==7 && fecha[2]>=23 || fecha[1]==8 && fecha[2]<=22){
//         signo='Leo'
//     }
//     else if(fecha[1]==8 && fecha[2]>=23 || fecha[1]==9 && fecha[2]<=22){
//         signo='Virgo'
//     }
//     else if(fecha[1]==9 && fecha[2]>=23 || fecha[1]==10 && fecha[2]<=22){
//         signo='libra'
//     }
//     else if(fecha[1]==10 && fecha[2]>=23 || fecha[1]==11 && fecha[2]<=21){
//         signo='Escorpio'
//     }
//     else if(fecha[1]==11 && fecha[2]>=22 || fecha[1]==12 && fecha[2]<=21){
//         signo='Sagitario'
//     }
//     else if(fecha[1]==12 && fecha[2]>=22 || fecha[1]==1 && fecha[2]<=19){
//         signo='Capricornio'
//     }
//     return signo
// }




//Reto 2.

// function whatContinent(pais:string){
//     if(pais=='España'|| pais=='Francia' || pais=='Italia' || pais=='Alemania' || pais=='Suecia'){
//         console.log('Europa');
//     } 
//     else if(pais=='China'|| pais=='Japón' || pais=='India' || pais=='Vietnam' || pais=='Pakistan'){
//         console.log('Asia');
//     }
//     else if(pais=='Perú'|| pais=='Colombia' || pais=='Argentina' || pais=='Ecuador' || pais=='Canadá'){
//         console.log('América');
//     }
//     else if(pais=='Etiopía'|| pais=='Marruecos' || pais=='Sudán' || pais=='Congo' || pais=='Benin'){
//         console.log('África');
//     }
//     else {
//         console.log('Oceanía');
//     }  
// }