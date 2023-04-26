export default class Key {
  constructor(key) {
    this.id = key.id;
    this.en = key.en;
    this.ru = key.ru;
    this.classesCSS = {
      KEY: 'key',
      KEY_CONTENT_RU: 'key__ru',
      KEY_CONTENT_EN: 'key__en',
      KEY_HIDDEN: 'hidden',
    };
  }

  createKey() {
    const key = document.createElement('div');
    key.classList.add(this.classesCSS.KEY);
    key.dataset.keyCode = this.id;

    const keyContentRU = document.createElement('span');
    const keyContentEN = document.createElement('span');
    keyContentRU.classList.add(this.classesCSS.KEY_CONTENT_RU, this.classesCSS.KEY_HIDDEN);
    keyContentEN.classList.add(this.classesCSS.KEY_CONTENT_EN);
    keyContentRU.textContent = this.ru.text;
    keyContentEN.textContent = this.en.text;

    key.append(keyContentRU, keyContentEN);

    return key;
  }
}
