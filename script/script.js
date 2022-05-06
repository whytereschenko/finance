const images = ["src/books/books1.jpg", "src/books/books2.jpg", "src/books/books3.jpg", "src/books/books4.jpg", "src/books/books5.jpg"];
var x = 0;
var y = 1;

document.getElementById('firstNewsImage').src=images[x];
document.getElementById('secondNewsImage').src=images[y];

const firstNewsImage = document.getElementById('firstNewsImage');
const secondNewsImage = document.getElementById('secondNewsImage');

const carouselButtonBack = document.getElementById('carouselButtonBack');
const carouselButtonNext = document.getElementById('carouselButtonNext');

function goNext() {
    ++x;
    ++y;
    if (x == images.length) {
        x = 0;
    }
    if (y == images.length) {
        y = 0;
    }
    document.getElementById('firstNewsImage').src=images[x];
    document.getElementById('secondNewsImage').src=images[y];
}
function goBack() {
    --x;
    --y;
    if (x == -1) {
        x = images.length - 1;
    }
    if (y == -1) {
        y = images.length - 1;
    }
    document.getElementById('firstNewsImage').src=images[x];
    document.getElementById('secondNewsImage').src=images[y];
}

setInterval(goNext, 5000);

carouselButtonBack.addEventListener("click", goBack);
carouselButtonNext.addEventListener("click", goNext);