let zoom = 2;
document.getElementById("botao-zoom").addEventListener("click", () => {
    zoom = zoom === 2 ? 3 : 2;
    document.querySelectorAll(".botao-icone").forEach(btn => btn.style.fontSize = zoom + "rem");
});
