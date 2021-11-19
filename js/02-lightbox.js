import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
/* galleryContainer.addEventListener('click', onGalleryContainerClick); */

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
                     <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
        })
        .join('');
}

/* function onGalleryContainerClick(event) {
    const isGalleryImage = event.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
    console.log(event.target);
}
 */

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});

console.log(galleryItems);
