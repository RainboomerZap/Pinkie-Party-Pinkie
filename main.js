function goBack() {
    window.location = "index.html";
  }

var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("pinkie.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '49') {
        new_image('flutterdash_baloon.png');
        console.log("1");
    }
    if (keyPressed == '50') {
        new_image('spike_baloon.png');
        console.log("2");
    }

    if (keyPressed == '51') {
        new_image('rarijack_baloon.png');
        console.log("3");
    }

    if (keyPressed == '52') {
        new_image('twipie_baloon.png');
        console.log("4");
    }

    if (keyPressed == '84' || keyPressed == '116') {
        new_image('tabel.png');
        console.log("t");
    }

    if (keyPressed == '70' || keyPressed == '102') {
        new_image('food.png');
        console.log("f");
    }

    if (keyPressed == '67' || keyPressed == '99') {
        new_image('confetti.png');
        console.log("c");
    }

    if (keyPressed == '75' || keyPressed == '107') {
        new_image('cake.png');
        console.log("k");
    }
}

function up() {

    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block image height= " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {

    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("Block image height= " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {

    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("Block image width= " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {

    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("Block image width= " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
} 