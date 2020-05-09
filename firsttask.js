let money = prompt("Ваш бюджет на месяц?"); 
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
data: time,
budget: money,
expenses: {},
optionalExpenses: {},
income: [],
savings: false   
};
let firstQ = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQ = prompt("Во сколько обойдется?"),
    thirdQ = prompt("Введите обязательную статью расходов в этом месяце"),
    fourthQ = prompt("Во сколько обойдется?");
appData.expenses[firstQ] = secondQ;
appData.expenses[thirdQ] = fourthQ;
alert(appData.budget/30);
console.log(appData.expenses);

