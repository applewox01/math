let inputs = [];

function add_history(element) {
    //doesn't work yet

    let cloned = document.getElementById("histclone").cloneNode(true);
    cloned.innerHTML = element;
    cloned.id += Date.now();
    document.body.insertBefore(cloned, document.getElementById("history"));

}

function clear_input() {
    document.getElementById("theinput").value = "";  
}

function log(input) {
    let validinput = input.replace("log[","]","");
    document.getElementById("array").innerHTML = inputs;
    document.getElementById("answer").innerHTML = validinput;
    document.getElementById("theinput").value = "";
}


function submit() {
    document.getElementById("answer").innerHTML = "".concat("log[".concat(String, "]"));
    let input = document.getElementById("theinput").value;
    if (input == "len" ) {
        array_length(inputs);
    } else if (input == "rou" ) {
        round_array(inputs);
    } else if (input == "arr" ) {
        arrange(inputs);
    } else if (input == "".concat("log[".concat(String, "]")) ) {
        log(inputs);
    }
}

function round_array(lista) {
    if (lista.length > 0) {
        var answer = [];
        for (var i = 0; i < lista.length; i++) {
            console.log("rounding [".concat(i, "] or ").concat(lista[i]));
            answer.push(Math.round(lista[i]));
        }  
        inputs = answer;
        document.getElementById("array").innerHTML = inputs;
        document.getElementById("answer").innerHTML = "rounded";
        document.getElementById("theinput").value = "";
        add_history(("".concat(Date.now(), " array: ").concat(lista, " rounded")));
    }
    else {
        document.getElementById("array").innerHTML = inputs;
        document.getElementById("answer").innerHTML = "array is empty, please input values with 'input_number' command";   
    }
}

function multiply_input(numero, lista) {
    if (document.getElementById("theinput").value != "") {
    if (lista.length > 0) {
    var answer = [];
    for (var i = 0; i < lista.length; i++) {
        console.log("multiplying with array[".concat(i, "] or ").concat(lista[i]));
        console.log("".concat(lista[i], " * ").concat(numero, " = ").concat(lista[i] * numero));
        answer.push(lista[i] * numero);
    }
    console.log("the multiplication of array numbers ".concat(lista, " with ").concat(numero, " is ").concat(answer));
    inputs = answer;
    document.getElementById("array").innerHTML = inputs;
    document.getElementById("answer").innerHTML = "the multiplication of array numbers ".concat(lista, " with ").concat(numero, " is ").concat(answer, " applied to array");
    document.getElementById("theinput").value = "";
    add_history(("".concat(Date.now(), " array: ").concat(lista, " input: ").concat(numero)));
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
add_history(("".concat(Date.now(), " array: ").concat(lista, " input: ").concat(numero)));
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
add_history(("".concat(Date.now(), " array: ").concat(lista, " input: ").concat(numero)));
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
add_history(("".concat(Date.now(), " array cleared")));
}

function arrange(lista) {
    if (lista.length > 0) {
        lista.sort();
        document.getElementById("array").innerHTML = inputs;
        document.getElementById("answer").innerHTML = "arranged";   
        document.getElementById("theinput").value = "";
        add_history(("".concat(Date.now(), " arranged")));
    }
    else {
        document.getElementById("array").innerHTML = inputs;
        document.getElementById("answer").innerHTML = "list empty";   
        document.getElementById("theinput").value = "";
    }
}
function array_length(lista) {
console.log("the length of your array is ".concat(lista.length));
document.getElementById("array").innerHTML = inputs;
document.getElementById("answer").innerHTML = "the length of your array is ".concat(lista.length);   
document.getElementById("theinput").value = "";
add_history(("".concat(Date.now(), " length checked")));
} 