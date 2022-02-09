(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector("body")
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >=768){
      !refs.menu.classList.contains("is-hidden") ? refs.menu.classList.add("is-hidden") : "";
      refs.body.classList.contains("no-scroll") && refs.modal.classList.contains("is-hidden") ? refs.body.classList.remove("no-scroll") : "";
    }
  })
})();
  