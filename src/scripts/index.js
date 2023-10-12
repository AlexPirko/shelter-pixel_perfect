/* eslint-disable no-console */
import '../styles/index.scss';

import burger from './modules/burger';
import { createCards } from './modules/createCards';
import { createSlider } from './modules/slider';
import { createModal } from './modules/createModal';

console.log('Реализация burger menu на обеих страницах: +26\nРеализация слайдера-карусели на странице Main: +32(не выполнено:сохраняется только одно предыдущее состояние(-4)\nРеализация пагинации на странице Pets: +36\nРеализация попап на обеих страницах: +12\nИтого: 96');

window.addEventListener('DOMContentLoaded', () => {
  burger('.navigation', '.burger__wrapper', '.modal-background', '.navigation__list-item');
  createCards();
  createSlider();
  createModal();
});
