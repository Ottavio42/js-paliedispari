function palindroma(parola) {
    var contrarioP = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        contrarioP += parola[i];
    }
    if ( parola == contrarioP) {
        return true;
    }
    else{
        return false;
    }
    
}

var parolaU = prompt("Inserisci una parola palindroma :");

while (!isNaN(parolaU)) {
    parolaU = prompt("Questo è un numero riprova :");
}


if ( palindroma(parolaU) == true) {
    alert("Esatto, la parola è palindroma.")
} 
else {
    alert("Errato, la parola non è palindroma.")
}
