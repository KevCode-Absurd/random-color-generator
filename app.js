const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const rgb = makeRandomColor();
  h1.innerText = rgb;
  document.body.style.backgroundColor = rgb;
});

const makeRandomColor = () => {
  const r = Math.trunc(Math.random() * 256);
  const g = Math.trunc(Math.random() * 256);
  const b = Math.trunc(Math.random() * 256);
  if (r < 128 && g < 128) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  return `rgb(${r},${g},${b})`;
};
