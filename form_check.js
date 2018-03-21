function isEmpty(text) {
    if (text.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) == -1) {
            return false;
        }
    }
    return true;
}

function checkString(text, message) {
    if (isEmpty(text) || isWhiteSpace(text)) {
        alert(message);
        return false;
    }
    return true
}

function validate(form) {
    var stringsGood = true;
    var imie = form.elements["f_imie"].value;
    stringsGood = stringsGood && checkString(imie, "Podaj imie!")
    var nazwisko = form.elements["f_nazwisko"].value;
    stringsGood = stringsGood && checkString(nazwisko, "Podaj nazwisko!")
    var kod = form.elements["f_kod"].value;
    stringsGood = stringsGood && checkString(kod, "Podaj kod pocztowy!")
    var ulica = form.elements["f_ulica"].value;
    stringsGood = stringsGood && checkString(ulica, "Podaj ulice!")
    var miasto = form.elements["f_miasto"].value;
    stringsGood = stringsGood && checkString(miasto, "Podaj miasto!")
    return stringsGood;
}




