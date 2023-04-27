import './style/style.css';
import createApp from './modules/create-app';

window.onload = () => {
  document.body.prepend(createApp());
};
