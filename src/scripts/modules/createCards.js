/* eslint-disable no-param-reassign */
import pets from '../components/pets';

export function createCards() {
  const visibleCards = document.querySelector('.pets__slider-visible');
  const leftCards = document.querySelector('.pets__slider-left');
  const rightCards = document.querySelector('.pets__slider-right');

  const randomList = ([...pets.sort(() => 0.5 - Math.random()),
  ]);

  const randomizePets = randomList.map((item, index) => {
    item.id = index;
    return item;
  });

  randomizePets.forEach(({
    id, name, img, breed,
  }) => {
    const petsCard = document.createElement('div');
    petsCard.classList.add('pets__slider-card');
    petsCard.setAttribute('data-id', id);

    petsCard.innerHTML = `
      <div class="pets__slider-img_wrapper">
        <img class="pets-content__img" src=${img} alt=${breed}>
      </div>
      <h4 class="pets__slider-subtitle">${name}</h4>
      <a href="#" class="button button_secondary pets__btn">Learn more</a>
    `;

    if (window.screen.availWidth > 970) {
      for (let i = 0; i < 9; i++) {
        if (id < 3) {
          visibleCards.appendChild(petsCard);
        } else if (id >= 3 && id < 6) {
          leftCards.appendChild(petsCard);
        } else {
          rightCards.append(petsCard);
        }
      }
    }

    if (window.screen.availWidth < 971) {
      for (let i = 0; i < 9; i++) {
        if (id < 2) {
          visibleCards.appendChild(petsCard);
        } else if (id >= 2 && id < 4) {
          leftCards.appendChild(petsCard);
        } else if (id >= 4 && id < 6) {
          rightCards.appendChild(petsCard);
        } else {
          petsCard.remove();
        }
      }
    }

    if (window.screen.availWidth < 768) {
      for (let i = 0; i < 9; i++) {
        if (id === 1) {
          visibleCards.appendChild(petsCard);
        } else if (id === 2) {
          leftCards.appendChild(petsCard);
        } else if (id === 3) {
          rightCards.appendChild(petsCard);
        } else {
          petsCard.remove();
        }
      }
    }
  });
}
