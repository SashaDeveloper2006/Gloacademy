'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};



let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1, expenses2;
let amount1 = +prompt('Во сколько это обойдется', 100000),
amount2 = +prompt('Во сколько это обойдется', 20000);

let mission = 500000;
let period = 11;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?'); 
    } while (!isNumber(money));

};
start();



let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(deposit);
showTypeOf(addExpenses);

let getExpensesMonth = function(){
    let sum = 0, amount;
    for (let i = 0; i < 2; i++){
        sum += +prompt('Во сколько это обойдется');

        if (i === 0) {
             expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
        } else if (i === 1) {
             expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
        }
        do {
             amount = prompt('Во сколько это обойдется', 120000); 
        } while (!isNumber(money));
        sum += +amount;

    }
    return sum;
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function(){
    return (money - (amount1 + amount2));
};
let accumulatedMonth = getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;

let getTargetMounthn = function(mission, accumulatedMonth){

    return (mission / accumulatedMonth); 

};
getTargetMounthn(mission, accumulatedMonth);


console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'руб');
console.log(addExpenses.lenght);
console.log(addExpenses.toLocaleLowerCase().split());


console.log('Бюджет на месяц:',+accumulatedMonth);
if (getTargetMounthn() > 0) {
    console.log('Цель будет достигнута за:',Math.ceil(getTargetMounthn), 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}
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
