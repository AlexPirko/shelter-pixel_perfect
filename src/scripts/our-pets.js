import '../styles/index.scss';

import burger from './modules/burger';
import pagination from './modules/pagination';
import { createPetsModal } from './modules/createPetsModal';

window.addEventListener('DOMContentLoaded', () => {
  burger('.navigation', '.burger__wrapper', '.modal-background', '.navigation__list-item');
  pagination();
  createPetsModal();
});
