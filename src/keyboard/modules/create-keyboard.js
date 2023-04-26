import keys from '../../data/keys-data';
import Key from './Key';

const classesCSS = {
  KEYS_KEYBOARD: 'keyboard',
  KEYBOARD_ROW: 'keyboard__row',
};

let newRow = null;
let newKey = null;

export default function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add(classesCSS.KEYS_KEYBOARD);

  for (let row = 0; row < keys.length; row += 1) {
    newRow = document.createElement('div');
    newRow.classList.add(classesCSS.KEYBOARD_ROW);
    for (let key = 0; key < keys[row].length; key += 1) {
      newKey = new Key(keys[row][key]).createKey();
      newRow.append(newKey);
      keyboard.append(newRow);
    }
  }

  return keyboard;
}
