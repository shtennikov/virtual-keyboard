export default class Key {
  constructor(key) {
    this.id = key.id;
    this.en = key.en;
    this.ru = key.ru;
    this.classesCSS = {
      KEY: 'key',
    };
  }

  createKey(currentLanguage) {
    const key = document.createElement('div');
    key.classList.add(this.classesCSS.KEY);
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
