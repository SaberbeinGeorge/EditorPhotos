let arrayInfoHour = [];
let arrayInfoMinutes = [];
let array1 = [];
let array2 = [];
const arrayMinutes = [];
const arraySecond = [];


for (let i = 0; i <= 5; i++) {
array1.push(aleatorio1(81,94));
array2.push(aleatorio1(41,53));
}

function aleatorio1(min, max) {
    let resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;
    return resultado
};

function primerDato() {
    let inputHour = document.getElementById('hour').value;
    let inputBaterias = document.getElementById('numberBat').value;
    arrayInfoHour.push(inputHour);
    arrayInfoMinutes.push(arrayInfoMinutes);
    console.log(inputHour, inputBaterias);
};

function aleatorioMinutes(min, max, count)
    {
    let contador = count;
    let resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;

    arrayMinutes.push(resultado);

    if (contador === 5) {
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
    if (contador === 5) {
        return
    }
    if (arrayMinutes[contador - 1] === arrayMinutes[contador]) {
           aleatorioSecond(35, 59, contador + 1 );
            
        } else {
            aleatorioSecond(1, 20, contador + 1 );
    }
    };
    

aleatorioMinutes(0, 1, 1);

aleatorioSecond(0, 10, 1)