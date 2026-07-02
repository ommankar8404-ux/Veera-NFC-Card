// Veera Real Estate Digital Business Card

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});