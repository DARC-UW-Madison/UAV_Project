const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
    }
  });
}

const lambdaRange = document.querySelector("#lambdaRange");
const lambdaValue = document.querySelector("#lambdaValue");
const pathValue = document.querySelector("#pathValue");
const timeValue = document.querySelector("#timeValue");
const distractionValue = document.querySelector("#distractionValue");

const tradeoffData = [
  { lambda: "0", path: "0%", time: "0%", distraction: "0%" },
  { lambda: "0.2", path: "+1%", time: "+1%", distraction: "-11%" },
  { lambda: "0.8", path: "+6%", time: "+9%", distraction: "-25%" },
  { lambda: "3", path: "+15%", time: "+24%", distraction: "-46%" },
  { lambda: "10", path: "+19%", time: "+30%", distraction: "-54%" },
  { lambda: "90", path: "+19%", time: "+30%", distraction: "-54%" },
];

function updateTradeoff(index) {
  const point = tradeoffData[Number(index)] || tradeoffData[3];
  lambdaValue.textContent = point.lambda;
  pathValue.textContent = point.path;
  timeValue.textContent = point.time;
  distractionValue.textContent = point.distraction;
}

if (lambdaRange) {
  lambdaRange.addEventListener("input", (event) => updateTradeoff(event.target.value));
  updateTradeoff(lambdaRange.value);
}
