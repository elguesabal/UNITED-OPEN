import boutique from "./boutique.js";
import badbons from "./badbons.js";
import new_ad from "./new_ad.js";

const space_ad = document.getElementById("ad");
const ad = [boutique(), badbons(), new_ad()];

for (let i = ad.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = ad[i];
    ad[i] = ad[j];
    ad[j] = temp;
}
for (let i = 0; i < ad.length; i++) {
    space_ad.innerHTML += ad[i];
}
  