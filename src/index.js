const dropLinks = document.querySelectorAll(".dropdown");

// dropLinks.forEach(link => link.addEventListener("click", () => {
//     console.log(dropDownBox);
//     dropDownBox.classList.toggle("extend");
// }))

function displayDropDown(dropLinks) {
    const moveDropdownLinks = function(link, container) {
        container.appendChild(link.nextElementSibling);
    }
    
    const container = document.createElement("div");
    container.className = "dropdownbox";
    
    const fillOrClosePanel = function() {
        dropLinks.forEach(link => link.classList.remove("selected"));
        this.classList.add("selected");
        
        const linkBox = document.querySelector(`#${this.id}links`);

        const fadeInLinks = function() {
            linkBox.classList.remove("hidden");
            setTimeout(() => linkBox.classList.add("fade"), 200);
        }


        if (!container.classList.contains("extend")) { // panel was closed
            container.classList.add("extend");
            setTimeout(() => fadeInLinks(), 400);
        } else { // panel open
            if (!linkBox.classList.contains("hidden")) { // currently selected
                linkBox.classList.remove("fade"); // fade out links
                setTimeout(() => {
                    linkBox.classList.add("hidden"); // hide links
                    container.classList.remove("extend"); // retract panel
                }, 400);
            } else { // other links displayed
                const currentBox = document.querySelector(".dropdownlinks:not(.hidden");
                currentBox.classList.remove("fade"); // fade out current
                setTimeout(() => {
                    currentBox.classList.add("hidden");
                    fadeInLinks();
                }, 400);
            }
        }
    }
    
    dropLinks.forEach(link => {
        moveDropdownLinks(link, container);
        link.addEventListener("click", fillOrClosePanel);
    })
    document.querySelector("nav").after(container);
}

displayDropDown(dropLinks);