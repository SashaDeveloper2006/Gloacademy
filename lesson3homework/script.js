'use strict';

let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
let amount1 = prompt('Во сколько это обойдется', '100000');

let expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
let amount2 = prompt('Во сколько это обойдется', '20000');

let budgetMounth = 150000 - (amount1 + amount2);
let mission = 500000 / budgetMounth;
let budgetDay = budgetMounth / 30;
let period = 11;
let addExpenses1 = 'Квартира, метро, еда';

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);
console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'руб');
console.log(addExpenses1.lenght);
console.log(addExpenses1.toLocaleLowerCase().split());


console.log('Бюджет на месяц:',+budgetMounth);
console.log('Цель будет достигнута за:',Math.ceil(mission), 'месяцев');
console.log('Бюджет на день:',Math.floor(budgetDay));

if (budgetDay > 1200 && budgetDay === 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200 || budgetDay === 600){
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0 || budgetDay === 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}


