/*
var toggle = document.getElementById("makeall-dark-mode-toggle");
var darkTheme = document.getElementById("makeall-dark-mode-theme");

toggle.addEventListener("click", () => {
    if (toggle.className === "makeall-title hover-white no-underline white-90 light-mode") {
        setTheme("dark");
    } else if (toggle.className === "makeall-title hover-white no-underline white-90 dark-mode") {
        setTheme("light");
    }
    console.log(toggle.className);
});

function setTheme(mode) {
    localStorage.setItem("makeall-dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "makeall-title hover-white no-underline white-90 dark-mode";
        toggle.innerHTML = '<img src="/images/svg/sun.svg" alt="light-mode-mode" />';
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "makeall-title hover-white no-underline white-90 light-mode";
        toggle.innerHTML = '<img src="/images/svg/moon.svg" alt="dark-mode-mode" />';
    }
}

// the default theme is light
var savedTheme = localStorage.getItem("makeall-dark-mode-storage") || "light";
setTheme(savedTheme);
*/