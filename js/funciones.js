
const iframe = document.querySelector("iframe");

iframe.addEventListener("mouseover", () => {
    iframe.style.transform = "scale(1.02)";
    iframe.style.transition = "transform 0.3s ease";
});

iframe.addEventListener("mouseout", () => {
    iframe.style.transform = "scale(1)";
});

