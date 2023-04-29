import {
  keys, keysMap, serviceKeys, classesCSS, preventDefaultKeys,
  notPreventDefaultKeysInTextArea,
} from '../../data/keys-data';
import Key from './Key';

/* eslint-disable no-param-reassign */
class Keyboard {
  constructor(textArea) {
    this.textArea = textArea;
    this.selectionposStartition = 0;
    this.isTextAreaFocused = false;
    this.keys = [];
    this.pressedKey = null;
    this.clickedKey = null;
    this.capsPressed = false;
    this.altPressed = false;
    this.shiftPressed = false;
    this.currentLanguage = localStorage.getItem('language');
  }

  createKeyboard() {
    const currentLanguage = localStorage.getItem('language');
    const keyboard = document.createElement('div');
    keyboard.classList.add(classesCSS.KEYS_KEYBOARD);

    let newRow = null;
    let newKey = null;

    for (let row = 0; row < keys.length; row += 1) {
      newRow = document.createElement('div');
      newRow.classList.add(classesCSS.KEYBOARD_ROW);
      for (let key = 0; key < keys[row].length; key += 1) {
        newKey = new Key(keys[row][key]).createKey(currentLanguage);
        this.keys.push(newKey);
        newRow.append(newKey);
      }
      keyboard.append(newRow);
    }
    return keyboard;
  }

  langChangeHandlerPressDown(event) {
    if (event.code === 'AltLeft') {
      this.altPressed = true;
    }
    if (event.code === 'ShiftLeft') {
      this.shiftPressed = true;
    }
    if (this.shiftPressed && this.altPressed) {
      const newLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
      this.currentLanguage = newLanguage;
      localStorage.setItem('language', newLanguage);
      this.keys.forEach((key) => {
        const { keyCode } = key.dataset;
        key.firstChild.textContent = keysMap.get(keyCode)[newLanguage].text;
      });
    }
  }

  langChangeHandlerPressUp(event) {
    if (event.code === 'AltLeft') {
      this.altPressed = false;
    }
    if (event.code === 'ShiftLeft') {
      this.shiftPressed = false;
      this.handleShiftState();
    }
  }

  turnUpSymbolsPressDown(event) {
    if (
      event.code === 'ShiftLeft'
      || event.code === 'ShiftRight'
      || event.target.closest('.key[data-key-code="ShiftLeft"]')
      || event.target.closest('.key[data-key-code="ShiftRight"]')
    ) {
      this.shiftPressed = true;
      this.handleShiftState();
    }
    if (
      event.code === 'CapsLock'
      || event.target.closest('.key[data-key-code="CapsLock"]')
    ) {
      this.capsPressed = !this.capsPressed;
      this.handleCapsState();
    }
  }

  turnUpSymbolsPressUp(event) {
    if (
      event.code === 'ShiftLeft'
      || event.code === 'ShiftRight'
      || event.target.closest('.key')
    ) {
      this.shiftPressed = false;
      this.handleShiftState();
    }
  }

  handleShiftState() {
    this.keys.forEach((key) => {
      const { keyCode } = key.dataset;
      if (this.shiftPressed && !this.capsPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textShift;
      } else if (this.capsPressed && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textCaps;
      } else if (this.shiftPressed && this.capsPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textShiftCaps
          || keysMap.get(keyCode)[this.currentLanguage].textCaps;
      } else {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].text;
      }
    });
  }

  handleCapsState() {
    this.keys.forEach((key) => {
      const { keyCode } = key.dataset;
      if (this.capsPressed && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textCaps;
      } else if (!this.capsPressed && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].text;
      } else if (this.shiftPressed && this.capsPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textShift;
      }
    });
  }

  pressDownHandler(event) {
    if (this.preventDefaultKeys.includes(event.code)) {
      event.preventDefault();
    }
    this.pressedKey = this.keys.find((key) => key.dataset.keyCode === event.code);
    if (this.pressedKey) {
      this.pressedKey.classList.add('active');
    }
    this.langChangeHandlerPressDown(event);
    this.turnUpSymbolsPressDown(event);
  }

  pressUpHandler(event) {
    this.pressedKey = this.keys.find((key) => key.dataset.keyCode === event.code);
    if (this.pressedKey) {
      this.pressedKey.classList.remove('active');
    }
    this.langChangeHandlerPressUp(event);
    this.turnUpSymbolsPressUp(event);
  }

  clickDownHandler(event) {
    this.clickedKey = event.target;
    if (this.clickedKey.closest('.key')) {
      this.clickedKey.classList.add('active');
      this.typeTextToTextArea(this.clickedKey.closest('.key'));
      this.turnUpSymbolsPressDown(event);
    }
  }

  clickUpHandler(event) {
    this.clickedKey.classList.remove('active');
    this.turnUpSymbolsPressUp(event);
  }
}

export default Keyboard;
