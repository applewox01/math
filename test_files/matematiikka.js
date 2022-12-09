function multiply_readonly(numero, lista) {
    var answer = [];
    for (var i = 0; i < lista.length; i++) {
        console.log("multiplying with array[".concat(i, "] or ").concat(lista[i]));
        console.log("".concat(lista[i], " * ").concat(numero, " = ").concat(lista[i] * numero));
        answer.push(lista[i] * numero);
    }
    console.log("the multiplication of array numbers ".concat(lista, " is ").concat(answer));
    return answer;
}
function input_number(numero, lista) {
    lista.push(numero);
    console.log("input pushed: ".concat(numero, ". array after push: ").concat(lista));
}
function array_length(lista) {
    console.log("the length of your array is ".concat(lista.length));
    return lista.length;
}
var inputs = [];
//TYPESCRIPTI RUNNATAAN MUUTTAMALLA SE JS FILEKSI, GIT BASH TERMINAL > tsc *tiedoston nimi*
//lataaksesi typescriptin, menen command prompttiin ja vedä se komento siellä....
//PYÖRITÄ KOODI: TERMINAL > "node [file name]"
//input_number for inputing numbers to array
//multiply_readonly for multiplying a number with every array number. wont change original array
//array_length is simple: return and log list length
input_number(5, inputs);
input_number(10, inputs);
multiply_readonly(2, inputs);
