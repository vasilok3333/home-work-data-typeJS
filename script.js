// Task 2

/* 
Написати конвертер валют - пишете скільки у вас є
гривень і які очікуємо можливі конвертації - у долар, євро,
нафту(brent), золото. Додатково зробити перевірку чи не
обманює вас юзер і перевіряти чи не прийшов вам null or
undefined.
*/



let amountMoney = prompt('Enter the amount of money you have in UAH, please', '0');



if (!amountMoney) {
    alert('If you want to convert, you need to enter the amount of money in UAH');

} else if (+amountMoney === 0 || +amountMoney < 0) {
    alert('For a successful conversion, you must enter an amount greater than 0');

} else if (isNaN(+amountMoney)) {
    alert('You have entered an incorrect value, please repeat');
} else {

    let currency = prompt('Enter the currency to which you want to convert. Available currencies: DOLAR, EURO, BRENT, IRON');

    if (currency) {
        currency = currency.toLowerCase();
    }

    if (!currency || !currency.trim()) {
        alert('You have entered the wrong currency. Be more careful and try again')
    } else if (currency == 'dolar') {
        alert(`The amount after conversion will be ${(amountMoney/28).toFixed(2)} $`)
    } else if (currency == 'euro') {
        alert(`The amount after conversion will be ${(amountMoney / 34).toFixed(2)} Є`)
    } else if (currency == 'brent') {
        alert(`The amount after conversion will be ${(amountMoney / 1536).toFixed(2)} Bbl`)
    } else if (currency == 'iron') {
        alert(`The amount after conversion will be ${(amountMoney / 1200).toFixed(2)} g`)
    } else {
        alert('Incorrect input. Try again')
    }
}


//Task 3

/*
Спитатись у юзера суму замовлення і вивести результат з
урахуванням знижки : до 500 гривень знижка -1 %, від 500
до 1000 - 5%, більше 1000 - 10% та подарунковий
сертифікат на 200 гривень у подарунок!
*/



let orderAmount = prompt('Enter your order amount');

if (!orderAmount) {
    alert('It is a pity you did not make any orders.')
} else if (orderAmount == '0') {
    alert('Sorry, nothing is free nowadays')
} else if (isNaN(+orderAmount) || +orderAmount < 0) {
    alert('Please enter the correct amount')
} else if (+orderAmount < 500) {
    alert(`Your discount is 1%. You need to pay ${orderAmount - orderAmount*0.01}`)
} else if (+orderAmount >= 500 && +orderAmount <= 1000) {
    alert(`Your discount is 5%. You need to pay ${orderAmount - orderAmount*0.05}`)
} else if (+orderAmount > 1000) {
    alert(`Your discount is 10%. You need to pay ${orderAmount - orderAmount*0.1}. You also became the happy owner of a gift certificate worth UAH 200`)
} else {
    alert('Error. Try again')
}


//Task 4 

/*
Створити тест на знання будь-чого, юзер має відповісти на
5 питань, вірна відповідь - 1 бал, якщо юзер відповість
правильно на всі 5 запитань - додатково додати 1
бонусний бал.
*/





let question1 = prompt('How much will be: 2 + 2?', '0');

let totalPoint = 0;

if (question1 == '4') {
    alert('It is correct answer');
    totalPoint++
} else {
    alert('It is not true')
};


let question2 = prompt('How much will be: 2 + 2/2', '0');

if (question2 == '3') {
    alert('It is correct answer');
    totalPoint++
} else {
    alert('It is not true')
};

let question3 = prompt('How much will be: 2 + 2 * 2?', '0');

if (question3 == '6') {
    alert('It is correct answer');
    totalPoint++
} else {
    alert('It is not true')
};

let question4 = confirm('JS is a dynamic language?');

if (question4) {
    alert('It is correct answer')
    totalPoint++
} else {
    alert('It is not true')
}

let question5 = confirm(' (null == 0) is true? ');

if (!question5) {
    alert('It is correct answer')
    totalPoint++
} else {
    alert('It is not true')
}

if (totalPoint == 5) {
    totalPoint++
}

alert(`You scored ${totalPoint} points`);



// Task 5
/* 
Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
*/

let numeric = prompt('Enter a three-digit number');

if (!numeric) {
    alert('Please, enter the number')
} else if (isNaN(+numeric)) {
    alert('Please. Enter only correct number')
} else if (numeric.length !== 3) {
    alert('Please, enter three-digit number')
} else {

    let arr = numeric.split('');

    if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
        alert('This number has the same digits')
    } else {
        alert('This number has not the same digits')
    }
}


//Task 6

/* 
Запитатись у юзера одну кнопоку від 1 до = на клавіатурі 
та вивести що буде при нажиманні цифри разом з шифтом.
*/

let buttonPressed = prompt(`Enter one of the buttons from '1' to '=' `);

if (buttonPressed === '1') {
    alert("!");
} else if (+buttonPressed === 2) {
    alert("@");
} else if (+buttonPressed === 3) {
    alert("#");
} else if (+buttonPressed === 4) {
    alert("$");
} else if (+buttonPressed === 5) {
    alert("%");
} else if (+buttonPressed === 6) {
    alert("^");
} else if (+buttonPressed === 7) {
    alert("&");
} else if (+buttonPressed === 8) {
    alert("*");
} else if (+buttonPressed === 9) {
    alert("(");
} else if (+buttonPressed === 0) {
    alert(")");
} else if (buttonPressed === "-") {
    alert("_");
} else if (buttonPressed === "=") {
    alert("+");
} else {
    alert('Error.Try again');
}