function isEmpty(text) {
    if (text.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function validate(form) {
    var is_name_empty = isEmpty(form.elements["f_imie"].value);
    console.log("f_imie");
    console.log(is_name_empty);

}

function my_function(){
    var form1 = document.getElementById("data_form");
    validate(form1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two second later');
    window.onload = my_function();
}

demo();




