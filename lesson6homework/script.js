'use strict';

let botNum = Math.floor(Math.random() * 100);


let score = function(){

    console.log(botNum);
    let num = prompt('Угадайте число от 1 до 100');

    let result = function(){

    while (isNaN(num) || num.trim() === '') {
        num = prompt('Введите число');
    }
    
        if (num === botNum) {
        alert(Number('Поздравляю, Вы угадали'));
        result();
        } else if (num > botNum) {
        prompt(Number('Загаданное число меньше'));
        result();
        } else if (num < botNum) {
        prompt(Number('Загаданное число больше'));
        result();
       } else if (num === null) {
        alert(Number('Игра окончено'));
        result();
      }
      return result;
    };
    result();
   
};

score();