document.getElementById("menu-btn").addEventListener("click", event => {
    let menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("active")) {
        menu.classList.add("desactive");
        setTimeout(function () {
            menu.classList.remove("desactive");
            menu.classList.remove("active");
        }, 450);
    } else {
        menu.classList.add("active");
    }
});