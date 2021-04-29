const menu = (function() {
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
            if (!container.classList.contains("extendDown")) {
                return;
            }
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

    return {
        displayDropDown,
        displaySideBar
    }
})();

// gallery function

const slideGallery = function(gallery, galleryNav) {
    const galleryChildren = galleryNav.children;

    // extract elements
    const icons = Array.from(galleryChildren).slice(1, (galleryNav.children.length - 1));
    const arrowLeft = galleryChildren[0];
    const arrowRight = galleryChildren[galleryChildren.length - 1];

    // subfunctions
    const toggleIcon = function() {
        icons[i].classList.toggle("selectIcon");
    };
    const toggleAndMove = function() {
        toggleIcon();
        gallery.setAttribute("style", `right:${i}00%`)
    }

    let i = 0;

    // nav functions
    const galleryForwards = function() {
        toggleIcon();
        if (i < icons.length - 1) {
            i++;
        } else {
            i = 0;
        }
        toggleAndMove();
    }
    const galleryBackwards = function() {
        toggleIcon();
        if (i > 0) {
            i--;
        } else {
            i = (icons.length - 1); // back to end
        }
        toggleAndMove();
    }
    const selectGalleryImage = function(icon) {
        toggleIcon();
        i = Number(icon.dataset.image);
        toggleAndMove();
    };

    // scroll on load
    const cycleGallery = setInterval(galleryForwards, 5000);

    // event listeners
    arrowRight.addEventListener("click", () => {
        clearInterval(cycleGallery);
        galleryForwards();
    });
    arrowLeft.addEventListener("click", () => {
        clearInterval(cycleGallery);
        galleryBackwards();
    });
    icons.forEach(icon => icon.addEventListener("click", e => {
        clearInterval(cycleGallery);
        selectGalleryImage(e.target);
    }));
};

// Throw function (make an import later)

(function() {
    const dropLinks = document.querySelectorAll(".dropdown");
    const width = window.matchMedia("(min-width: 880px");
    const chooseMenu = function(width) {
        if (width.matches) {
            menu.displayDropDown(dropLinks);
        } else {
            const mainLinks = document.querySelector("#mainlinks");
            menu.displaySideBar(dropLinks, mainLinks);
        }
    }
    chooseMenu(width);

    const gallery = document.querySelector("#gallery");
    const galleryNav = document.querySelector("#gallerynav");
    slideGallery(gallery, galleryNav);
})();