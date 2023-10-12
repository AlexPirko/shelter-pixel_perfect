/* eslint-disable no-use-before-define */
const burger = (navSelector, burgerSelector, backgroundSelector, navItemSelector) => {
  const navElem = document.querySelector(navSelector);
  const burgerElem = document.querySelector(burgerSelector);
  const backgroundElem = document.querySelector(backgroundSelector);
  const navItemElem = document.querySelectorAll(navItemSelector);

  burgerElem.addEventListener('click', () => {
    if (!navElem.classList.contains('active')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  navItemElem.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });

  backgroundElem.addEventListener('click', () => {
    closeMenu();
  });

  function openMenu() {
    navElem.classList.add('active');
    burgerElem.classList.add('active');
    document.body.style.overflow = 'hidden';
    backgroundElem.style.display = 'block';
  }

  function closeMenu() {
    navElem.classList.remove('active');
    burgerElem.classList.remove('active');
    document.body.style.overflow = '';
    backgroundElem.style.display = 'none';
  }
};

export default burger;
