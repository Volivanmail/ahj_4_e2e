import { Cards } from "./Cards";
import { eventValidCart } from "./validCard";
import { nameCard } from "./nameCard";
import visaIcon from "../img/visa.png";
import mastercardIcon from "../img/mastercard.png";
import discoverIcon from "../img/discover.png";
import dinersClubIcon from "../img/diners_club.png";
import jcbIcon from "../img/jcb.png";
import mirIcon from "../img/mir.png";
import americanExpressIcon from "../img/american_express.png";

const visa = new Cards("visa", visaIcon);
const mastercard = new Cards("mastercard", mastercardIcon);
const discover = new Cards("discover", discoverIcon);
const dinersClub = new Cards("diners_club", dinersClubIcon);
const jcb = new Cards("jcb", jcbIcon);
const mir = new Cards("mir", mirIcon);
const americanExpress = new Cards("american_express", americanExpressIcon);

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
