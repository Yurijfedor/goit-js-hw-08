// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach(({ preview, original, description }) => {
  const markupGallery = `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
  galleryContainer.insertAdjacentHTML('beforeend', markupGallery);
});

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
