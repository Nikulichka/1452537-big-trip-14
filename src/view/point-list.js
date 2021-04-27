import {createElement} from '../utils.js';

const createPointListTemplate = () => {
  return '<ul class="trip-events__list"></ul>';
};

export default class PointListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createPointListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export const pointListComponent = new PointListView().getElement();
