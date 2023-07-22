"use strict";

const body = document.querySelector('body');
const img = document.querySelector('img');
const clientHeight = document.documentElement.clientHeight + 'px';
const image = new Image();

image.src = img.src;

const imageHeight = image.height;
const imageWidth = image.width;

body.removeAttribute('class');
body.removeAttribute('style');

body.style.backgroundColor = 'black';
body.style.margin = '0';

img.removeAttribute('class');
img.removeAttribute('style');
img.removeAttribute('alt');

img.style.cursor = 'zoom-in';
img.style.display = 'block';
img.style.height = clientHeight;
img.style.inset = '0';
img.style.margin = 'auto';
img.style.position = 'absolute';
img.style.textAlign = 'center';

body.innerHTML = '';
body.appendChild(img);

let zoomedIn = true;

img.addEventListener('click', (e) => {
    if (zoomedIn) {
        let scroll = false;
        let nx = 0;
        let ny = 0;

        if (imageHeight > img.height || imageWidth > img.width) {
            scroll = true;

            const dx = imageWidth / img.width;
            const dy = imageHeight / img.height;

            nx = (e.layerX * dx) / 2;
            ny = (e.layerY * dy) / 2;
        }

        img.style.cursor = 'zoom-out';
        img.style.height = 'auto';
        img.style.marginTop = '0';

        if (scroll) {
            window.scrollTo(nx, ny);
        }
    }
    else {
        img.style.cursor = 'zoom-in';
        img.style.height = clientHeight;
        img.style.marginTop = 'auto';
    }

    zoomedIn = !zoomedIn;
});