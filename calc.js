


function suma(){
    var num1 = document.getElementById('caj1').value;
    var num2 = document.getElementById('caj2').value;
    var resultado =0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = parseInt(resultado);
    resultado = num1 + num2;
    
    resultado = document.getElementById("caj3").value = resultado;
    return false;
    }

function resta(){
    var num1 = document.getElementById('caj1').value;
    var num2 = document.getElementById('caj2').value;
    var resultado =0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = parseInt(resultado);
    resultado = num1 - num2;
    
    resultado = document.getElementById("caj3").value = resultado;
    return false;
    }

function multiplicacion(){
    var num1 = document.getElementById('caj1').value;
    var num2 = document.getElementById('caj2').value;
    var resultado =0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = parseInt(resultado);
    resultado = num1 * num2;
    
    resultado = document.getElementById("caj3").value = resultado;
    return false;
    }

function division(){
    var num1 = document.getElementById('caj1').value;
    var num2 = document.getElementById('caj2').value;
    var resultado =0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resultado = parseInt(resultado);
    resultado = num1 / num2;
    
    resultado = document.getElementById("caj3").value = resultado;
    return false;
    }