'use strict';

let botNum = Math.floor(Math.random() * 100);


let score = function(){

    console.log(botNum);
    let num = prompt('Угадайте число от 1 до 100');

    while (isNaN(num) || num.trim() === '') {
        num = prompt('Введите число');
    }
    
        if (num === botNum) {
        prompt('Поздравляю, Вы угадали');
        } else if (num > botNum) {
        prompt('Загаданное число меньше');
        } else if (num < botNum) {
        prompt('Загаданное число больше');
       } else if (num === null) {
        prompt('Игра окончена');
      }
   
};

score();