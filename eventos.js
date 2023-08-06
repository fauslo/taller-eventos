function saludar() {
    alert("Hola!");
}

const divSaludo = document.querySelector("div");
divSaludo.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
