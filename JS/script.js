let scrollButton = document.getElementById("scroll");

window.onscroll = function () {
    scrollButton.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
