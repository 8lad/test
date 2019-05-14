var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var appData = {
    timeData: time,
    moneyData: money,
    optionalExpenses: null,
    income: null,
    savings: false
};
var everedayCash1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var meditateResult1 = prompt("Во сколько обойдется?", "");
var everedayCash2 = prompt("Введите обязательную статью расходов в этом месяце", "");
var meditateResult2 = prompt("Во сколько обойдется?", "");
var expenses = { firstAnswerCash1: everedayCash1, secondAnswerResult1: meditateResult1, firstAnswerCash2: everedayCash2, secondAnswerResult2: meditateResult2 };
alert(appData[moneyData] / 30 + "Бюджет на один день");