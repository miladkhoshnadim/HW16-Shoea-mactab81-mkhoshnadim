///////////////////// Page7 ////////////////

const P6MainSec = document.getElementById("P6MainSec");
const marksLabel = document.getElementById("marksLabel");
const e = sessionStorage.getItem("mark");
console.log("mark", e);
marksLabel.innerHTML = `${e}`;
GeneratePruducts(e);
function GeneratePruducts(mark = "All") {
  P6MainSec.innerHTML = ``;
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((elem) => {
        if (mark == "All") {
          Generate(elem);
        } else if (elem.label == mark) {
          Generate(elem);
        }
      });
    });
}

function Generate(element) {
  P6MainSec.innerHTML += `<div class="displayfelex" onclick ="GoToTacProduct(${element.image},${element.price})">
      <div class="divImgShoseLeft">
        <img class="ImgShosePruduvt" src="/accets/${element.image}" alt="" />
        <span class="explanPruduct">${element.Type}</span>
        <span class="price">${element.price}</span>
      </div>
      <div class="felex" >
        <img class="ImgShosePruduvt" src="/accets/${element.image2}" alt="" />
        <span class="explanPruduct">${element.Type2}</span>
        <span class="price">${element.price}</span>
      </div>
    </div>`;
}

function GoToTacProduct(elem, p) {
  console.log("!@#", elem, p);
}
