import { classesCSS } from '../../data/keys-data';

export default class Key {
  constructor(key) {
    this.id = key.id;
    this.en = key.en;
    this.ru = key.ru;
  }

  createKey(currentLanguage) {
    const key = document.createElement('div');
    key.classList.add(classesCSS.KEY);
    key.dataset.keyCode = this.id;

    const keyContent = document.createElement('span');
    if (currentLanguage === 'en') {
      keyContent.textContent = this.en.text;
    } else if (currentLanguage === 'ru') {
      keyContent.textContent = this.ru.text;
    }
    key.append(keyContent);

    return key;
  }
}
