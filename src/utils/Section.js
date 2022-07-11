export class Section {

  constructor({ items, renderer }, listContainerElements) {
    this._items = items;
    this._renderer = renderer;
  }

  // обходит массив, для каждого элемента создаёт экземпляр карточки, вызывает addItem
  rendererCard() {
    this._items.forEach((item) => {
      this._renderer(item)
    })

  }
}
