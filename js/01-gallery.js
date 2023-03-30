import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerImages = document.querySelector('.gallery');
const callFunctionGallery = createImagesCards(galleryItems);

containerImages.insertAdjacentHTML('beforeend', callFunctionGallery);

function createImagesCards(arrayImages) {
  const elementOfArray = arrayImages
    .map(({ preview, original, description, id }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image js_target"
      id="${id}"
      src="${preview}"
      data-source="${original}"
      data-img-id="${id}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
  return elementOfArray;
}

containerImages.addEventListener('click', onContainerImagesClick);

function onContainerImagesClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('js_target')) {
    return;
  }

  const imgId =
    e.target.dataset.imgId ?? e.target.closest('.js_target').dataset.imgId;
  const currentItem = galleryItems.find(({ id }) => id === Number(imgId));

  const instance = basicLightbox.create(`
    <img
      class="gallery__image js_target"
      id="${currentItem.id}"
      src="${currentItem.preview}"
      max-width="100%"
      max-height="100%"
      data-source="${currentItem.original}"
      data-img-id="${currentItem.id}"
      alt="${currentItem.description}"
    />`);

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
