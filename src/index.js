const displayDropDown = function(dropdownLinks) {
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
            linkContainer.classList.remove("revealGrid"); // hide links
            container.classList.remove("extendDown"); // retract panel
        }, 250);
    }

    const clearSelected = function() {
        dropdownLinks.forEach(link => link.classList.remove("selected"));
    }

    // function for click on dropdown link
    
    const fillOrClosePanel = function() {
        clearSelected();
        const linkBox = document.querySelector(`#${this.id}links`);
        const fadeInLinks = function() {
            linkBox.classList.add("revealGrid");
            setTimeout(() => linkBox.classList.add("fade"), 50);
        }
        if (!container.classList.contains("extendDown")) { // panel was closed
            this.classList.add("selected");
            container.classList.add("extendDown");
            setTimeout(() => fadeInLinks(), 250);
        } else { // panel open
            if (linkBox.classList.contains("revealGrid")) { // currently selected
                fadeOutAndClose(linkBox);
            } else { // other links displayed
                this.classList.add("selected");
                const currentBox = document.querySelector(".revealGrid");
                currentBox.classList.remove("fade"); // fade out current
                setTimeout(() => {
                    currentBox.classList.remove("revealGrid");
                    fadeInLinks();
                }, 250);
            }
        }
    }
    
    dropdownLinks.forEach(link => {
        moveDropdownLinks(link, container);
        link.addEventListener("click", fillOrClosePanel);
    })
    document.querySelector("nav").after(container);

    // function for click on window

    const closeNav = function(e) {
        if (e.target.tagName !== "A") {
            clearSelected();
            const currentBox = document.querySelector(".revealGrid");
            fadeOutAndClose(currentBox);
        }
    }

    window.addEventListener("click", closeNav);
};

const displaySideBar = function(dropdownLinks, links) {

    const container = document.createElement("div");
    container.className = "sidebar";
    container.appendChild(links);
    document.querySelector("nav").after(container);
    const toggleSublinks = function() {
        this.nextElementSibling.classList.toggle("revealFlex");
    }
    dropdownLinks.forEach(link => {
        link.addEventListener("click", toggleSublinks);
    })

    const burger = document.querySelector(".burger");
    const toggleSidebar = function() {
        dropdownLinks.forEach(link => link.nextElementSibling.classList.remove("revealFlex"));
        container.classList.toggle("revealFlex");
    }
    burger.addEventListener("click", toggleSidebar);

    // make closenav function work for both
};

// Throw function (make an import later)

(function() {
    const dropLinks = document.querySelectorAll(".dropdown");
    const width = window.matchMedia("(min-width: 880px");
    const chooseMenu = function(width) {
        if (width.matches) {
            displayDropDown(dropLinks);
        } else {
            const mainLinks = document.querySelector("#mainlinks");
            displaySideBar(dropLinks, mainLinks);
        }
    }
    chooseMenu(width);
})();