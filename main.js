var canvas = new fabric.Canvas('myCanvas');



playerX = 10;

playerY = 10;



blockImageWidth = 30;

blockImageHeight = 30;



// Armazenando os objetos nas variáveis

var playerObject = "";

var blockImageObject = "";



//Enviando imagens para a canvas

// Function(Img) é a função que fará o upload do player.png na tela.



function playerUpdate() {

    fabric.Image.fromURL("player.png", function (Img) {

        playerObject = Img;



        playerObject.scaleToWidth(150);

        playerObject.scaleToHeight(140);



        //Lembre que set significa definir ou mudar!



        playerObject.set({

            top: playerY,

            left: playerX

        });

        canvas.add(playerObject);



    });

}
// a função "newImage" pode fazer o upload da imagem usando keypress

// lembra que get pega uma informação?!



function newImage(getImage) {

    fabric.Image.fromURL(getImage, function (Img) {

        blockImageObject = Img;



        blockImageObject.scaleToWidth(blockImageWidth);

        blockImageObject.scaleToHeight(blockImageHeight);

        blockImageObject.set({

            top: playerY,

            left: playerX

        });

        canvas.add(blockImageObject);



    });



}

window.addEventListener("keydown", myKeyDown);



function myKeyDown(e) {

    keyPressed = e.keyCode;

    console.log(keyPressed);

    // AUMENTAR tamanho do bloco

    if (e.shiftKey == true && keyPressed == '80') {

        console.log("shift e p pressionadas juntas");

        blockImageWidth = blockImageWidth + 10;

        blockImageHeight = blockImageHeight + 10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;

        document.getElementById("currentHeight").innerHTML = blockImageHeight;

    }

    // DIMINUIR tamanho do bloco

    if (e.shiftKey && keyPressed == '77') {

        console.log("shift e m pressionadas juntas");

        blockImageWidth = blockImageWidth - 10;

        blockImageHeight = blockImageHeight - 10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;

        document.getElementById("currentHeight").innerHTML = blockImageHeight;

    }

    // MOVIMENTO DO JOGADOR

    if (keyPressed == '38') {

        up();

        console.log("cima");

    }

    if (keyPressed == '40') {

        down();

        console.log("baixo");

    }

// MOVIMENTO DO JOGADOR

if (keyPressed == '37') {

    left();

    console.log("esquerda");

}

if (keyPressed == '39') {

    right();

    console.log("direita");

}

// ADICIONANDO OS BLOCOS DE CONSTRUÇÃO

if (keyPressed == '87') {

    newImage('wall.jpg');

    console.log("w");

}

if (keyPressed == '71') {

    newImage('ground.png');

    console.log("g");

}


if (keyPressed == '86') {

    newImage('light_green.png');

    console.log("l");

}

if (keyPressed == '84') {

    newImage('trunk.jpg');

    console.log("t");
}


if (keyPressed == '82') {

    newImage('roof.jpg');

    console.log("r");

}

if (keyPressed == '89') {

    newImage('yellow_wall.png');

    console.log("y");

}


if (keyPressed == '85') {

    newImage('unique.png');

    console.log("u");

}

if (keyPressed == '68') {

    newImage('dark_green.png');

    console.log("d");

}

if (keyPressed == '67') {

    newImage('cloud.jpg');

    console.log("c");

}
}

// CODIGO PARA MOVER O PERSONAGEM PARA AS DIREÇÕES



function up() {

    if (playerY >= 0) {

        playerY = playerY - blockImageHeight;

        console.log("Altura da imagem do bloco = " + blockImageHeight);

        console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = " + playerY);

        canvas.remove(playerObject);

        playerUpdate();

    }

}



// COMPLETE



function down() {
    if (playerY <= 500) {

        playerY = playerY + blockImageHeight;

        console.log("Altura da imagem do bloco = " + blockImageHeight);

        console.log("Quando a tecla direcional baixo for pressionada, X =  " + playerX + " , Y = " + playerY);

        canvas.remove(playerObject);

        playerUpdate();

    }

}



function left() {

    if (playerX > 0) {

        playerX = playerX - blockImageWidth;

        console.log("Altura da imagem do bloco = " + blockImageWidth);

        console.log("Quando a tecla direcional esquerda for pressionada, X =  " + playerX + " , Y = " + playerY);

        canvas.remove(playerObject);

        playerUpdate();
    }

}



function right() {
    if (playerX <= 850) {

        playerX = playerX + blockImageWidth;

        console.log("Altura da imagem do bloco = " + blockImageWidth);

        console.log("Quando a tecla direcional direita for pressionada, X =  " + playerX + " , Y = " + playerY);

        canvas.remove(playerObject);

        playerUpdate();
    }


}


