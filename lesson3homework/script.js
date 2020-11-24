'use strict';

let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
let amount1 = prompt('Во сколько это обойдется', '100000руб');

let expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
let amount2 = prompt('Во сколько это обойдется', '20000руб');

let budgetMounth = 120000 / 30;
let mission = 100000 / 4000;
let budgetDay = 4000 / 30;

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);
console.log('Бюджет на месяц:',budgetMounth);
console.log('Цель будет достигнута за:',Math.ceil(mission), 'месяцев');
console.log('Бюджет на день:',Math.floor(budgetDay));

if (budgetDay > 1200 || budgetDay === 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 || budgetDay < 1200 || budgetDay === 600){
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 || budgetDay > 0 || budgetDay === 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}


