'use strict';


let score = function(){
    let botNum = Math.floor(Math.random() * 100);

    console.log(botNum);


    let result = function(){
        let num = prompt('Угадайте число от 1 до 100');

  
    
        if (Number(num === botNum)) {
        alert('Поздравляю, Вы угадали');
        result();
        } else if (num > botNum) {
        alert('Загаданное число меньше');
        result();
        } else if (num < botNum) {
        alert('Загаданное число больше');
        result();
       } else if (num === null) {
        alert(Number('Игра окончено'));
        result();
      } else if (isNaN(num) || num.trim() === '') {
          prompt('Введите число');

      }

    };
    result();
   
};

score();