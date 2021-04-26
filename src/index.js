const dropLinks = document.querySelectorAll(".dropdown");
const dropDownBox = document.querySelector(".dropdownbox");

// dropLinks.forEach(link => link.addEventListener("click", () => {
//     console.log(dropDownBox);
//     dropDownBox.classList.toggle("extend");
// }))

function displayDropDown(panel, dropLinks) {
    const togglePanel = function() {
        panel.classList.toggle("extend");
    }

    const fadeText = function(id) {
        const linkBox = document.querySelector(`#${id}container`);
        linkBox.classList.toggle("hidden");
        setTimeout(() => linkBox.classList.toggle("fade"), 100);
    }

    const toggleLinks = function(e) {
        togglePanel();
        setTimeout(() => fadeText(this.id), 1000);
    }

    dropLinks.forEach(link => {
        link.addEventListener("click", toggleLinks);
    })
}

displayDropDown(dropDownBox, dropLinks)