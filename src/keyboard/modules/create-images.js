import { classesCSS } from '../../data/keys-data';

export default function createImages() {
  const TEXT_ALT_IMAGE_CAT = 'bongo cat';
  const TEXT_IMAGE = 'клац';

  let imageContainer = null;
  let leftImage = null;
  let rightImage = null;
  let imageCat = null;
  let imageCat2 = null;
  let leftSpanTextTop = null;
  let leftSpanTextBottom = null;
  let rightSpanTextTop = null;
  let rightSpanTextBottom = null;

  imageContainer = document.createElement('div');
  imageContainer.classList.add(classesCSS.IMAGE);

  leftImage = document.createElement('div');
  imageCat = document.createElement('img');
  imageCat.classList.add(classesCSS.IMAGE_CAT, classesCSS.IMAGE_CAT_LEFT);
  imageCat.src = '../assets/images/output-onlinegiftools.gif';
  imageCat.alt = TEXT_ALT_IMAGE_CAT;
  leftSpanTextTop = document.createElement('span');
  leftSpanTextTop.classList.add(classesCSS.IMAGE_SPAN_TEXT_TOP, classesCSS.IMAGE_SPAN_TEXT_LEFT);
  leftSpanTextTop.textContent = TEXT_IMAGE;
  leftSpanTextBottom = document.createElement('span');
  leftSpanTextBottom
    .classList.add(classesCSS.IMAGE_SPAN_TEXT_BOTTOM, classesCSS.IMAGE_SPAN_TEXT_LEFT);
  leftSpanTextBottom.textContent = TEXT_IMAGE;
  leftImage.append(imageCat, leftSpanTextTop, leftSpanTextBottom);

  rightImage = document.createElement('div');
  imageCat2 = document.createElement('img');
  imageCat2.classList.add(classesCSS.IMAGE_CAT, classesCSS.IMAGE_CAT_RIGHT);
  imageCat2.src = '../assets/images/output-onlinegiftools.gif';
  imageCat2.alt = TEXT_ALT_IMAGE_CAT;
  rightSpanTextTop = document.createElement('span');
  rightSpanTextTop.classList.add(classesCSS.IMAGE_SPAN_TEXT_TOP, classesCSS.IMAGE_SPAN_TEXT_RIGHT);
  rightSpanTextTop.textContent = TEXT_IMAGE;
  rightSpanTextBottom = document.createElement('span');
  rightSpanTextBottom
    .classList.add(classesCSS.IMAGE_SPAN_TEXT_BOTTOM, classesCSS.IMAGE_SPAN_TEXT_RIGHT);
  rightSpanTextBottom.textContent = TEXT_IMAGE;
  rightImage.append(imageCat2, rightSpanTextTop, rightSpanTextBottom);

  imageContainer.append(leftImage, rightImage);

  return imageContainer;
}
