export const arrayMinutes = [];
export const arraySecond = [];


function aleatorioMinutes(min, max, count)
    {
    let contador = count;
    let resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;

    arrayMinutes.push(resultado);

    if (contador === 4) {
        return
    }
    
    if (arrayMinutes.filter((e) => e === resultado).length === 2) {
        aleatorioMinutes(resultado + 1,resultado + 1, contador + 1);
         
     } else {
        aleatorioMinutes(resultado, resultado + 1, contador + 1);
 }
    }

    function aleatorioSecond(min, max, count)
    {
    let contador = count;
    let resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;
    arraySecond.push(resultado);
    if (contador === 4) {
        return
    }
    if (arrayMinutes[contador - 1] === arrayMinutes[contador]) {
           aleatorioSecond(35, 59, contador + 1 );
            
        } else {
            aleatorioSecond(1, 20, contador + 1 );
    }
    };
    

const minutes = aleatorioMinutes(0, 1, 1);
/* const minutes2 = aleatorio(2, 3); */
const second = aleatorioSecond(0, 10, 1)
/* const second2 = aleatorio(35,59); */
console.log(arrayMinutes, arraySecond);





const hora = `08:00:53`
const hourArray = hora.split(':');

/* const clave = []; */

/* if(file === 0){
    clave.push(minutes);
    hourArray[1] = `0${minutes}`;
    hourArray[2] = second;
    const resultHourArray = hourArray.join(':');
    console.log(resultHourArray);
} */  /* else if(file === 1) {
    hourArray[1] = `0${minutes}`;
    hourArray[2] = second;
    if (clave[0] < 2 && ) {
        
    }
} */

