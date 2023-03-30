import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerImages = document.querySelector('.gallery');
const callFunctionGallery = createImagesCards(galleryItems);

containerImages.insertAdjacentHTML('beforeend', callFunctionGallery);

function createImagesCards(arrayImages) {
  const elementOfArray = arrayImages
    .map(({ preview, original, description, id }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" data-slb-active>
    <img
      class="gallery__image"
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
}
