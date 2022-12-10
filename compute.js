let inputs = [];

function add_history() {
    //doesn't work yet
}

function multiply_readonly(numero, lista) {
if (document.getElementById("theinput").value != "") {
if (lista.length > 0) {
var answer = [];
for (var i = 0; i < lista.length; i++) {
    console.log("multiplying with array[".concat(i, "] or ").concat(lista[i]));
    console.log("".concat(lista[i], " * ").concat(numero, " = ").concat(lista[i] * numero));
    answer.push(lista[i] * numero);
}
console.log("the multiplication of array numbers ".concat(lista, " with ").concat(numero, " is ").concat(answer));
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "the multiplication of array numbers ".concat(lista, " with ").concat(numero, " is ").concat(answer);
document.getElementById("theinput").value = "";
add_history();
}
else {
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "array is empty, please input values with 'input_number' command";
}
}
else {
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "input empty";  
}
}
function input_number(numero, lista) {
if (document.getElementById("theinput").value != "") {
lista.push(numero);
console.log("input pushed: ".concat(numero, ". array after push: ").concat(lista));
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "input pushed: ".concat(numero, ". array after push: ").concat(lista);
document.getElementById("theinput").value = "";
add_history();
}
else {
    document.getElementById("array").innerHTML = inputs;
    document.getElementById("answer").innerHTML = "input empty";    
}
}
function clear_array(lista) {
inputs = [];
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "array cleared";   
document.getElementById("theinput").value = "";
add_history();
}
function array_length(lista) {
console.log("the length of your array is ".concat(lista.length));
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "the length of your array is ".concat(lista.length);   
document.getElementById("theinput").value = "";
add_history();
} 