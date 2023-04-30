import Keyboard from './Keyboard';
import createImages from './create-images';
import { classesCSS } from '../../data/keys-data';

const TEXT_TITLE = 'RSS Virtual Keyboard';
const TEXT_DESCRIPTION = 'Клавиатура создана в операционной системе Windows';
const TEXT_CHANGE_LANGUAGE = 'Для переключения языка используйте комбинацию левый Shift + левый Alt';

let title = null;
let images = null;
let textArea = null;
let keyboard = null;
let keyboardBlock = null;
let description = null;

export default function createApp() {
  const app = document.createElement('div');
  app.classList.add(classesCSS.APP_CONTAINER);

  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
  }

  title = document.createElement('h1');
  title.classList.add(classesCSS.TITLE);
  title.textContent = TEXT_TITLE;

  images = createImages();

  textArea = document.createElement('textarea');
  textArea.classList.add(classesCSS.TEXT_AREA);

  keyboard = new Keyboard(textArea);
  keyboardBlock = keyboard.createKeyboard();

  description = document.createElement('span');
  description.insertAdjacentHTML('afterbegin', `${TEXT_DESCRIPTION}<br>${TEXT_CHANGE_LANGUAGE}`);

  app.append(title, images, textArea, keyboardBlock, description);
  document.addEventListener('keydown', keyboard.pressDownHandler.bind(keyboard));
  document.addEventListener('keyup', keyboard.pressUpHandler.bind(keyboard));
  document.addEventListener('mousedown', keyboard.clickDownHandler.bind(keyboard));
  document.addEventListener('mouseup', keyboard.clickUpHandler.bind(keyboard));

  return app;
}
