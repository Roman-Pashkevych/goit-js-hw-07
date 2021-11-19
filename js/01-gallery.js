import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>`;
        })
        .join('');
}

function onGalleryContainerClick(event) {
    const isGalleryImage = event.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }
    console.log(event.target.dataset.source);
}
