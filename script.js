

function ac(){

    document.getElementById('venkey').value = " ";
} 
    function show(input){

    document.getElementById('venkey').value += input;
}

function cal(){

    let output =eval(document.getElementById('venkey').value);
    document.getElementById("venkey").value = output;
}

