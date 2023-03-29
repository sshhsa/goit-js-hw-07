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
  console.log(currentItem);
}
