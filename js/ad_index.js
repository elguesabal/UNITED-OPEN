import boutique from "./boutique.js";
import badbons from "./badbons.js";
// import new_ad from "./new_ad.js";

const space_ad = document.getElementById("ad");
// const ad = [boutique(), badbons(), new_ad()];
// const n = [0, 1, 2];
const ad = [boutique(), badbons()];
const n = [0, 1];

for (let i = n.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = n[i];
    n[i] = n[j];
    n[j] = temp;
}
for (let i = 0; i < ad.length; i++) {
    space_ad.innerHTML += ad[n[i]];
}