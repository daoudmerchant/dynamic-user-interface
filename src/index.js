const menu = (function() {
    // global menu functions
    const createContainer = function(className) {
        const container = document.createElement("div");
        container.className = className;
        return container;
    }
    const moveLink = function(container, links) {
        container.appendChild(links);
    }

    const displayDropDown = function(siblingBefore, dropdownLinks) {
    
        // make dropdown container
        const container = createContainer("dropdownbox");
    
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
        
        // fill container, add dropdown link click events
        dropdownLinks.forEach(link => {
            moveLink(container, link.nextElementSibling);
            link.addEventListener("click", fillOrClosePanel); // function on link click
        })

        // insert container
        siblingBefore.after(container);
    
        // function for click on window
        window.addEventListener("click", e => {
            if (e.target.tagName !== "A") {
                clearSelected();
                const currentBox = document.querySelector(".revealGrid");
                fadeOutAndClose(currentBox);
            }
        });
    };
    
    const displaySideBar = function(siblingBefore, dropdownLinks, links) {
        
        // make sidebar container
        const container = createContainer("sidebar")

        // fill container
        moveLink(container, links);

        // add dropdown link click events
        const toggleSublinks = function() {
            this.nextElementSibling.classList.toggle("revealFlex");
        }
        dropdownLinks.forEach(link => {
            link.addEventListener("click", toggleSublinks);
        })

        // insert container
        siblingBefore.after(container);
        
        // add reveal menu on click burger
        const burger = document.querySelector(".burger");
        const toggleSidebar = function() {
            dropdownLinks.forEach(link => link.nextElementSibling.classList.remove("revealFlex"));
            container.classList.toggle("revealFlex");
        }
        burger.addEventListener("click", toggleSidebar);
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

// Note: ALL ABOVE could be put on alternative file and imported

(function() {
    // select elements
    const nav = document.querySelector("nav");
    const dropLinks = document.querySelectorAll(".dropdown");
    // choose top or side menu
    const width = window.matchMedia("(min-width: 880px");
    const chooseMenu = function(width) {
        if (width.matches) {
            menu.displayDropDown(nav, dropLinks);
        } else {
            const mainLinks = document.querySelector("#mainlinks");
            menu.displaySideBar(nav, dropLinks, mainLinks);
        }
    }
    chooseMenu(width);

    // start gallery
    const gallery = document.querySelector("#gallery");
    const galleryNav = document.querySelector("#gallerynav");
    slideGallery(gallery, galleryNav);
})();