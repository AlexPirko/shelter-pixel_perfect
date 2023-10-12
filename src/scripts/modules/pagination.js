/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import newDataPets from '../components/randomizeData';

const pagination = () => {
  let currentPage = 1;
  let currCardsQuantity;
  const petsCardContainer = document.querySelector('.pets-content__items');
  const prevBtn = document.querySelector('.prev-btn');
  const prevDblBtn = document.querySelector('.dbl-prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const nextDblBtn = document.querySelector('.dbl-next-btn');
  const pageIndicator = document.querySelector('.middle_btn');

  function isCardsQuantity() {
    if (window.screen.availWidth > 1200) {
      currCardsQuantity = 8;
    } else if (window.screen.availWidth <= 1200 && window.screen.availWidth >= 768) {
      currCardsQuantity = 6;
    } else if (window.screen.availWidth < 768) {
      currCardsQuantity = 3;
    }
  }

  function displayStartPage() {
    isCardsQuantity();
    currentPage = 1;
    petsCardContainer.innerHTML = '';
    displayCard(currCardsQuantity, currentPage - 1);
    pageIndicator.innerText = currentPage;
    nextBtn.removeAttribute('disabled');
    nextDblBtn.removeAttribute('disabled');
    prevBtn.setAttribute('disabled', '');
    prevDblBtn.setAttribute('disabled', '');
  }
  displayStartPage();

  const maxPageNum = newDataPets.length / currCardsQuantity;

  function displayCard(cardsQuantity, page) {
    const startSlice = cardsQuantity * page;
    const endSlice = cardsQuantity + startSlice;
    const randomizePets = newDataPets.map((item, index) => {
      item.id = index;
      return item;
    });
    const currentCards = randomizePets.slice(startSlice, endSlice);

    currentCards.forEach(({
      id, name, img, breed,
    }) => {
      const petsCard = document.createElement('div');
      petsCard.classList.add('pets-content__item');
      petsCard.setAttribute('data-id', id);
      petsCard.classList.add('move');

      petsCard.innerHTML = `                    
                      <div class="pets-content__img-wrapper">
                        <img class="pets-content__img" src=${img} alt=${breed}>
                      </div>
                      <h4 class="pets__content-subtitle">${name}</h4>
                      <a href="#" class="button button_secondary pets-content__btn">Learn more</a>
                    `;
      petsCardContainer.appendChild(petsCard);
    });
  }

  function nextBtnClick() {
    currentPage++;
    pageIndicator.innerText = currentPage;
    prevBtn.removeAttribute('disabled');
    prevDblBtn.removeAttribute('disabled');
    petsCardContainer.innerHTML = '';
    displayCard(currCardsQuantity, currentPage - 1);
    if (currentPage === maxPageNum) {
      nextBtn.setAttribute('disabled', '');
      nextDblBtn.setAttribute('disabled', '');
    }
  }

  function prevBtnClick() {
    currentPage--;
    pageIndicator.innerText = currentPage;
    prevBtn.removeAttribute('disabled');
    prevDblBtn.removeAttribute('disabled');
    petsCardContainer.innerHTML = '';
    displayCard(currCardsQuantity, currentPage - 1);
    if (currentPage === 1) {
      prevBtn.setAttribute('disabled', '');
      prevDblBtn.setAttribute('disabled', '');
    }
    if (currentPage === maxPageNum - 1) {
      nextBtn.removeAttribute('disabled');
      nextDblBtn.removeAttribute('disabled');
    }
  }

  function nextDblBtnClick() {
    currentPage = maxPageNum;
    pageIndicator.innerText = currentPage;
    prevBtn.removeAttribute('disabled');
    prevDblBtn.removeAttribute('disabled');
    petsCardContainer.innerHTML = '';
    displayCard(currCardsQuantity, currentPage - 1);
    nextBtn.setAttribute('disabled', '');
    nextDblBtn.setAttribute('disabled', '');
  }

  function prevDblBtnClick() {
    currentPage = 1;
    pageIndicator.innerText = currentPage;
    prevBtn.setAttribute('disabled', '');
    prevDblBtn.setAttribute('disabled', '');
    nextBtn.removeAttribute('disabled');
    nextDblBtn.removeAttribute('disabled');
    petsCardContainer.innerHTML = '';
    displayCard(currCardsQuantity, currentPage - 1);
  }

  nextBtn.addEventListener('click', nextBtnClick);
  nextDblBtn.addEventListener('click', nextDblBtnClick);
  prevBtn.addEventListener('click', prevBtnClick);
  prevDblBtn.addEventListener('click', prevDblBtnClick);

  setTimeout(() => {
    window.addEventListener('resize', () => {
      document.location.reload();
    });
  }, 500);
};

export default pagination;
