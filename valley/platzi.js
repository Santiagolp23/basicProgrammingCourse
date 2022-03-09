var vp = document.getElementById("platziValley");
var paper = vp.getContext("2d");
var quantity;
var x = 250;
var y = 250;

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

var tile = {
    url: "tile.png",
    loadDone: false
};

var cow = {
    url: "cow.png",
    loadDone: false
};

var pig = {
    url: "pig.png",
    loadDone: false
};

var chicken = {
    url: "chicken.png",
    loadDone: false
};

document.addEventListener("keydown", drawKeyPress);

tile.image = new Image();
tile.image.src = tile.url;
tile.image.addEventListener("load", loadTile);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);

function loadTile() {
    tile.loadDone = true;
    draw(tile.image, tile.loadDone, 0, 0);
}

draw(pig.image, pig.loadDone, x, y);

function loadCow() {
    quantity = random(1, 10);
    for(var t = 0; t<quantity; t++) {
        cow.loadDone = true;
        var x = random(0, (vp.width - cow.image.width) / 84);
        var y = random(0, (vp.height - cow.image.height) / 84);
        x = x * 80;
        y = y * 80;
        draw(cow.image, cow.loadDone, x, y);
    }
}

function loadPig() {
    quantity = random(1, 10);
    for(var t = 0; t<quantity; t++) {
        pig.loadDone = true;
        var x = random(0, (vp.width - pig.image.width) / 84);
        var y = random(0, (vp.height - pig.image.height) / 84);
        x = x * 80;
        y = y * 80;
        draw(pig.image, pig.loadDone, x, y);
    }
}

function loadChicken() {
    quantity = random(1, 10);
    for(var t = 0; t<quantity; t++) {
        chicken.loadDone = true;
        var x = random(0, (vp.width - chicken.image.width) / 84);
        var y = random(0, (vp.height - chicken.image.height) / 84);
        x = x * 80;
        y = y * 80;
        draw(chicken.image, chicken.loadDone, x, y);
    }
}

function drawKeyPress() {
    var movement = 40;
    var image = pig.image;
    var imageLoaded = pig.loadDone;
    switch(event.keyCode) {
        case keys.UP:
            y = y - movement;
            draw(image, imageLoaded, x, y);
            console.log(y);
            break;

        case keys.DOWN:
            y = y + movement;
            draw(image, imageLoaded, x, y);
            break;

        case keys.LEFT:
            x = x - movement;
            draw(image, imageLoaded, x, y);
            break;

        case keys.RIGHT:
            x = x + movement;
            draw(image, imageLoaded, x, y);
            break;
        }
}

function draw(imageToDraw, ifThis, x, y) {
    if(ifThis && tile.loadDone) {
        paper.drawImage(imageToDraw, x, y);
    }
}

function random(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}