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

function checkEmailRegEx(emailObj) {
    var email = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if (email.test(emailObj.value))
        return true;
    else {
        var errorFieldName = "e_" + emailObj.name.substr(2, emailObj.name.length);
        document.getElementById(errorFieldName).innerHTML = "Podaj właściwy e-mail!";
        emailObj.focus();
        startTimer(errorFieldName)
        return false;
    }
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        startTimer(errorFieldName)
        return false;
    }
    else {
        return true;
    }
}

function checkZIPCodeRegEx(str) {
    var ZIPCode = /^[0-9]{2}-[0-9]{3}$/;
    if (ZIPCode.test(str)) {
        document.getElementById("kod").innerHTML = "OK";
        document.getElementById("kod").className = "green";
        return false;
    }
    else {
        document.getElementById("kod").innerHTML = "Źle";
        document.getElementById("kod").className = "red";
        return true;
    }
}

function startTimer(fName) {
    window.setTimeout(`clearError(${fName})`, 5000);
}

function clearError(objName) {
    console.log(objName);
    objName.innerHTML = "";
    //document.getElementById(objName).innerHTML = "";
}

function validate(form) {
    var stringsGood = true;
    var imieInput = form.elements["f_imie"];
    if (!checkStringAndFocus(imieInput, "Podaj imię!")) {
        stringsGood = false;
        imieInput.className = "wrong";
    }
    else {
        imieInput.className = "";
    }

    var nazwiskoInput = form.elements["f_nazwisko"];
    if (!checkStringAndFocus(nazwiskoInput, "Podaj nazwisko!")) {
        stringsGood = false;
        nazwiskoInput.className = "wrong";
    }
    else {
        nazwiskoInput.className = "";
    }

    var kodInput = form.elements["f_kod"];
    if (checkZIPCodeRegEx(kodInput.value)) {
        stringsGood = false;
        kodInput.className = "wrong";
    }
    else {
        kodInput.className = "";
    }

    var ulicaInput = form.elements["f_ulica"];
    if (!checkStringAndFocus(ulicaInput, "Podaj ulicę!")) {
        stringsGood = false;
        ulicaInput.className = "wrong";
    }
    else {
        ulicaInput.className = "";
    }

    var miastoInput = form.elements["f_miasto"];
    if (!checkStringAndFocus(miastoInput, "Podaj miasto!")) {
        stringsGood = false;
        miastoInput.className = "wrong";
    }
    else {
        miastoInput.className = "";
    }

    var email = form.elements["f_email"];
    if (!checkEmailRegEx(email)) {
        stringsGood = false;
        email.className = "wrong";
    }
    else {
        email.className = "";
    }
    
    return stringsGood;
}

function showElement(e) {
    e.style.visibility = 'visible';
    //document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
    e.style.visibility = 'hidden';
    //document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        } alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    var tab = prevNode(b.previousSibling);
    var tBody = nextNode(tab.firstChild);
    var lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    var firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

//function checkString(text, message) {
//    if (isEmpty(text) || isWhiteSpace(text)) {
//        alert(message);
//        return false;
//    }
//    return true
//}

//function checkEmail(str) {
//    if (isWhiteSpace(str)) {
//        alert("Podaj właściwy e-mail");
//        return false;
//    }
//    else {
//        var at = str.indexOf("@");
//        if (at < 1) {
//            alert("Nieprawidłowy e-mail");
//            return false;
//        }
//        else {
//            var l = -1;
//            for (var i = 0; i < str.length; i++) {
//                var c = str.charAt(i);
//                if (c == ".") {
//                    l = i;
//                }
//            }
//            if ((l < (at + 2)) || (l == str.length - 1)) {
//                alert("Nieprawidłowy e-mail");
//                return false;
//            }
//        }
//        return true;
//    }
//}