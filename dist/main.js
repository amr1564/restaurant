/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactLoad\": () => (/* binding */ contactLoad)\n/* harmony export */ });\nconst contactLoad = () => {\n    const content = document.getElementById('content');\n    \n    const subContent = document.getElementsByClassName('sub-content');\n    Array.from(subContent).forEach(element => element.remove());\n\n    let newContent = [];\n\n    const address1 = document.createElement('div');\n    address1.innerHTML = '123 Main Street';\n    address1.id = 'address1';\n    newContent.push(address1);\n\n    const address2 = document.createElement('div');\n    address2.innerHTML = 'New York, NY 10001';\n    newContent.push(address2);\n\n    newContent.forEach(function(e) {\n        e.classList.add('sub-content', 'sub-item', 'address');\n        content.appendChild(e);\n    })\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLoad\": () => (/* binding */ homeLoad)\n/* harmony export */ });\nconst homeLoad = () => {\n    const content = document.getElementById('content');\n\n    const subContent = document.getElementsByClassName('sub-content');\n    Array.from(subContent).forEach(element => element.remove());\n    \n    let newContent = [];\n\n    const title = document.createElement('div');\n    title.id = 'title';\n    title.innerHTML = 'Cafe Odin';\n    newContent.push(title);\n\n    const subTitle = document.createElement('div');\n    subTitle.id = 'sub-title';\n    subTitle.innerHTML = 'Fine dining for software developers';\n    newContent.push(subTitle);\n\n    newContent.forEach(function(e) {\n        e.classList.add('sub-content');\n        content.appendChild(e);\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();\n\nconst home = document.getElementById('home');\nhome.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__.homeLoad);\n\nconst menu = document.getElementById('menu');\nmenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__.menuLoad);\n\nconst contact = document.getElementById('contact');\ncontact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__.contactLoad);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\nconst menuLoad = () => {\n    const content = document.getElementById('content');\n    \n    const subContent = document.getElementsByClassName('sub-content');\n    Array.from(subContent).forEach(element => element.remove());\n\n    let newContent = [];\n\n    let menuItems = [];\n\n    const appetizerHeader = document.createElement('h1');\n    appetizerHeader.innerHTML = 'Appetizer';\n    newContent.push(appetizerHeader);\n\n    const appetizer1 = document.createElement('div');\n    appetizer1.innerHTML = 'Seared Tuna'\n    menuItems.push(appetizer1);\n    newContent.push(appetizer1);\n\n    const appetizer2 = document.createElement('div');\n    appetizer2.innerHTML = 'House Salad';\n    menuItems.push(appetizer2);\n    newContent.push(appetizer2);\n\n    const entreeHeader = document.createElement('h1');\n    entreeHeader.innerHTML = 'Entree';\n    newContent.push(entreeHeader);\n\n    const entree1 = document.createElement('div');\n    entree1.innerHTML = 'Grilled Steak';\n    menuItems.push(entree1);\n    newContent.push(entree1);\n\n    const entree2 = document.createElement('div');\n    entree2.innerHTML = 'Chicken Parmigiana';\n    menuItems.push(entree2);\n    newContent.push(entree2);\n\n    const desertHeader = document.createElement('h1');\n    desertHeader.innerHTML = 'Desert';\n    newContent.push(desertHeader);\n\n    const desert1 = document.createElement('div');\n    desert1.innerHTML = 'Gelato';\n    menuItems.push(desert1);\n    newContent.push(desert1);\n\n    const desert2 = document.createElement('div');\n    desert2.innerHTML = 'Espresso';\n    menuItems.push(desert2);\n    newContent.push(desert2);\n\n    menuItems.forEach(function(e) {\n        e.classList.add('sub-item');\n    })\n\n    newContent.forEach(function(e) {\n        e.classList.add('sub-content');\n        content.appendChild(e);\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = () => {\n    const content = document.getElementById('content');\n    \n    const headerContainer = document.createElement('div');\n    headerContainer.id = 'header-container';\n    content.appendChild(headerContainer);\n\n    const home = document.createElement('div');\n    home.classList.add('nav');\n    home.id = 'home';\n    home.innerHTML = 'Home';\n    headerContainer.appendChild(home);\n\n    const menu = document.createElement('div');\n    menu.classList.add('nav');\n    menu.id = 'menu';\n    menu.innerHTML = 'Menu';\n    headerContainer.appendChild(menu);\n    \n    const contact = document.createElement('div');\n    contact.classList.add('nav');\n    contact.id = 'contact';\n    contact.innerHTML = 'Contact';\n    headerContainer.appendChild(contact);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;