document.getElementById("regis_empre").addEventListener("submit", function (e) {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var message = document.getElementById("message");

    if (password1 !== password2) {
        message.textContent = "Las contraseñas no coinciden.";
        e.preventDefault(); // Evita que el formulario se envíe
    } else {
        message.textContent = ""; // Borra el mensaje de error si las contraseñas coinciden
    }
});