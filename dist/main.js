/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const displayDropDown = function(dropdownLinks) {\n    // run immediately\n\n    const moveDropdownLinks = function(link, container) {\n        container.appendChild(link.nextElementSibling);\n    }\n\n    // container for new links\n    \n    const container = document.createElement(\"div\");\n    container.className = \"dropdownbox\";\n\n    // Functions shared by click on link and click on window\n\n    const fadeOutAndClose = function(linkContainer) {\n        if (!container.classList.contains(\"extendDown\")) {\n            return;\n        }\n        linkContainer.classList.remove(\"fade\"); // fade out links\n        setTimeout(() => {\n            linkContainer.classList.remove(\"revealGrid\"); // hide links\n            container.classList.remove(\"extendDown\"); // retract panel\n        }, 250);\n    }\n\n    const clearSelected = function() {\n        dropdownLinks.forEach(link => link.classList.remove(\"selected\"));\n    }\n\n    // function for click on dropdown link\n    \n    const fillOrClosePanel = function() {\n        clearSelected();\n        const linkBox = document.querySelector(`#${this.id}links`);\n        const fadeInLinks = function() {\n            linkBox.classList.add(\"revealGrid\");\n            setTimeout(() => linkBox.classList.add(\"fade\"), 50);\n        }\n        if (!container.classList.contains(\"extendDown\")) { // panel was closed\n            this.classList.add(\"selected\");\n            container.classList.add(\"extendDown\");\n            setTimeout(() => fadeInLinks(), 250);\n        } else { // panel open\n            if (linkBox.classList.contains(\"revealGrid\")) { // currently selected\n                fadeOutAndClose(linkBox);\n            } else { // other links displayed\n                this.classList.add(\"selected\");\n                const currentBox = document.querySelector(\".revealGrid\");\n                currentBox.classList.remove(\"fade\"); // fade out current\n                setTimeout(() => {\n                    currentBox.classList.remove(\"revealGrid\");\n                    fadeInLinks();\n                }, 250);\n            }\n        }\n    }\n    \n    dropdownLinks.forEach(link => {\n        moveDropdownLinks(link, container);\n        link.addEventListener(\"click\", fillOrClosePanel);\n    })\n    document.querySelector(\"nav\").after(container);\n\n    // function for click on window\n\n    const closeNav = function(e) {\n        if (e.target.tagName !== \"A\") {\n            clearSelected();\n            const currentBox = document.querySelector(\".revealGrid\");\n            fadeOutAndClose(currentBox);\n        }\n    }\n\n    window.addEventListener(\"click\", closeNav);\n};\n\nconst displaySideBar = function(dropdownLinks, links) {\n\n    const container = document.createElement(\"div\");\n    container.className = \"sidebar\";\n    container.appendChild(links);\n    document.querySelector(\"nav\").after(container);\n    const toggleSublinks = function() {\n        this.nextElementSibling.classList.toggle(\"revealFlex\");\n    }\n    dropdownLinks.forEach(link => {\n        link.addEventListener(\"click\", toggleSublinks);\n    })\n\n    const burger = document.querySelector(\".burger\");\n    const toggleSidebar = function() {\n        dropdownLinks.forEach(link => link.nextElementSibling.classList.remove(\"revealFlex\"));\n        container.classList.toggle(\"revealFlex\");\n    }\n    burger.addEventListener(\"click\", toggleSidebar);\n\n    // make closenav function work for both\n};\n\n// Throw function (make an import later)\n\n(function() {\n    const dropLinks = document.querySelectorAll(\".dropdown\");\n    const width = window.matchMedia(\"(min-width: 880px\");\n    const chooseMenu = function(width) {\n        if (width.matches) {\n            displayDropDown(dropLinks);\n        } else {\n            const mainLinks = document.querySelector(\"#mainlinks\");\n            displaySideBar(dropLinks, mainLinks);\n        }\n    }\n    chooseMenu(width);\n})();\n\n//# sourceURL=webpack://dynamic-user-interface/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;