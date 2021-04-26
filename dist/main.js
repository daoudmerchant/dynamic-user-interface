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

eval("const dropLinks = document.querySelectorAll(\".dropdown\");\nconst dropDownBox = document.querySelector(\".dropdownbox\");\n\n// dropLinks.forEach(link => link.addEventListener(\"click\", () => {\n//     console.log(dropDownBox);\n//     dropDownBox.classList.toggle(\"extend\");\n// }))\n\nfunction displayDropDown(panel, dropLinks) {\n\n    const fillOrClosePanel = function(e) {\n        dropLinks.forEach(link => link.classList.remove(\"selected\"));\n        this.classList.add(\"selected\");\n\n        const linkBox = document.querySelector(`#${this.id}container`);\n\n        const fadeInLinks = function() {\n            linkBox.classList.remove(\"hidden\");\n            setTimeout(() => linkBox.classList.add(\"fade\"), 50);\n        }\n\n        if (!panel.classList.contains(\"extend\")) { // panel was closed\n            panel.classList.add(\"extend\");\n            setTimeout(() => fadeInLinks(), 250);\n        } else { // panel open\n            if (!linkBox.classList.contains(\"hidden\")) { // currently selected\n                linkBox.classList.remove(\"fade\"); // fade out links\n                setTimeout(() => {\n                    linkBox.classList.add(\"hidden\"); // hide links\n                    panel.classList.remove(\"extend\"); // retract panel\n                }, 250)\n            } else { // other links displayed\n                const currentBox = document.querySelector(\".dropdowncontainer:not(.hidden\");\n                currentBox.classList.remove(\"fade\"); // fade out current\n                setTimeout(() => {\n                    currentBox.classList.add(\"hidden\");\n                    fadeInLinks();\n                }, 250);\n            }\n        }\n    }\n\n    dropLinks.forEach(link => {\n        link.addEventListener(\"click\", fillOrClosePanel);\n    })\n}\n\ndisplayDropDown(dropDownBox, dropLinks)\n\n//# sourceURL=webpack://dynamic-user-interface/./src/index.js?");

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