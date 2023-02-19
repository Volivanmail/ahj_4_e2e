export function nameCard() {
  const inputForm = document.querySelector(".input");
  const data = inputForm.textContent;
  if (data.length < 13) {
    let msg = document.querySelector(".messege");
    msg.textContent = "";
  }
  let typeCard = null;
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
  } else if (
    data.slice(0, 4) == 6011 ||
    data.slice(0, 2) == 65 ||
    (data.slice(0, 3) >= 644 && data.slice(0, 3) <= 649)
  ) {
    typeCard = "discover";
  } else {
    typeCard = null;
  }
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("valid")) {
      card.classList.remove("valid");
    }
    if (card.classList.contains(typeCard)) {
      card.classList.add("valid");
    }
  });
}
