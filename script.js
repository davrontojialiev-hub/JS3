let number = +(prompt("Введите любое число:"));

for (let i = 1; i <= number; i++) {
    if (i === 1) {
        console.log(i + " banana");
    } else {
        console.log(i + " bananas");
    }
}

 let num = +(prompt("Введите сколько раз сработает цикл:"));
 let sum = 0;
   for (let i = 2; i < num; i += 2) {
    sum += i;   
 }
 console.log("Сумма всех четных чисел:" + sum);
 

 let num1 = +(prompt("Введите любое число:"));
 let degree = +(prompt("Введите степень:"));

console.log("ответ: " + Math.pow(num1, degree));
