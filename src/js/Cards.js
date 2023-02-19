export class Cards {
  constructor(name, img) {
    // if (typeof name == String) {
    //   this.name = name;
    // }
    // if (typeof img == String) {
    //   this.img = img;
    // }
    this.name = name;
    this.img = img;
  }

  addCard() {
    const parent = document.querySelector(".cards");
    const newcard = document.createElement("li");
    const image = document.createElement("img");
    newcard.title = this.name;
    newcard.style.listStyleType = "none";
    newcard.style.margin = "5px";
    image.style.width = "40px";
    image.style.height = "25px";
    image.src = this.img;
    image.alt = this.name;
    parent.appendChild(newcard);
    newcard.appendChild(image);
  }
}
