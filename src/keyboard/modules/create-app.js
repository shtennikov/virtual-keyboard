import Keyboard from './Keyboard';

const classesCSS = {
  APP_CONTAINER: 'wrapper',
  TITLE: 'title',
  TEXT_AREA: 'text-area',
};

const TEXT_TITLE = 'RSS Virtual Keyboard';

let title = null;
let textArea = null;
let keyboard = null;

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

  app.append(title, textArea, keyboard.createKeyboard());
  document.addEventListener('keydown', keyboard.pressDownHandler.bind(keyboard));
  document.addEventListener('keyup', keyboard.pressUpHandler.bind(keyboard));

  return app;
}
