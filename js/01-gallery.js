import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `;
    })
    .join('');
}
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', handleGalleryClick);
function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const modalImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${modalImg}" alt="" width="800" height="600">`
  );

  if (instance.show()) {
    window.addEventListener('keydown', onPressEscape);

    function onPressEscape(event) {
      if (event.keyCode === 27) {
        instance.close();
        console.log(event);
        window.removeEventListener('keydown', onPressEscape);
      }
    }
  }
}
