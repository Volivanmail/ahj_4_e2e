export class Cards {
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
