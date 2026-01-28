function calcularNota() {
    let total = 10;
    let correctas = document.querySelectorAll(
        'input[type="radio"][data-correct]:checked'
    ).length;

    document.getElementById("resultado").innerHTML =
        "Tu nota final es: <strong>" + correctas + " / " + total + "</strong>";
}
