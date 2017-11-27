
function rouletteStart(){
    boxList[lastWinBox].src = "images/white_box.png";
    isTurn = true;
    rouletteIter(Math.random() * 1000, lastWinBox);
}

function rouletteIter(time, index){
    if(index >= numOfBox) {
        boxList[numOfBox-1].src = "images/white_box.png";
        index = 0;
    }
    if(index != 0) boxList[index-1].src = "images/white_box.png";
    if(time >= 0) {
        boxList[index].src = "images/black_box.png";
        setTimeout(rouletteIter, time - 15, time - 15, ++index);       
    } else {
        boxList[index].src = "images/black_open_box.png";
        rouletteFinish(index);
    } 
}

function rouletteFinish(winIndex){
    lastWinBox = winIndex;
    var winVar = generateResultByIndex(winIndex);
    if (winVar < 0.05) {
        alert("Вам выпал ножик!!");
    } else if (winVar < 0.1) {
        alert("Вам выпали перчатки");
    } else if (winVar < 0.2) {  
        alert("Вам выпало AWP");
    } else if (winVar < 0.4) {
        alert("Вам выпал AK-47");
    } else {
        alert("Вам выпал пистолет");
    }
    isTurn = false;
}

/**
 * Магия выбора выигрыша по индексу
 * @param index 
 */
function generateResultByIndex(index){
    var rand = Math.random();
    if(rand > 0.5) rand -= 0.5;
    if(index > 5) index -= 5;
    rand = Math.abs(rand - (index / 10));
    return rand;
}
    