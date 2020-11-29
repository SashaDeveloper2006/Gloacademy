'use strict';



let score = function(){
    let botNum = Math.floor(Math.random() * 100);

    console.log(botNum);

    let result = function(number){
        let num = prompt('Угадайте число от 1 до 100');

    while (isNaN(num) || num.trim() === '') {
        num = prompt('Введите число');
    }
    
        if (num === botNum) {
        alert(Number('Поздравляю, Вы угадали'));
        } else if (num > botNum) {
        prompt(Number('Загаданное число меньше'));
        return result;
        } else if (num < botNum) {
        prompt(Number('Загаданное число больше'));
        return result;
       } else if (num === null) {
        alert(Number('Игра окончена'));
      }
      return number;
    };
    result();
   
};

score();