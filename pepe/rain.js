var drops = [];
let img;

function preload() {
    img = loadImage('https://avatanplus.com/files/resources/mid/5817749043a6e1581b9f5395.png');
}

function setup() {
    createCanvas(1280, 720);
    image(img,0,0);
    for (var i = 0; i < 1000; i++) {
        drops[i] = new Drop();
    }
}

function draw(image, repetition) {
    background(112, 128, 144);

    background(img);
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
    }
}