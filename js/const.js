
var boxListElement = document.getElementById("boxList");
var buttonPlay = document.getElementById("buttonPlay");

/**
 * Число сундуков
 */
var numOfBox = 10;

/**
 * Коллекция сундуков
 */
var boxList = [];

/**
 * Последняя выйгрышная 
 */
var lastWinBox = 0;

/**
 * Определяет крутится ли сейчас рулетка
 */
var isTurn = false;
