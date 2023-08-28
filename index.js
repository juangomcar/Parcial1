document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrarseBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Limpia el formulario
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
        document.getElementById("confirmarContraseña").value = "";
        document.getElementById("generoMasculino").checked = false;
        document.getElementById("generoFemenino").checked = false;
        document.getElementById("generoPND").checked = false;
        document.getElementById("pais").selectedIndex = 0;
        document.querySelectorAll('input[name="interest"]').forEach(checkbox => checkbox.checked = false);
        document.getElementById("comments").value = "";
        document.getElementById("fileUpload").value = "";


        // Muestra el modal
        var registroExitosoModal = new bootstrap.Modal(document.getElementById("registroExitosoModal"));
        registroExitosoModal.show();
    });
});