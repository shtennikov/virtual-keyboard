import {
  keys,
  keysMap,
  serviceKeys,
  classesCSS,
  preventDefaultKeys,
  notPreventDefaultKeysInTextArea,
} from '../../data/keys-data';
import Key from './Key';

/* eslint-disable no-param-reassign */
class Keyboard {
  constructor(textArea) {
    this.textArea = textArea;
    this.keys = [];
    this.pressedKey = null;
    this.clickedKey = null;
    this.capsPressed = false;
    this.capsLocked = false;
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

    document.addEventListener('keydown', (event) => {
      this.textArea.focus();
      if (!notPreventDefaultKeysInTextArea.includes(event.code)) {
        event.preventDefault();
      }
    });
    keyboard.addEventListener('click', () => {
      this.textArea.focus();
    });

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
      if (!this.capsPressed) {
        this.capsLocked = !this.capsLocked;
        this.capsPressed = true;
        this.handleCapsState();
      }
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
    if (
      event.code === 'CapsLock'
      || event.target.closest('.key[data-key-code="CapsLock"]')) {
      this.capsPressed = false;
    }
  }

  handleShiftState() {
    this.keys.forEach((key) => {
      const { keyCode } = key.dataset;
      if (this.shiftPressed && !this.capsLocked) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textShift;
      } else if (this.capsLocked && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textCaps;
      } else if (this.shiftPressed && this.capsLocked) {
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
      if (this.capsLocked && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textCaps;
      } else if (!this.capsLocked && !this.shiftPressed) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].text;
      } else if (this.shiftPressed && this.capsLocked) {
        key.firstChild.textContent = keysMap.get(keyCode)[this.currentLanguage].textShiftCaps;
      }
    });
  }

  handleBackspaseState() {
    let posStart = this.textArea.selectionStart;
    const posEnd = this.textArea.selectionEnd;
    const textAreaValue = this.textArea.value;

    if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
      this.textArea.value = textAreaValue.slice(0, posStart) + textAreaValue.slice(posEnd);
      this.textArea.setSelectionRange(posStart, posStart);
    } else {
      posStart = this.textArea.selectionStart;
      if (posStart > 0) {
        this.textArea.value = textAreaValue.slice(0, posStart - 1) + textAreaValue.slice(posStart);
        this.textArea.setSelectionRange(posStart - 1, posStart - 1);
      }
    }
  }

  handleDeleteState() {
    let posStart = this.textArea.selectionStart;
    const posEnd = this.textArea.selectionEnd;
    const textAreaValue = this.textArea.value;

    if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
      this.textArea.value = textAreaValue.slice(0, posStart) + textAreaValue.slice(posEnd);
      this.textArea.setSelectionRange(posStart, posStart);
    } else {
      posStart = this.textArea.selectionStart;
      if (posStart > 0) {
        this.textArea.value = textAreaValue.slice(0, posStart) + textAreaValue.slice(posStart + 1);
        this.textArea.setSelectionRange(posStart, posStart);
      }
    }
  }

  handleClickOnArrows(event) {
    const textarea = this.textArea;
    const currentPos = textarea.selectionStart;
    const currentLine = textarea.value.substr(0, currentPos).split('\n').length - 1;
    const linesToMove = 1;
    if (event.target.closest('.key[data-key-code="ArrowLeft"]')) {
      this.textArea.selectionStart -= 1;
      this.textArea.selectionEnd -= 1;
    }
    if (event.target.closest('.key[data-key-code="ArrowRight"]')) {
      this.textArea.selectionStart += 1;
    }
    if (event.target.closest('.key[data-key-code="ArrowUp"]')) {
      const newPosition = textarea.value
        .split('\n')
        .slice(0, currentLine - linesToMove + 1)
        .join('\n').length;
      this.textArea.setSelectionRange(newPosition, newPosition);
    }
    if (event.target.closest('.key[data-key-code="ArrowDown"]')) {
      const newPosition = textarea.value
        .split('\n')
        .slice(0, currentLine + linesToMove + 1)
        .join('\n').length;
      this.textArea.setSelectionRange(newPosition, newPosition);
    }
  }

  putInTextArea(symbol) {
    const startPos = this.textArea.selectionStart;
    const endPos = this.textArea.selectionEnd;

    this.textArea.value = `${this.textArea.value.slice(0, startPos)}${symbol}${this.textArea.value.slice(endPos)}`;
    this.textArea.setSelectionRange(startPos + symbol.length, startPos + symbol.length);
  }

  typeTextToTextArea(key) {
    const posStart = this.textArea.selectionStart;
    const textAreaValue = this.textArea.value;

    switch (key.dataset.keyCode) {
      case 'Backspace':
        this.handleBackspaseState();
        break;
      case 'Delete':
        this.handleDeleteState();
        break;
      case 'Tab':
        this.putInTextArea('\t');
        break;
      case 'Enter':
        this.putInTextArea('\n');
        break;
      case 'Space':
        this.putInTextArea(' ');
        break;
      default:
        if (serviceKeys.includes(key.dataset.keyCode)) {
          this.textArea.value += '';
        } else {
          this.textArea.value = textAreaValue.slice(0, posStart)
            + key.textContent
            + this.textArea.value.slice(posStart);
          this.textArea.setSelectionRange(posStart + 1, posStart + 1);
        }
        break;
    }
  }

  pressDownHandler(event) {
    if (event.code === 'Escape') {
      return;
    }
    this.pressedKey = this.keys.find((key) => key.dataset.keyCode === event.code);
    if (this.pressedKey) {
      if (preventDefaultKeys.includes(event.code)) {
        event.preventDefault();
      }
      this.pressedKey.classList.add('active');
      this.typeTextToTextArea(this.pressedKey);
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
      this.handleClickOnArrows(event);
    }
  }

  clickUpHandler(event) {
    this.clickedKey.classList.remove('active');
    this.turnUpSymbolsPressUp(event);
  }
}

export default Keyboard;
