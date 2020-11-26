'use strict';

let money = +prompt('Ваш месячный доход?', 150000);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
let amount1 = +prompt('Во сколько это обойдется', 100000);

let expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
let amount2 = +prompt('Во сколько это обойдется', 20000);

let mission = 500000;
let period = 11;


let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(addExpenses);

let getExpensesMonth = function(){
    console.log(amount2 + amount1);
};

let getAccumulatedMonth = function(){
    return (money - (amount1 + amount2));
};
let accumulatedMonth = getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;

let getTargetMounthn = function(mission, accumulatedMonth){
    return (mission / accumulatedMonth);

};
let res = getTargetMounthn(500000, 30000);


console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'руб');
console.log(addExpenses.lenght);
console.log(addExpenses.toLocaleLowerCase().split());


console.log('Бюджет на месяц:',+accumulatedMonth);
console.log('Цель будет достигнута за:',Math.ceil(res), 'месяцев');
console.log('Бюджет на день:',Math.floor(budgetDay));


let getStatusIncome = function(){
    if (budgetDay >= 1200){
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200){
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay >= 0){
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());
