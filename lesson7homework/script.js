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
    getExpensesMonth: function() {
        let sum = 0, amount;
        for (let key in this.expensesMonth){
            console.log(amount);
        }
        
    
            
            do {
                 amount = prompt('Во сколько это обойдется', 120000); 
            } while (!isNumber(amount));
            sum += +amount;
    
        return sum;
      },

      

       getAccumulatedMonth: function(){
        return (money - appData.getExpensesMonth);
    },

     getTargetMounthn: function(mission, accumulatedMonth){

        return (appData.mission / accumulatedMonth); 
    
    },

     getStatusIncome: function(){
        if (budgetDay >= 1200){
            return ('У вас высокий уровень дохода');
        } else if (budgetDay >= 600 && budgetDay < 1200){
            return ('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay >= 0){
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    },

     asking: function(){
        for (let i = 0; i < 2; i++){
    
            if (i === 0) {
                 expenses1 = prompt('Введите обязательную статью расходов', 'Оплата жилья');
            } else if (i === 1) {
                 expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
            }
        }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
    }

};

appData.asking();
for (let key in appData){
    console.log('Наша программа включает в себя данные:');
}










let expensesAmount = appData.getExpensesMonth();

let accumulatedMonth = appData.getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;

appData.getTargetMounthn(appData.mission, accumulatedMonth);


console.log('Период равен', appData.period, 'месяцев.', 'Цель заработать', appData.mission, 'руб');
console.log(appData.addExpenses.lenght);


console.log('Бюджет на месяц:',+accumulatedMonth);
if (appData.getTargetMounthn() > 0) {
    console.log('Цель будет достигнута за:',Math.ceil(appData.getTargetMounthn), 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день:',Math.floor(budgetDay));




console.log(appData.getStatusIncome());
