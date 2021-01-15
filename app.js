let tecla = document.getElementById('binaryNumber')

    tecla.addEventListener('keypress', (event) => {
    event.preventDefault()
    let valorTecla = String.fromCharCode(event.keyCode)
    let valorParsed = parseInt(valorTecla)
    if(valorParsed == 1 || valorParsed == 0){
    tecla.value = tecla.value + valorParsed;
  }
})

let tecla2 = document.getElementById('decimalNumber2')

    tecla2.addEventListener('keypress', (event) => {
    event.preventDefault()
    let valorTecla2 = String.fromCharCode(event.keyCode)
    let valorParsed2 = parseInt(valorTecla2)
    if(valorParsed2){
    tecla2.value = tecla2.value + valorParsed2;
  }
})

function convertir(){
    let binaryNumber = document.getElementById("binaryNumber").value;
    let valorFinder = 1;
    let valorCounter = 0;
    let decimalNumber = 0;
    let powNumber = 0;

    binaryNumber = parseInt (binaryNumber, 10);

    while(binaryNumber > valorFinder){
        valorFinder = valorFinder * 10;
        valorCounter++;
    }

    if(binaryNumber < valorFinder && binaryNumber != 0){
        valorFinder = valorFinder / 10;
        valorCounter--;
    }

    do{
        if((binaryNumber / valorFinder) >= 1){
            powNumber = Math.pow(2,valorCounter);
            decimalNumber = decimalNumber + powNumber;
            binaryNumber = binaryNumber - valorFinder;
            valorFinder = valorFinder / 10;
            valorCounter--;
        }
        else if((binaryNumber / valorFinder) < 1){
            valorFinder = valorFinder / 10;
            valorCounter--;
        }
    }while(binaryNumber != 0);

    document.getElementById("decimalNumber").innerHTML = decimalNumber;
    binaryNumber = document.getElementById("binaryNumber").value;
    let temporal = document.getElementById("historyTotal").value;
    document.getElementById("historyTotal").innerHTML = temporal + "\n" + binaryNumber + ' = ' + decimalNumber;
}

function convertirDecimal(){
    let decimalNumber = document.getElementById("decimalNumber2").value;
    let binaryNumber = 0;
    let valorCounter = 1;

    do{
        if((decimalNumber % 2) != 0){
            binaryNumber = binaryNumber + (1 * valorCounter);
        }
        else if((decimalNumber % 2) == 0){
            binaryNumber = binaryNumber + (0 * valorCounter);
        }
        decimalNumber = decimalNumber / 2 >>0;
        valorCounter = valorCounter * 10;
    }while(decimalNumber >= 1);
    binaryNumber = binaryNumber + (decimalNumber * valorCounter);

    document.getElementById("binaryNumber2").innerHTML = binaryNumber;
    decimalNumber = document.getElementById("decimalNumber2").value;
    let temporal = document.getElementById("historyTotal2").value;
    document.getElementById("historyTotal2").innerHTML = temporal + "\n" + decimalNumber + ' = ' + binaryNumber;
}

function mostrarDecimal(){
    document.getElementById('dataarea').style.display = 'none';
    document.getElementById('dataarea2').style.display = 'block';
}

function mostrarBinario(){
    document.getElementById('dataarea2').style.display = 'none';
    document.getElementById('dataarea').style.display = 'block';
}