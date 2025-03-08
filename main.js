document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter");
  const input = document.getElementById("emailinput");
  const submitBtn = document.getElementById("submitbtn");
  const container = document.querySelector(".container");
  const successContainer = document.querySelector(".success_container");
  const dismissBtn = document.getElementById("dismissbtn");
  const emailVariant = document.getElementById("emailvariant");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
      // success message
      container.classList.add("hidden");
      successContainer.classList.remove("hidden");
      emailVariant.textContent = email;
    }
  });

  input.addEventListener("input", () => {
    input.classList.remove("error");
  });

  // Dismiss button functionality
  dismissBtn.addEventListener("click", () => {
    successContainer.classList.add("hidden");
    container.classList.remove("hidden");
    form.reset(); // Reset the form
  });
});
