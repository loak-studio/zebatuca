import { config } from "../config";

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const firstname = form.querySelector("input[name='firstname']").value;
      const name = form.querySelector("input[name='name']").value;
      const email = form.querySelector("input[name='email']").value;
      const phone = form.querySelector("input[name='phone']").value;
      const message = form.querySelector("textarea[name='message']").value;
      const res = await fetch(`${config.api}/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          name,
          email,
          message,
          phone,
        }),
      });
      const { status } = await res.json();
      if (status === "success") {
        form.innerHTML = `<div class="col-span-2 text-teal-700 flex justify-center items-center">Votre message à bien été envoyé, nous vous répondrons dès que possible.</div>`;
      }
    });
  }
});
