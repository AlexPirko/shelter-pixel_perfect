/* eslint-disable no-use-before-define */
import newDataPets from '../components/randomizeData';

export function createPetsModal() {
  const ourPetsBlock = document.querySelector('.pets-content__items');
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
                <img class="modal__img" src=${newDataPets[id].img} alt=${newDataPets[id].breed}>
              </div>
              <div class="modal__description-wrapper">
                <h3 class="modal__title">${newDataPets[id].name}</h3>
                <h4 class="modal__subtitle">${newDataPets[id].type} - ${newDataPets[id].breed}</h4>
                <h5 class="modal__text">${newDataPets[id].description}</h5>
                <ul class="modal__list">
                  <li class="modal__item"><span class="modal__item-title">Age:</span> ${newDataPets[id].age}</li>
                  <li class="modal__item"><span class="modal__item-title">Inoculations:</span> ${newDataPets[id].inoculations}</li>
                  <li class="modal__item"><span class="modal__item-title">Diseases:</span> ${newDataPets[id].diseases}</li>
                  <li class="modal__item"><span class="modal__item-title">Parasites:</span> ${newDataPets[id].parasites}</li>
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

  ourPetsBlock.addEventListener('click', (event) => {
    event.preventDefault();
    const petsCard = event.target.closest('.pets-content__item');
    const { id } = petsCard.dataset;

    if (petsCard) {
      showModal(id);
    }
  });
}
