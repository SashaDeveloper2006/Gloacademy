'use strict';

let money = +prompt('Ваш месячный доход?', 150000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
let amount1 = +prompt('Во сколько это обойдется', 100000);

let expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
let amount2 = +prompt('Во сколько это обойдется', 20000);

let budgetMounth = (money - (amount1 + amount2));
let mission = 500000;
let budgetDay = budgetMounth / 30;
let period = 11;
let massiv = 'Квартира, метро, еда';

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);
console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'руб');
console.log(massiv.lenght);
console.log(massiv.toLocaleLowerCase().split());


console.log('Бюджет на месяц:' + budgetMounth);
console.log('Цель будет достигнута за:',Math.ceil(mission / budgetMounth), 'месяцев');
console.log('Бюджет на день:',Math.floor(budgetDay));

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}


