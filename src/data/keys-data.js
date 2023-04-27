const keys = [
  [
    {
      id: 'Backquote',
      en: { text: '`', textShift: '~', textCaps: '`' },
      ru: { text: 'ё', textShift: 'Ё', textCaps: 'Ё' },
    },
    {
      id: 'Digit1',
      en: { text: '1', textShift: '!', textCaps: '1' },
      ru: { text: '1', textShift: '!', textCaps: '1' },
    },
    {
      id: 'Digit2',
      en: { text: '2', textShift: '@', textCaps: '2' },
      ru: { text: '2', textShift: '"', textCaps: '2' },
    },
    {
      id: 'Digit3',
      en: { text: '3', textShift: '#', textCaps: '3' },
      ru: { text: '3', textShift: '№', textCaps: '3' },
    },
    {
      id: 'Digit4',
      en: { text: '4', textShift: '$', textCaps: '4' },
      ru: { text: '4', textShift: ';', textCaps: '4' },
    },
    {
      id: 'Digit5',
      en: { text: '5', textShift: '%', textCaps: '5' },
      ru: { text: '5', textShift: '%', textCaps: '5' },
    },
    {
      id: 'Digit6',
      en: { text: '6', textShift: '^', textCaps: '6' },
      ru: { text: '6', textShift: ':', textCaps: '6' },
    },
    {
      id: 'Digit7',
      en: { text: '7', textShift: '&', textCaps: '7' },
      ru: { text: '7', textShift: '?', textCaps: '7' },
    },
    {
      id: 'Digit8',
      en: { text: '8', textShift: '*', textCaps: '8' },
      ru: { text: '8', textShift: '*', textCaps: '8' },
    },
    {
      id: 'Digit9',
      en: { text: '9', textShift: '(', textCaps: '9' },
      ru: { text: '9', textShift: '(', textCaps: '9' },
    },
    {
      id: 'Digit0',
      en: { text: '0', textShift: ')', textCaps: '0' },
      ru: { text: '0', textShift: ')', textCaps: '0' },
    },
    {
      id: 'Minus',
      en: { text: '-', textShift: '_', textCaps: '-' },
      ru: { text: '-', textShift: '_', textCaps: '-' },
    },
    {
      id: 'Equal',
      en: { text: '=', textShift: '+', textCaps: '=' },
      ru: { text: '=', textShift: '+', textCaps: '=' },
    },
    {
      id: 'Backspace',
      en: { text: 'Backspace', textShift: 'Backspace', textCaps: 'Backspace' },
      ru: { text: 'Backspace', textShift: 'Backspace', textCaps: 'Backspace' },
    },
  ],
  [
    {
      id: 'Tab',
      en: { text: 'Tab', textShift: 'Tab', textCaps: 'Tab' },
      ru: { text: 'Tab', textShift: 'Tab', textCaps: 'Tab' },
    },
    {
      id: 'KeyQ',
      en: { text: 'q', textShift: 'Q', textCaps: 'Q' },
      ru: { text: 'й', textShift: 'Й', textCaps: 'Й' },
    },
    {
      id: 'KeyW',
      en: { text: 'w', textShift: 'W', textCaps: 'W' },
      ru: { text: 'ц', textShift: 'Ц', textCaps: 'Ц' },
    },
    {
      id: 'KeyE',
      en: { text: 'e', textShift: 'E', textCaps: 'E' },
      ru: { text: 'у', textShift: 'У', textCaps: 'У' },
    },
    {
      id: 'KeyR',
      en: { text: 'r', textShift: 'R', textCaps: 'R' },
      ru: { text: 'к', textShift: 'К', textCaps: 'К' },
    },
    {
      id: 'KeyT',
      en: { text: 't', textShift: 'T', textCaps: 'T' },
      ru: { text: 'е', textShift: 'Е', textCaps: 'Е' },
    },
    {
      id: 'KeyY',
      en: { text: 'y', textShift: 'Y', textCaps: 'Y' },
      ru: { text: 'н', textShift: 'Н', textCaps: 'Н' },
    },
    {
      id: 'KeyU',
      en: { text: 'u', textShift: 'U', textCaps: 'U' },
      ru: { text: 'г', textShift: 'Г', textCaps: 'Г' },
    },
    {
      id: 'KeyI',
      en: { text: 'i', textShift: 'I', textCaps: 'I' },
      ru: { text: 'ш', textShift: 'Ш', textCaps: 'Ш' },
    },
    {
      id: 'KeyO',
      en: { text: 'o', textShift: 'O', textCaps: 'O' },
      ru: { text: 'щ', textShift: 'Щ', textCaps: 'Щ' },
    },
    {
      id: 'KeyP',
      en: { text: 'p', textShift: 'P', textCaps: 'P' },
      ru: { text: 'з', textShift: 'З', textCaps: 'З' },
    },
    {
      id: 'BracketLeft',
      en: { text: '[', textShift: '{', textCaps: '[' },
      ru: { text: 'х', textShift: 'Х', textCaps: 'Х' },
    },
    {
      id: 'BracketRight',
      en: { text: ']', textShift: '}', textCaps: ']' },
      ru: { text: 'ъ', textShift: 'Ъ', textCaps: 'Ъ' },
    },
    {
      id: 'Backslash',
      en: { text: '\\', textShift: '|', textCaps: '\\' },
      ru: { text: '\\', textShift: '/', textCaps: '\\' },
    },
    {
      id: 'Delete',
      en: { text: 'Del', textShift: 'Del', textCaps: 'Del' },
      ru: { text: 'Del', textShift: 'Del', textCaps: 'Del' },
    },
  ],
  [
    {
      id: 'CapsLock',
      en: { text: 'CapsLock', textShift: 'CapsLock', textCaps: 'CapsLock' },
      ru: { text: 'CapsLock', textShift: 'CapsLock', textCaps: 'CapsLock' },
    },
    {
      id: 'KeyA',
      en: { text: 'a', textShift: 'A', textCaps: 'A' },
      ru: { text: 'ф', textShift: 'Ф', textCaps: 'Ф' },
    },
    {
      id: 'KeyS',
      en: { text: 's', textShift: 'S', textCaps: 'S' },
      ru: { text: 'ы', textShift: 'Ы', textCaps: 'Ы' },
    },
    {
      id: 'KeyD',
      en: { text: 'd', textShift: 'D', textCaps: 'D' },
      ru: { text: 'в', textShift: 'В', textCaps: 'В' },
    },
    {
      id: 'KeyF',
      en: { text: 'f', textShift: 'F', textCaps: 'F' },
      ru: { text: 'а', textShift: 'А', textCaps: 'А' },
    },
    {
      id: 'KeyG',
      en: { text: 'g', textShift: 'G', textCaps: 'G' },
      ru: { text: 'п', textShift: 'П', textCaps: 'П' },
    },
    {
      id: 'KeyH',
      en: { text: 'h', textShift: 'H', textCaps: 'H' },
      ru: { text: 'р', textShift: 'Р', textCaps: 'Р' },
    },
    {
      id: 'KeyJ',
      en: { text: 'j', textShift: 'J', textCaps: 'J' },
      ru: { text: 'о', textShift: 'О', textCaps: 'О' },
    },
    {
      id: 'KeyK',
      en: { text: 'k', textShift: 'K', textCaps: 'K' },
      ru: { text: 'л', textShift: 'Л', textCaps: 'Л' },
    },
    {
      id: 'KeyL',
      en: { text: 'l', textShift: 'L', textCaps: 'L' },
      ru: { text: 'д', textShift: 'Д', textCaps: 'Д' },
    },
    {
      id: 'Semicolon',
      en: { text: ';', textShift: ':', textCaps: ';' },
      ru: { text: 'ж', textShift: 'Ж', textCaps: 'Ж' },
    },
    {
      id: 'Quote',
      en: { text: "'", textShift: '"', textCaps: "'" },
      ru: { text: 'э', textShift: 'Э', textCaps: 'Э' },
    },
    {
      id: 'Enter',
      en: { text: 'Enter', textShift: 'Enter', textCaps: 'Enter' },
      ru: { text: 'Enter', textShift: 'Enter', textCaps: 'Enter' },
    },
  ],
  [
    {
      id: 'ShiftLeft',
      en: { text: 'Shift', textShift: 'Shift', textCaps: 'Shift' },
      ru: { text: 'Shift', textShift: 'Shift', textCaps: 'Shift' },
    },
    {
      id: 'KeyZ',
      en: { text: 'z', textShift: 'Z', textCaps: 'Z' },
      ru: { text: 'я', textShift: 'Я', textCaps: 'Я' },
    },
    {
      id: 'KeyX',
      en: { text: 'x', textShift: 'X', textCaps: 'X' },
      ru: { text: 'ч', textShift: 'Ч', textCaps: 'Ч' },
    },
    {
      id: 'KeyC',
      en: { text: 'c', textShift: 'C', textCaps: 'C' },
      ru: { text: 'с', textShift: 'С', textCaps: 'С' },
    },
    {
      id: 'KeyV',
      en: { text: 'v', textShift: 'V', textCaps: 'V' },
      ru: { text: 'м', textShift: 'М', textCaps: 'М' },
    },
    {
      id: 'KeyB',
      en: { text: 'b', textShift: 'B', textCaps: 'B' },
      ru: { text: 'и', textShift: 'И', textCaps: 'И' },
    },
    {
      id: 'KeyN',
      en: { text: 'n', textShift: 'N', textCaps: 'N' },
      ru: { text: 'т', textShift: 'Т', textCaps: 'Т' },
    },
    {
      id: 'KeyM',
      en: { text: 'm', textShift: 'M', textCaps: 'M' },
      ru: { text: 'ь', textShift: 'Ь', textCaps: 'Ь' },
    },
    {
      id: 'Comma',
      en: { text: ',', textShift: '<', textCaps: ',' },
      ru: { text: 'б', textShift: 'Б', textCaps: 'Б' },
    },
    {
      id: 'Period',
      en: { text: '.', textShift: '>', textCaps: '.' },
      ru: { text: 'ю', textShift: 'Ю', textCaps: 'Ю' },
    },
    {
      id: 'Slash',
      en: { text: '/', textShift: '?', textCaps: '/' },
      ru: { text: '.', textShift: ',', textCaps: '.' },
    },
    {
      id: 'ArrowUp',
      en: { text: '▲', textShift: '▲', textCaps: '▲' },
      ru: { text: '▲', textShift: '▲', textCaps: '▲' },
    },
    {
      id: 'ShiftRight',
      en: { text: 'Shift', textShift: 'Shift', textCaps: 'Shift' },
      ru: { text: 'Shift', textShift: 'Shift', textCaps: 'Shift' },
    },
  ],
  [
    {
      id: 'ControlLeft',
      en: { text: 'Ctrl', textShift: 'Ctrl', textCaps: 'Ctrl' },
      ru: { text: 'Ctrl', textShift: 'Ctrl', textCaps: 'Ctrl' },
    },
    {
      id: 'MetaLeft',
      en: { text: 'Win', textShift: 'Win', textCaps: 'Win' },
      ru: { text: 'Win', textShift: 'Win', textCaps: 'Win' },
    },
    {
      id: 'AltLeft',
      en: { text: 'Alt', textShift: 'Alt', textCaps: 'Alt' },
      ru: { text: 'Alt', textShift: 'Alt', textCaps: 'Alt' },
    },
    {
      id: 'Space',
      en: { text: ' ', textShift: ' ', textCaps: ' ' },
      ru: { text: ' ', textShift: ' ', textCaps: ' ' },
    },
    {
      id: 'AltRight',
      en: { text: 'Alt', textShift: 'Alt', textCaps: 'Alt' },
      ru: { text: 'Alt', textShift: 'Alt', textCaps: 'Alt' },
    },
    {
      id: 'ArrowLeft',
      en: { text: '◀', textShift: '◀', textCaps: '◀' },
      ru: { text: '◀', textShift: '◀', textCaps: '◀' },
    },
    {
      id: 'ArrowDown',
      en: { text: '▼', textShift: '▼', textCaps: '▼' },
      ru: { text: '▼', textShift: '▼', textCaps: '▼' },
    },
    {
      id: 'ArrowRight',
      en: { text: '▶', textShift: '▶', textCaps: '▶' },
      ru: { text: '▶', textShift: '▶', textCaps: '▶' },
    },
    {
      id: 'ControlRight',
      en: { text: 'Ctrl', textShift: 'Ctrl', textCaps: 'Ctrl' },
      ru: { text: 'Ctrl', textShift: 'Ctrl', textCaps: 'Ctrl' },
    },
  ],
];

const keysMap = new Map();

for (let row = 0; row < keys.length; row += 1) {
  for (let key = 0; key < keys[row].length; key += 1) {
    keysMap.set(keys[row][key].id, keys[row][key]);
  }
}

export { keys, keysMap };
