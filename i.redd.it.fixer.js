const body = document.querySelector('body');
const img = document.querySelector('img');
const html = document.documentElement;

let zoomedIn = true;

// Remove all scripts.
const scripts = document.querySelectorAll('script');

scripts.forEach((script) => {
    script.parentElement.remove(script);
});

// Reset body.
body.innerHTML = '';

body.removeAttribute('class');
body.removeAttribute('style');

body.style.backgroundColor = 'black';
body.style.overflow = 'hidden';
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';
body.style.textAlign = 'center';

// Setup image.
img.removeAttribute('class');
img.removeAttribute('style');
img.removeAttribute('alt');

img.style.height = html.clientHeight + 'px';
img.style.margin = '0';
img.style.padding = '0';

img.onclick = () => {
    if (zoomedIn) {
        body.style.overflow = 'auto';
        img.style.height = 'auto';
    }
    else {
        body.style.overflow = 'hidden';
        img.style.height = html.clientHeight + 'px';
    }

    zoomedIn = !zoomedIn;
};

// Add image back.
body.appendChild(img);