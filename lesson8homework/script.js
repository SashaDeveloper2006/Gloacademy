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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 11,

    asking: function(){

        

            for (let i = 0; i < 2; i++) {
                let value;
                let key;
    
                   do {
                        key = prompt('Введите обязательную статью расходов?', 'Бензин');
                    }   while (isNumber(key) || key === null || key === '' || key === undefined);
            

                 do {
                     value = prompt('Во сколько это обойдется?', 3000);
                } while (!isNumber(value) || value === null || value === '' || value === undefined);
    
                appData.expenses[key] = +value;

                appData.addExpenses.push(key);

                console.log(appData.addExpenses.toString().toLowerCase().split(', '));

            }
            console.log(appData.addExpenses.toString().substring(1).toUpperCase());


                if(confirm('Есть ли у вас допольнительный источник заработка')){
                let itemIncome;
                let cashIncome;
                
                   do {
                    itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
            } while (isNumber(itemIncome) || itemIncome === null || itemIncome === '' || itemIncome === undefined);
                        
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            while (!isNumber(cashIncome) || cashIncome === null || cashIncome === '' || cashIncome === undefined){
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете', 10000);
                }
                appData.income[itemIncome] = +cashIncome;
                appData.deposit = confirm('Есть ли у вас депозит в банке');

            } 
    },

    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        
      },

       getBudget: function(){
        appData.budgetMonth = appData.budgetDay - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

     getTargetMounthn: function(){

        return (appData.mission / appData.budgetMonth); 
    
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

    getInfoDeposit: function(){
        if(appData.deposit){
            
                appData.percentDeposit = prompt('Какой годовой процент', '10');
          while (!isNumber(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit === '' || appData.percentDeposit === undefined){
                   appData.percentDeposit = prompt('Какой годовой процент', '10');
                }
            
                appData.moneyDeposit = prompt('Какая сумма заложенна', 10000);
             while (!isNaN(appData.moneyDeposit) || appData.moneyDeposit === null || appData.moneyDeposit === '' || appData.moneyDeposit === undefined ){
                 appData.moneyDeposit = prompt('Какая сумма заложенна', 10000);
             }
         
        }
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
  

};
appData.asking();
appData.getExpensesMonth();
console.log(appData.getStatusIncome());
appData.getInfoDeposit();


if (appData.getTargetMounthn() > 0) {
    console.log('Цель будет достигнута за:', appData.getTargetMounthn() , 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день:',Math.floor(appData.budgetDay));

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
console.log(appData.addExpenses.toString().appData.addExpenses.substring(1).toUpperCase());
