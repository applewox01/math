function multiply_readonly(numero: number, lista: number[]): any {
    let answer: number[] = [];
    for(let i=0; i < lista.length; i++) {
        console.log(`multiplying with array[${i}] or ${lista[i]}`);
        console.log(`${lista[i]} * ${numero} = ${lista[i] * numero}`);
        answer.push(lista[i] * numero);
    }
    console.log(`the multiplication of array numbers ${lista} is ${answer}`);
    return answer
}

function input_number(numero: number, lista: number[]): void {
    lista.push(numero);
    console.log(`input pushed: ${numero}. array after push: ${lista}`);
}

function array_length(lista: number[]): any {
    console.log(`the length of your array is ${lista.length}`);
    return lista.length
}

const inputs: number[] = [];
//TYPESCRIPTI RUNNATAAN MUUTTAMALLA SE JS FILEKSI, GIT BASH TERMINAL > tsc *tiedoston nimi*
//lataaksesi typescriptin, menen command prompttiin ja vedä se komento siellä....
//PYÖRITÄ KOODI: TERMINAL > "node [file name]"

//input_number for inputing numbers to array
//multiply_readonly for multiplying a number with every array number. wont change original array
//array_length is simple: return and log list length
input_number(5, inputs);
input_number(10, inputs);
multiply_readonly(2, inputs);



