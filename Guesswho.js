let genshinmod = 0;


function yes(n) { //포함
    let canvas = document.getElementById(n);
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.src = "./guesswho.jpg";

    image.onload = function() { //번호에 따라 사진을 잘라서 캔버스에 출력하는 코드
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

    canvas.setAttribute("onclick", "no(" + n + ")" ); //다시 제외할 수 있도록 onclick의 내용 변경
}



function no(n) {
    let canvas = document.getElementById(n);
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.src = "./guesswho_no.jpg";

    image.onload = function() { //번호에 따라 사진을 잘라서 캔버스에 출력하는 코드
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

    canvas.setAttribute("onclick", "yes(" + n + ")" ); //다시 포함할 수 있도록 onclick의 내용 변경
}



function exclude(type){
   
    console.log(type);
    if(type == "blackhair"){ //인자로 받아온 특징(type)에 따라 해당하는 번호들을 제외함
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
    else if(type == "all"){ //1~24번을 반복문을 통해 전부 제외함
        for(let i = 1;i<=24;i++){
            no(i);
        }
    }

}

function include(type){
   
    console.log(type);
    if(type == "blackhair"){ //인자로 받아온 특징(type)에 따라 해당하는 번호들을 포함함
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
    else if(type == "all"){ //1~24번을 반복문을 통해 전부 포함함
        for(let i = 1;i<=24;i++){
            yes(i);
        }
    }

}


let Banswernum;
let Oanswernum;
let Banswer;
let Oanswer;
let chara = ["ooo","alex","Alfred","Anita","Anne","Bernard","bill","charles","claire","david","eric","frans","george","herman","joe","maria","max","paul","peter","philip","richard","robert","sam","susan","tom"];
// ^ 캐릭터들의 이름을 하나의 배열 안에 저장
let genshinseed = 0;

function seeding(){
    let seed = document.getElementById("in").value; //입력한 시드 가져오기

    if(seed == "genshin"){
        genshinseed = 1;
        return;
    }
    Banswernum = parseInt((seed*125790) % 24 + 1);    //시드에 큰 값을 곱하고 24로 나눈 나머지에 1을 더하여 1~24의 난수 생성을 통해 정답이 될 캐릭터 결정
    Oanswernum = parseInt((seed*12341234) % 24 + 1);
    console.log(Banswernum + ", " + Oanswernum); //선택된 캐릭터의 번호를 콘솔에 출력 (디버깅용)

    Banswer = chara[Banswernum]; //선택된 캐릭터의 번호를 통해 그 캐릭터의 이름을 변수에 저장
    Oanswer = chara[Oanswernum];

    console.log(Banswer + ", " + Oanswer); //선택된 캐릭터의 이름을 콘솔에 출력 (디버깅용)

    let teamNodeList = document.getElementsByName('team'); 
    
    teamNodeList.forEach((node) => {if(node.checked)  {team = node.value;}}) //노드를 이동 시키며 어떤 팀을 선택했는지 확인

    if(team == 'b'){
        alert("당신의 캐릭터 : " + Banswer); //선택한 팀에 따라 자신의 캐릭터 (상대방이 맞춰야 할 캐릭터)를 알려줌
    }
    if(team == 'o'){
        alert("당신의 캐릭터 : " + Oanswer);
    }

}

function answer(){
    let ans = document.getElementById("ans").value; //입력한 정답 가져 오기

    let teamNodeList = document.getElementsByName('team');
    
    teamNodeList.forEach((node) => {if(node.checked)  {team = node.value;}})

    
    if(team == 'b'){
        if(ans.toLowerCase() == Oanswer){ //팀에 따라 정답 확인 후 alert
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
    if(genshinseed == 1){
        if(ans == "impact"){
            genshinmod = 1;
            alert("Genshin Impact mod on!");
            location.href = "genshinGuessWho.html"; //시드를 genshin으로 하고 답을 impact로 했을 때 다른 html파일을 엶
            return;
        }
    }
    
}



for(let i = 1;i<=24;i++){
    yes(i); //시작할 때 모든 캐릭터를 포함된 상태로 로드
}
