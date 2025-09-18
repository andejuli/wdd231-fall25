import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;
document.querySelector("head > title").textContent = parkData.fullName;
// set the banner image
document.querySelector(".hero-banner > img").src = parkData.images[0].url;
// use the template function above to set the rest of the park specific info in the header
document.querySelector(".hero-banner__content").innerHTML =
  parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}