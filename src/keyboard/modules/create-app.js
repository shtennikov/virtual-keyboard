import Keyboard from './Keyboard';
import { classesCSS } from '../../data/keys-data';

const TEXT_TITLE = 'RSS Virtual Keyboard';

let title = null;
let textArea = null;
let keyboard = null;
let keyboardBlock = null;

export default function createApp() {
  const app = document.createElement('div');
  app.classList.add(classesCSS.APP_CONTAINER);

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'ru');
  }

  title = document.createElement('h1');
  title.classList.add(classesCSS.TITLE);
  title.textContent = TEXT_TITLE;

  textArea = document.createElement('textarea');
  textArea.classList.add(classesCSS.TEXT_AREA);

  keyboard = new Keyboard();
  keyboardBlock = keyboard.createKeyboard();

  app.append(title, textArea, keyboardBlock);
  document.addEventListener('keydown', keyboard.pressDownHandler.bind(keyboard));
  document.addEventListener('keyup', keyboard.pressUpHandler.bind(keyboard));
  document.addEventListener('mousedown', keyboard.clickHandler);
  document.addEventListener('mouseup', keyboard.clickHandler);

  return app;
}
