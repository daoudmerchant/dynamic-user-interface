const displayDropDown = function(dropLinks) {
    // run immediately

    const moveDropdownLinks = function(link, container) {
        container.appendChild(link.nextElementSibling);
    }

    // container for new links
    
    const container = document.createElement("div");
    container.className = "dropdownbox";

    // Functions shared by click on link and click on window

    const fadeOutAndClose = function(linkContainer) {
        linkContainer.classList.remove("fade"); // fade out links
        setTimeout(() => {
            linkContainer.classList.add("hidden"); // hide links
            container.classList.remove("extend"); // retract panel
        }, 250);
    }

    const clearSelected = function() {
        dropLinks.forEach(link => link.classList.remove("selected"));
    }

    // function for click on dropdown link
    
    const fillOrClosePanel = function() {
        clearSelected();
        const linkBox = document.querySelector(`#${this.id}links`);
        const fadeInLinks = function() {
            linkBox.classList.remove("hidden");
            setTimeout(() => linkBox.classList.add("fade"), 50);
        }
        if (!container.classList.contains("extend")) { // panel was closed
            this.classList.add("selected");
            container.classList.add("extend");
            setTimeout(() => fadeInLinks(), 250);
        } else { // panel open
            if (!linkBox.classList.contains("hidden")) { // currently selected
                fadeOutAndClose(linkBox);
            } else { // other links displayed
                this.classList.add("selected");
                const currentBox = document.querySelector(".dropdownlinks:not(.hidden)");
                currentBox.classList.remove("fade"); // fade out current
                setTimeout(() => {
                    currentBox.classList.add("hidden");
                    fadeInLinks();
                }, 250);
            }
        }
    }
    
    dropLinks.forEach(link => {
        moveDropdownLinks(link, container);
        link.addEventListener("click", fillOrClosePanel);
    })
    document.querySelector("nav").after(container);

    // function for click on window

    const closeNav = function(e) {
        if (e.target.tagName !== "A") {
            clearSelected();
            const currentBox = document.querySelector(".dropdownlinks:not(.hidden)");
            fadeOutAndClose(currentBox);
        }
    }

    window.addEventListener("click", closeNav);
}

// Throw function (make an import later)

const dropLinks = document.querySelectorAll(".dropdown");
displayDropDown(dropLinks);