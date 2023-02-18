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
    const imgInn = document.createElement("img");
    newcard.title = this.name;
    newcard.style.listStyleType = "none";
    newcard.style.width = "30px";
    newcard.style.height = "20px";
    imgInn.src = this.img;
    imgInn.alt = this.name;
    parent.appendChild(newcard);
    newcard.appendChild(imgInn);
  }
}
