'use strict';

let botNum = Math.floor((Math.random() * 100) + 1);
    botNum = prompt('Угадайте число от 1 до 100');
    console.log(botNum);


let score = function(){
    
    let num;
    
    if (num === botNum) {
        prompt('Поздравляю, Вы угадали');
    } else if (num > botNum) {
        prompt('Загаданное число меньше');
    } else if (num < botNum) {
        prompt('Загаданное число больше');
    } else if (isNaN(num) || num.trim() === '') {
        prompt('Введите число');
    } else {
        prompt('Игра окончена');
    }
};

score();