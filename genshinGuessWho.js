let genshinmod = 0;


function yes(n) {
    let canvas = document.getElementById(n);
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.src = "./genshin.jpg";

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
    image.src = "./genshin_no.jpg";

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
    if(type == "mondstadt"){
        no(3); no(13); no(18); no(19); no(24);
    }
    else if(type == "liyue"){
        no(1); no(2); no(6); no(8); no(11); no(20); no(23);
    }
    else if(type == "inazuma"){
        no(7); no(9); no(24);
    }
    else if(type == "sumeru"){
        no(5); no(10); no(12); no(14); no(15); no(16); 
    }
    else if(type == "fontaine"){
        no(4); no(17);
    }
    else if(type == "snezhunaya"){
        no(22);
    }
    else if(type == "sword"){
        no(4); no(8); no(10); no(21); no(24);
    }
    else if(type == "claymore"){
        no(3); no(11); no(13); no(15); no(20);
    }
    else if(type == "polearm"){
        no(1); no(2); no(7); no(16); no(23);
    }
    else if(type == "catalyst"){
        no(12); no(14); no(17); no(19);
    }
    else if(type == "bow"){
        no(5); no(6); no(9); no(18); no(22);
    }
    else if(type == "all"){
        for(let i = 1;i<=24;i++){
            no(i);
        }
    }

}

function include(type){
   
    console.log(type);
    if(type == "mondstadt"){
        yes(3); yes(13); yes(18); yes(19); yes(24);
    }
    else if(type == "liyue"){
        yes(1); yes(2); yes(6); yes(8); yes(11); yes(20); yes(23);
    }
    else if(type == "inazuma"){
        yes(7); yes(9); yes(24);
    }
    else if(type == "sumeru"){
        yes(5); yes(10); yes(12); yes(14); yes(15); yes(16); 
    }
    else if(type == "fontaine"){
        yes(4); yes(17);
    }
    else if(type == "snezhunaya"){
        yes(22);
    }
    else if(type == "sword"){
        yes(4); yes(8); yes(10); yes(21); yes(24);
    }
    else if(type == "claymore"){
        yes(3); yes(11); yes(13); yes(15); yes(20);
    }
    else if(type == "polearm"){
        yes(1); yes(2); yes(7); yes(16); yes(23);
    }
    else if(type == "catalyst"){
        yes(12); yes(14); yes(17); yes(19);
    }
    else if(type == "bow"){
        yes(5); yes(6); yes(9); yes(18); yes(22);
    }
    else if(type == "all"){
        for(let i = 1;i<=24;i++){
            yes(i);
        }
    }

}


let Banswernum;
let Oanswernum;
let Banswer;
let Oanswer;
let chara = ["ooo","호두","소","노엘","푸리나","타이나리","야란","라이덴쇼군","치치","고로","닐루","북두","나히다","유라","방랑자","데히야","사이노","라이오슬리","벤티","클레","중운","여행자","타르탈리아","종려","키라라"];


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