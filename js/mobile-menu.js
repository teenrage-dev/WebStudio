(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      mobile: document.querySelector('[data-menu]'),
    };
  
    refs.openMobileBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();
  