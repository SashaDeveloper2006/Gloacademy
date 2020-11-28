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
        prompt(Number('Поздравляю, Вы угадали'));
        } else if (num > botNum) {
        prompt(Number('Загаданное число меньше'));
        } else if (num < botNum) {
        prompt(Number('Загаданное число больше'));
       } else if (num === null) {
        prompt(Number('Игра окончена'));
      }
      return result;
    };
    result();
   
};

score();