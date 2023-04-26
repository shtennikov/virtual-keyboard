import createKeyboard from './create-keyboard';

const classesCSS = {
  APP_CONTAINER: 'wrapper',
  TITLE: 'title',
  TEXT_AREA: 'text-area',
};

const TEXT_TITLE = 'RSS Virtual Keyboard';

let title = null;
let textArea = null;
let keyboard = null;

export default function createLayout() {
  const layout = document.createElement('div');
  layout.classList.add(classesCSS.APP_CONTAINER);

  title = document.createElement('h1');
  title.classList.add(classesCSS.TITLE);
  title.textContent = TEXT_TITLE;

  textArea = document.createElement('textarea');
  textArea.classList.add(classesCSS.TEXT_AREA);

  keyboard = createKeyboard();

  layout.append(title, textArea, keyboard);

  return layout;
}
