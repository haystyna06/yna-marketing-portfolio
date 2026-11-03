// ============================================
// YNA CREATES PORTFOLIO
// ============================================


// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");


menu.addEventListener("click", () => {

  const open = nav.classList.toggle("open");

  menu.setAttribute(
    "aria-expanded",
    open
  );

});


// Close mobile menu after clicking a link
document
  .querySelectorAll("nav a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove("open");

        menu.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });


// Automatic copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();

// =======*==================================*=
// OPEN CORRECT SECTION FROM URL*// ===============================*============

const startingSectio* =
  window.location.hash.replace(*#", "");


if (
  startingSection *&
  document.getElementById(starti*gSection)
) {

  showSection(start*ngSection);

}
