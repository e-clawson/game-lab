// Create your game here!

const h2Element = document.createElement("h2");
h2Element.innerHTML = "hello";
document.body.appendChild(h2Element);

let totalCount = 0;
let headsCount = 0;
let tailsCount = 0;

const pElement1 = document.createElement("p");
pElement1.innerHTML = "Total clicks: " + totalCount;
document.body.appendChild(pElement1);

const pElement2 = document.createElement("p");
pElement2.innerHTML = "Total Heads: " + headsCount;
document.body.appendChild(pElement2);

const pElement3 = document.createElement("p");
pElement3.innerHTML = "Total Tails: " + tailsCount;
document.body.appendChild(pElement3);

function coinFlip() {
  let flip = Math.round(Math.random());
  if (flip == 0) {
    h2Element.innerHTML = "heads";
    headsCount += 1;
    totalCount += 1;
    pElement2.innerHTML = "Total Heads: " + headsCount;
    pElement1.innerHTML = "Total clicks: " + totalCount;
  } else {
    h2Element.innerHTML = "tails";
    tailsCount += 1;
    totalCount += 1;
    pElement3.innerHTML = "Total Tails: " + tailsCount;
    pElement1.innerHTML = "Total clicks: " + totalCount;
  }
}
window.coinFlip = coinFlip;
