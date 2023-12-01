function yes(n) {
    let canvas = document.getElementById(n);
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
    let canvas = document.getElementById(n);
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



function exclude(type){
   
    console.log(type);
    if(type == "blackhair"){
        no(1); no(4); no(16); no(19); no(24);
    }
    else if(type == "oranghair"){
        no(2); no(6); no(8); no(11); no(13);
    }
    else if(type == "blondhair"){
        no(3); no(7); no(9); no(10); no(14);
    }
    else if(type == "whitehair"){
        no(12); no(17); no(18); no(22); no(23);
    }
    else if(type == "brownhair"){
        no(5); no(15); no(20); no(21);
    }
    else if(type == "wemen"){
        no(3); no(4); no(8); no(15); no(23);
    }
    else if(type == "hat"){
        no(5); no(8); no(10); no(12); no(15);
    }
    else if(type == "glasses"){
        no(8); no(14); no(17); no(22); no(24);
    }
    else if(type == "blueeye"){
        no(2); no(3); no(18); no(21); no(24);
    }
    else if(type == "flushing"){
        no(3); no(6); no(19); no(21); no(23);
    }
    else if(type == "mustache"){
        no(1); no(2); no(7); no(16); no(20);
    }
    else if(type == "beard"){
        no(6); no(9); no(19); no(20);
    }
    else if(type == "bald"){
        no(6); no(13); no(20); no(22); no(24);
    }

}

function include(type){
   
    console.log(type);
    if(type == "blackhair"){
        yes(1); yes(4); yes(16); yes(19); yes(24);
    }
    else if(type == "oranghair"){
        yes(2); yes(6); yes(8); yes(11); yes(13);
    }
    else if(type == "blondhair"){
        yes(3); yes(7); yes(9); yes(10); yes(14);
    }
    else if(type == "whitehair"){
        yes(12); yes(17); yes(18); yes(22); yes(23);
    }
    else if(type == "brownhair"){
        yes(5); yes(15); yes(20); yes(21);
    }
    else if(type == "wemen"){
        yes(3); yes(4); yes(8); yes(15); yes(23);
    }
    else if(type == "hat"){
        yes(5); yes(8); yes(10); yes(12); yes(15);
    }
    else if(type == "glasses"){
        yes(8); yes(14); yes(17); yes(22); yes(24);
    }
    else if(type == "blueeye"){
        yes(2); yes(3); yes(18); yes(21); yes(24);
    }
    else if(type == "flushing"){
        yes(3); yes(6); yes(19); yes(21); yes(23);
    }
    else if(type == "mustache"){
        yes(1); yes(2); yes(7); yes(16); yes(20);
    }
    else if(type == "beard"){
        yes(6); yes(9); yes(19); yes(20);
    }
    else if(type == "bald"){
        yes(6); yes(13); yes(20); yes(22); yes(24);
    }

}


let Banswernum;
let Oanswernum;
let Banswer;
let Oanswer;
let chara = ["ooo","alex","Alfred","Anita","Anne","Bernard","bill","charles","claire","david","eric","frans","george","herman","joe","maria","max","paul","peter","philip","richard","robert","sam","susan","tom"];

function seeding(){
    let seed = document.getElementById("in").value;

    Banswernum = parseInt((seed*125790) % 24 + 1);
    Oanswernum = parseInt((seed*12341234) % 24 + 1);
    console.log(Banswernum + ", " + Oanswernum);

    Banswer = chara[Banswernum];
    Oanswer = chara[Oanswernum];

    console.log(Banswer + ", " + Oanswer);

    let teamNodeList = document.getElementsByName('team');
    
    teamNodeList.forEach((node) => {if(node.checked)  {team = node.value;}})

    if(team == 'b'){
        alert("당신의 캐릭터 : " + Banswer);
    }
    if(team == 'o'){
        alert("당신의 캐릭터 : " + Oanswer);
    }

}

function answer(){
    let ans = document.getElementById("ans").value;

    let teamNodeList = document.getElementsByName('team');
    
    teamNodeList.forEach((node) => {if(node.checked)  {team = node.value;}})

    if(team == 'b'){
        if(ans.toLowerCase() == Oanswer){
            alert("정답입니다!");
        }
        else alert("오답입니다!");
    }
    if(team == 'o'){
        if(ans.toLowerCase() == Banswer){
            alert("정답입니다!");
        }
        else alert("오답입니다!");
    }
}



for(let i = 1;i<=24;i++){
    yes(i);
}
