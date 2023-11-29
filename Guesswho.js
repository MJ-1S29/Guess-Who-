function yes(n) {
    let canvas = document.getElementById("canvas" + n);
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.src = "./guesswho.jpg";

    image.onload = function() {
        if(n<=8){
            ctx.drawImage(image, (n - 1 - 0 * 8) * 179 , 0 * 301, 179, 301, 0, 0, 179, 301);
        }
        else if(n<=16){
            ctx.drawImage(image, (n - 1 - 1 * 8) * 179 , 1 * 301, 179, 301, 0, 0, 179, 301);
        }
        else if(n<=24){
            ctx.drawImage(image, (n - 1 - 2 * 8) * 179 , 2 * 301, 179, 301, 0, 0, 179, 301);
        }
    }

    canvas.setAttribute("onclick", "no(" + n + ")" );
}

function no(n) {
    let canvas = document.getElementById("canvas" + n);
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.src = "./guesswho_no.jpg";

    image.onload = function() {
        if(n<=8){
            ctx.drawImage(image, (n - 1 - 0 * 8) * 179 , 0 * 301, 179, 301, 0, 0, 179, 301);
        }
        else if(n<=16){
            ctx.drawImage(image, (n - 1 - 1 * 8) * 179 , 1 * 301, 179, 301, 0, 0, 179, 301);
        }
        else if(n<=24){
            ctx.drawImage(image, (n - 1 - 2 * 8) * 179 , 2 * 301, 179, 301, 0, 0, 179, 301);
        }
    }

    canvas.setAttribute("onclick", "yes(" + n + ")" );
}

for(let i = 1;i<=24;i++){
    yes(i);
}