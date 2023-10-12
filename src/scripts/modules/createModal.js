/* eslint-disable no-use-before-define */
import pets from '../components/pets';

export function createModal() {
  const visibleBlock = document.querySelector('.pets__slider-visible');
  // const ourPetsBlock = document.querySelector('.pets-content__items');
  const backgroundElem = document.querySelector('.modal-background');

  function showModal(id) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'block';

    modal.innerHTML = `
        <div class="modal__container">
          <div class="modal__wrapper">
            <button class="button_arrow button_close" type="button"></button>
            <div class="modal__window">
              <div class="modal__img-wrapper">
                <img class="modal__img" src=${pets[id].img} alt=${pets[id].breed}>
              </div>
              <div class="modal__description-wrapper">
                <h3 class="modal__title">${pets[id].name}</h3>
                <h4 class="modal__subtitle">${pets[id].type} - ${pets[id].breed}</h4>
                <h5 class="modal__text">${pets[id].description}</h5>
                <ul class="modal__list">
                  <li class="modal__item"><span class="modal__item-title">Age:</span> ${pets[id].age}</li>
                  <li class="modal__item"><span class="modal__item-title">Inoculations:</span> ${pets[id].inoculations}</li>
                  <li class="modal__item"><span class="modal__item-title">Diseases:</span> ${pets[id].diseases}</li>
                  <li class="modal__item"><span class="modal__item-title">Parasites:</span> ${pets[id].parasites}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;

    document.body.prepend(modal);
    document.body.style.overflow = 'hidden';
    backgroundElem.style.display = 'block';

    const closeBtn = document.querySelector('.button_close');
    closeBtn.addEventListener('click', () => closeModal());

    const modalCont = document.querySelector('.modal__container');
    modalCont.addEventListener('click', (e) => {
      if (e.target === modalCont) {
        closeModal();
      }
    });

    function closeModal() {
      modal.remove();
      document.body.style.overflow = '';
      backgroundElem.style.display = 'none';
    }
  }

  visibleBlock.addEventListener('click', (event) => {
    event.preventDefault();
    const petsCard = event.target.closest('.pets__slider-card');
    const { id } = petsCard.dataset;

    if (petsCard) {
      showModal(id);
    }
  });
}

// ourPetsBlock.addEventListener('click', (event) => {
//   event.preventDefault();
//   const petsCard = event.target.closest('.pets-content__item');
//   const { id } = petsCard.dataset;

//   if (petsCard) {
//     showModal(id);
//   }
// });
