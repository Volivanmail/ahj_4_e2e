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

export function eventValidCart(e) {
  let input = document.querySelector(".input");
  let msg = document.querySelector(".messege");
  if (validatorCard(input.value)) {
    msg.textContent = `Карта банка действительна`;
    msg.style.color = "green";
  } else {
    msg.textContent =
      "Неправильный ввод номера карты или карта не действительна";
    msg.style.color = "red";
  }
  e.preventDefault();
}
