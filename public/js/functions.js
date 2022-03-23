document.getElementById("menu-btn").addEventListener("click", event => {
    let menu = document.getElementById("mobile-menu");
    let main = document.getElementsByTagName("MAIN")[0];
    if (menu.classList.contains("active")) {
        menu.classList.add("desactive");
        main.classList.remove("active");
        setTimeout(function () {
            menu.classList.remove("desactive");
            menu.classList.remove("active");
        }, 450);
    } else {
        menu.classList.add("active");
        main.classList.add("active");
    }
});

function closeMenu() {
    let menu = document.getElementById("mobile-menu");
    let main = document.getElementsByTagName("MAIN")[0];
    if (menu.classList.contains("active")) {
        menu.classList.add("desactive");
        main.classList.remove("active");
        setTimeout(function () {
            menu.classList.remove("desactive");
            menu.classList.remove("active");
        }, 450);
    }
}