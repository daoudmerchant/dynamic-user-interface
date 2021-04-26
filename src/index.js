const dropLinks = document.querySelectorAll(".dropdown");
const dropDownBox = document.querySelector(".dropdownbox");

// dropLinks.forEach(link => link.addEventListener("click", () => {
//     console.log(dropDownBox);
//     dropDownBox.classList.toggle("extend");
// }))

function displayDropDown(panel, dropLinks) {

    const fillOrClosePanel = function(e) {
        dropLinks.forEach(link => link.classList.remove("selected"));
        this.classList.add("selected");

        const linkBox = document.querySelector(`#${this.id}container`);

        const fadeInLinks = function() {
            linkBox.classList.remove("hidden");
            setTimeout(() => linkBox.classList.add("fade"), 50);
        }

        if (!panel.classList.contains("extend")) { // panel was closed
            panel.classList.add("extend");
            setTimeout(() => fadeInLinks(), 250);
        } else { // panel open
            if (!linkBox.classList.contains("hidden")) { // currently selected
                linkBox.classList.remove("fade"); // fade out links
                setTimeout(() => {
                    linkBox.classList.add("hidden"); // hide links
                    panel.classList.remove("extend"); // retract panel
                }, 250)
            } else { // other links displayed
                const currentBox = document.querySelector(".dropdowncontainer:not(.hidden");
                currentBox.classList.remove("fade"); // fade out current
                setTimeout(() => {
                    currentBox.classList.add("hidden");
                    fadeInLinks();
                }, 250);
            }
        }
    }

    dropLinks.forEach(link => {
        link.addEventListener("click", fillOrClosePanel);
    })
}

displayDropDown(dropDownBox, dropLinks)