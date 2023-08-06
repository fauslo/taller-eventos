function saludar() {
    alert("Hola!");
}

const divSaludo = document.querySelector("div");
divSaludo.addEventListener("click", function (event) {
    event.stopPropagation();
    alert("Hola! Soy el div");
});
