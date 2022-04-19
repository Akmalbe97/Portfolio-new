// function push() {
//     document.getElementById("demo")
// }
let hello = document.querySelector(".hello");
let elLightButton = document.querySelector(".js-light-button");
let elDarkButton = document.querySelector(".js-dark-button");



elDarkButton.addEventListener("click", function () {
    hello.classList.add("dark-mode");
});

elLightButton.addEventListener("click", function () {
    hello.classList.remove("dark-mode");
});