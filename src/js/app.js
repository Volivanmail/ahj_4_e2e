import { Cards } from "./Cards";

const visa = new Cards("visa", "../img/visa.png");
const mastercard = new Cards("mastercard", "../img/mastercard.png");
const discover = new Cards("discover", "../img/discover.png");
const dinersClub = new Cards("diners_club", "../img/diners_club.png");
const jcb = new Cards("JCB", "../img/jcb.png");
const mir = new Cards("MIR", "../img/mir.png");
const americanExpress = new Cards(
  "american_express",
  "../img/american_express.png"
);

visa.addCard();
mastercard.addCard();
americanExpress.addCard();
discover.addCard();
dinersClub.addCard();
jcb.addCard();
mir.addCard();
