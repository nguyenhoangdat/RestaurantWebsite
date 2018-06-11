function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}
function sprawdz_radio(nazwa_radio) {
    var obiekt = document.getElementsByName(nazwa_radio);
    for (i = 0; i < obiekt.length; i++) {
        wybrany = obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}
function sprawdz_box(box_id) {
    var obiekt = document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}
function sprawdz() {
    var ok = true;
    obiektNazw = /^[a-zA-Z]{2,20}$/;
    obiektemail =
        /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;
    obiektTelefon = /^[0-9]{9,12}$/;
    obiektZip = /^[0-9]{5,6}$/;
    if (!sprawdzPole("name", obiektNazw)) {
        ok = false;
        document.getElementById("name-error").innerHTML =
            "Wpisz poprawnie imię!";
        document.getElementById("name").className = document.getElementById("name").className + " error";
    }
    else {
        document.getElementById("name-error").innerHTML = "";
        document.getElementById("name").className = document.getElementById("name").className.replace(" error", "");
    }

    if (!sprawdzPole("surname", obiektNazw)) {
        ok = false;
        document.getElementById("surname-error").innerHTML =
            "Wpisz poprawnie nazwisko!";
        document.getElementById("surname").className = document.getElementById("surname").className + " error";
    }
    else {
        document.getElementById("surname-error").innerHTML = "";
        document.getElementById("surname").className = document.getElementById("surname").className.replace(" error", "");
    }

    if (!sprawdzPole("city", obiektNazw)) {
        ok = false;
        document.getElementById("city-error").innerHTML =
            "Wpisz poprawnie nazwę miasta!";
        document.getElementById("city").className = document.getElementById("city").className + " error";
    }
    else {
        document.getElementById("city-error").innerHTML = "";
        document.getElementById("city").className = document.getElementById("city").className.replace(" error", "");
    }

    if (!sprawdzPole("street", obiektNazw)) {
        ok = false;
        document.getElementById("street-error").innerHTML =
            "Wpisz poprawnie nazwę ulicy!";
        document.getElementById("street").className = document.getElementById("street").className + " error";
    }
    else {
        document.getElementById("street-error").innerHTML = "";
        document.getElementById("street").className = document.getElementById("street").className.replace(" error", "");
    }

    if (!sprawdzPole("email", obiektemail)) {
        ok = false;
        document.getElementById("email-error").innerHTML =
            "Wpisz poprawny email!";
        document.getElementById("email").className = document.getElementById("email").className + " error";
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        document.getElementById("email").className = document.getElementById("email").className.replace(" error", "");
    }

    if (!sprawdzPole("phone", obiektTelefon)) {
        ok = false;
        document.getElementById("phone-error").innerHTML =
            "Wpisz poprawny nr telefonu!";
        document.getElementById("phone").className = document.getElementById("phone").className + " error";
    }
    else {
        document.getElementById("phone-error").innerHTML = "";
        document.getElementById("phone").className = document.getElementById("phone").className.replace(" error", "");
    }

    if (!sprawdzPole("zip", obiektZip)) {
        ok = false;
        document.getElementById("zip-error").innerHTML =
            "Wpisz poprawny nr telefonu!";
        document.getElementById("zip").className = document.getElementById("zip").className + " error";
    }
    else {
        document.getElementById("zip-error").innerHTML = "";
        document.getElementById("zip").className = document.getElementById("zip").className.replace(" error", "");
    }

    return ok;
} 
