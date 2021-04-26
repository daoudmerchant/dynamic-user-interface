const dropLinks = document.querySelectorAll(".dropdown");
const dropDownBox = document.querySelector(".dropdownbox");

dropLinks.forEach(link => link.addEventListener("click", () => {
    console.log(dropDownBox);
    dropDownBox.classList.toggle("extend");
}))