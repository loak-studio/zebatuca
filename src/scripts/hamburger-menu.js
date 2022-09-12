window.addEventListener("load", () => {
  const button = document.querySelector("[toggle-nav]");
  const nav = document.querySelector("[main-nav]");
  const body = document.querySelector("body");
  const hamburger = document.querySelector("#hamburger");
  button.addEventListener("click", () => {
    window.scrollTo(0, 0);
    nav.classList.toggle("scale-y-0");
    nav.classList.toggle("opacity-0");
    body.classList.toggle("overflow-y-hidden");
    hamburger.classList.toggle("pt-3");
    hamburger.children[0].classList.toggle("rotate-45");
    hamburger.children[0].classList.toggle("absolute");
    hamburger.children[1].classList.toggle("opacity-0");
    hamburger.children[2].classList.toggle("-rotate-45");
    hamburger.children[2].classList.toggle("absolute");
  });
});
