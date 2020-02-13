let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
        timeData: time,
        budget: money,
        optionalExpenses: {},
        income: [],
        savings: false,
        expenses: {}
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        alert('Please reload the page and input numbers');
        i--;
    }
};
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert('Please reload the page and input numbers');
//         i--;
//     }
//     i++;
// };
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         alert('Please reload the page and input numbers');
//         i--;
//     }
//     i++;
// } while (i < 2);
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Not enough");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle level");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level");
} else {
    console.log("Error");
}