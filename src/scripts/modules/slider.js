/* eslint-disable no-unused-vars */
import { createSlideCards } from './createSlideCards';
/* eslint-disable no-use-before-define */
export function createSlider() {
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  const slider = document.querySelector('.pets__slider-wrapper');
  const leftBlock = document.querySelector('.pets__slider-left');
  const rightBlock = document.querySelector('.pets__slider-right');
  const visibleBlock = document.querySelector('.pets__slider-visible');

  const moveToleft = () => {
    slider.classList.add('transition-left');
    leftBtn.removeEventListener('click', moveToleft);
    rightBtn.removeEventListener('click', moveToRight);
  };

  const moveToRight = () => {
    slider.classList.add('transition-right');
    rightBtn.removeEventListener('click', moveToRight);
    leftBtn.removeEventListener('click', moveToleft);
  };

  leftBtn.addEventListener('click', moveToleft);
  rightBtn.addEventListener('click', moveToRight);

  slider.addEventListener('animationend', (event) => {
    let currBlock;
    if (event.animationName === 'move-left') {
      slider.classList.remove('transition-left');
      rightBlock.innerHTML = '';
      leftBlock.innerHTML = '';
      createSlideCards();
      currBlock = leftBlock;
      visibleBlock.innerHTML = leftBlock.innerHTML;
    }
    if (event.animationName === 'move-right') {
      slider.classList.remove('transition-right');
      rightBlock.innerHTML = '';
      leftBlock.innerHTML = '';
      createSlideCards();
      currBlock = rightBlock;
      visibleBlock.innerHTML = rightBlock.innerHTML;
    }

    leftBtn.addEventListener('click', moveToleft);
    rightBtn.addEventListener('click', moveToRight);
  });

  window.addEventListener('resize', () => {
    moveToRight();
  });
}
