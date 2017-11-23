/**
 * * Создаем сундуки
*/    
(function(){
    for(var i = 0; i < 10; i++){
        var box = document.createElement("img");
        box.setAttribute("class", "box");
        box.src = "images/white_box.png";

        boxListElement.appendChild(box);
        boxList.push(box);
    }
}());