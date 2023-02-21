/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Cards.js
class Cards {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
  addCard() {
    const parent = document.querySelector(".cards");
    const newcard = document.createElement("li");
    const image = document.createElement("img");
    newcard.classList.add(this.name, "card");
    image.style.width = "50px";
    image.style.height = "30px";
    image.src = this.img;
    image.alt = this.name;
    parent.appendChild(newcard);
    newcard.appendChild(image);
  }
}
;// CONCATENATED MODULE: ./src/js/validCard.js
function validatorCard(cardNumber) {
  const number = cardNumber.replace(/\D/g, "");
  let sum = 0;
  let nDigit = 0;
  let even = false;
  for (let i = number.length - 1; i >= 0; i -= 1) {
    nDigit = parseInt(number[i], 10);
    if (even) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    sum += nDigit;
    even = !even;
  }
  return sum % 10 === 0;
}
function eventValidCart(e) {
  let input = document.querySelector(".input");
  let msg = document.querySelector(".messege");
  if (validatorCard(input.value)) {
    msg.textContent = `Карта банка действительна`;
    msg.style.color = "green";
  } else {
    msg.textContent = "Неправильный ввод номера карты или карта не действительна";
    msg.style.color = "red";
  }
  e.preventDefault();
}
;// CONCATENATED MODULE: ./src/js/nameCard.js
function nameCard() {
  const inputForm = document.querySelector(".input");
  const data = inputForm.value;
  if (data.length < 13) {
    let msg = document.querySelector(".messege");
    msg.textContent = "";
  }
  let typeCard = 0;
  console.log(typeCard);
  if (data[0] == 4) {
    typeCard = "visa";
  } else if (data.slice(0, 2) == 34) {
    typeCard = "american_express";
  } else if (data.slice(0, 2) == 36) {
    typeCard = "diners_club";
  } else if (data.slice(0, 2) >= 51 && data.slice(0, 2) <= 55) {
    typeCard = "mastercard";
  } else if (data.slice(0, 4) >= 2200 && data.slice(0, 4) <= 2204) {
    typeCard = "mir";
  } else if (data.slice(0, 4) >= 3528 && data.slice(0, 4) <= 3589) {
    typeCard = "jcb";
  } else if (data.slice(0, 4) == 6011 || data.slice(0, 2) == 65 || data.slice(0, 3) >= 644 && data.slice(0, 3) <= 649) {
    typeCard = "discover";
  } else {
    typeCard = 0;
  }
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card.classList.contains("valid")) {
      card.classList.remove("valid");
    }
    if (card.classList.contains(typeCard)) {
      console.log(typeCard);
      console.log(card.classList);
      card.classList.add("valid");
    }
  });
}
;// CONCATENATED MODULE: ./src/img/visa.png
const visa_namespaceObject = __webpack_require__.p + "2ab7cc81034a979df7f2.png";
;// CONCATENATED MODULE: ./src/img/mastercard.png
const mastercard_namespaceObject = __webpack_require__.p + "f117f91ff69c56df1b0f.png";
;// CONCATENATED MODULE: ./src/img/discover.png
const discover_namespaceObject = __webpack_require__.p + "520192035404e56c7e64.png";
;// CONCATENATED MODULE: ./src/img/diners_club.png
const diners_club_namespaceObject = __webpack_require__.p + "bd226c79633e9c8a789b.png";
;// CONCATENATED MODULE: ./src/img/jcb.png
const jcb_namespaceObject = __webpack_require__.p + "5b83b967a8f20bb6bf8b.png";
;// CONCATENATED MODULE: ./src/img/mir.png
const mir_namespaceObject = __webpack_require__.p + "30a35680ac652bbaf9c1.png";
;// CONCATENATED MODULE: ./src/img/american_express.png
const american_express_namespaceObject = __webpack_require__.p + "23a3dfa76c9c691ff89c.png";
;// CONCATENATED MODULE: ./src/js/app.js










const visa = new Cards("visa", visa_namespaceObject);
const mastercard = new Cards("mastercard", mastercard_namespaceObject);
const discover = new Cards("discover", discover_namespaceObject);
const dinersClub = new Cards("diners_club", diners_club_namespaceObject);
const jcb = new Cards("jcb", jcb_namespaceObject);
const mir = new Cards("mir", mir_namespaceObject);
const americanExpress = new Cards("american_express", american_express_namespaceObject);
visa.addCard();
mastercard.addCard();
americanExpress.addCard();
discover.addCard();
dinersClub.addCard();
jcb.addCard();
mir.addCard();
const clickValid = document.querySelector(".btn");
clickValid.addEventListener("click", eventValidCart, false);
const inputForm = document.querySelector(".input");
inputForm.addEventListener("input", nameCard);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;