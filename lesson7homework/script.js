'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
 start = function() {
    do {
        money = prompt('Ваш месячный доход?'); 
    } while (!isNumber(money));

};
start();
let expenses1, expenses2;

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 11,

    asking: function(){
        
        let sum = 0, amount;

       

          for (let i = 0; i < 2; i++){
            if (i === 0) {
                 appData.expenses[prompt('Введите обязательную статью расходов', 'Оплата жилья')] = +amount;
                 
            } else if (i === 1) {
                 appData.expenses[prompt('Введите обязательную статью расходов', 'Еда')] = +amount;
            }
            do {
                amount = prompt('Во сколько это обойдется', 120000); 
             } while (!isNumber(amount));
               sum += +amount;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            return sum;
        
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        
       
      },

       getBudget: function(){
        appData.budgetMonth = (appData.money - appData.getExpensesMonth);
        appData.budgetDay = appData.accumulatedMonth / 30;
    },

     getTargetMounthn: function(){

        return (appData.mission / appData.accumulatedMonth); 
    
    },

     getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },

    

};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMounthn();
appData.getStatusIncome();
for (let key in appData){
    console.log('Наша программа включает в себя данные:');
}


let expensesAmount = appData.getExpensesMonth();

let accumulatedMonth = appData.getBudget();



appData.getTargetMounthn(appData.mission, accumulatedMonth);


console.log('Период равен', appData.period, 'месяцев.', 'Цель заработать', appData.mission, 'руб');
console.log(appData.addExpenses.lenght);


console.log('Бюджет на месяц:',+accumulatedMonth);
if (appData.getTargetMounthn() > 0) {
    console.log('Цель будет достигнута за:',Math.ceil(appData.getTargetMounthn), 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день:',Math.floor(appData.budgetDay));


console.log(appData.getStatusIncome());
