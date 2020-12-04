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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 11,

    asking: function(){

        if(confirm('Есть ли у вас допольнительный источник заработка')){
            if (confirm('Есть ли у вас дополнительный источник заработка?')){
                let itemIncome;
                let cashIncome;
                do {
                    itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
                } while (isNumber(itemIncome));
    
                
                do {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                }while (!isNumber(cashIncome));
    
                appData.income[itemIncome] = cashIncome;
            }
    
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2; i++) {
                let value;
                let key;
    
                do {
                    key = prompt('Введите обязательную статью расходов?', 'Бензин');
                } while (isNumber(key));
    
                
                 do {
                     value = prompt('Во сколько это обойдется?', 3000);
                } while (!isNumber(key));
    
                appData.expenses[key] = value;
                appData.addExpenses.push(key);
            }
        }
        

       appData.deposit = confirm('Есть ли у вас депозит в банке');

          for (let i = 0; i < 2; i++){
         let value;
         let key = prompt('Введите обязателбную статью расходов', 'квартира');
         while (!isNaN(key)){
             prompt('Введите обязательную статью расходов');
         }

         while (!isNumber(value)){
             value = prompt('Во сколько это обойдется', '120000');
         }

         this.expenses[key] = +value;
        }
        
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

    getInfoDeposit: function(){
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt('Какой годовой процент', '10');
             }   while (isNaN(appData.percentDeposit));
                
            
            do {
                appData.moneyDeposit = prompt('Какая сумма заложенна', 10000);
            }  while (isNaN(appData.moneyDeposit));
        
               
            
        }
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }

    

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



if (appData.getTargetMounthn() > 0) {
    console.log('Цель будет достигнута за:',Math.ceil(appData.getTargetMounthn), 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день:',Math.floor(appData.budgetDay));

console.log(appData.key.toLowerCase().split(', '));


console.log(appData.getStatusIncome());

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
