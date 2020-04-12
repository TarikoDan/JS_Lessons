// // - создать массив с 20 числами.
// let arrNums = [7, 0, -160, 88, 10e1, 21, 117, -95, 0, 1.5, 31]
// arrNums.sort((a, b) => (a - b));
// console.log(arrNums);
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// // let arrNums1 = [7, 0, -16, 88, 10e1, 21, 115, -95, 0, 1.5, 31]
// // arrNums1.sort((a, b) => b - a);
// // console.log(arrNums1)
// // -- при помощи filter получить числа кратные 3
// // arrNums.fill('0', 0, 3);
// // console.log(arrNums)
// let nums3 = arrNums.filter(item => item % 3 === 0);
// console.log(nums3);
// // -- при помощи filter получить числа кратные 10
// let nums10 = arrNums.filter(x => x % 10 === 0);
// console.log(nums10);
// // -- перебрать (проитерировать) массив при помощи foreach()
// // arrNums.forEach((item,i) => console.log(i,item));
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let arrNums3X  = arrNums.map(value => value*3);
// console.log(arrNums3X)

// - создать массив со словами на 15-20 элементов.
let arrWords = ['LOREM', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Delectus', 'impedit', 'mag', 'nam', 'minus', 'nisi', 'perspiciatis', 'quae', 'quis', 'rem', 'sit', 'unde', 'veritatis'];
//     // -- поднять регистр.
// let arrWords2 = arrWords.map(string => string.toUpperCase());
// console.log(arrWords2);

// //     -- отсортировать его по алфавиту в восходящем порядке.
// arrWords.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)
// console.log(arrWords)

// -- отсортировать его по длине слов в восходящем порядке.
// arrWords.sort((a, b) => (a.length - b.length));
// console.log(arrWords)

// // -- отсортировать его по алфавиту  в нисходящем порядке.
// arrWords.sort((a,b) => (a.toLowerCase() > b.toLowerCase()) ? -1 : 1)
// console.log(arrWords)

// // -- отфильтровать слова длиной менее 4х символов
// let smallWords = arrWords.filter(value => value.length < 4);
// console.log(smallWords);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let arrWordsMark = arrWords.map(string => string + '!');
// console.log(arrWordsMark)
// console.log(arrWords)


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 25, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 35, status: false},
    {name: 'max', age: 31, status: true}];
// users[10].age = 310;
// users[10].id = 111;

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a,b) => (a.age - b.age));
// console.log(users)
// users.sort((a,b) => (b.age - a.age));
// console.log(users)

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a,b) => (a.name.length - b.name.length));
// console.log(users)

// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

//     //  1-й варіант
// let usersWithId = []
// let x = 0
// for (const user of users) {
//     usersWithId[x] = {}
//     for (const key in user) {
//         usersWithId[x][key]= user[key];
//     }
//     usersWithId[x].id = Math.floor(Math.random()*100);
//     x++
// }

//     //  2-й варіант
// let usersWithId = [];
// users.forEach((user, i) => {
//         usersWithId[i] = Object.create(user);
//         usersWithId[i].name = user.name;
//         usersWithId[i].age = user.age;
//         usersWithId[i].status = user.status;
//     }
// );
// usersWithId.map((user) => user.id = Math.floor(Math.random() * 100 + 1))
// console.log('users', users)
// console.log('usersWithId', usersWithId)

// // - відсортувати його за індентифікатором
// usersWithId.sort((a, b) => a.id - b.id);


//     // -- наnисать функцию калькулятора с 2мя числами и колбеком
// function calc(x, y, action) {
//     console.log(x,'calc',y,' = ',action(x,y));
//     return action(x, y)
// }
// a = calc(10,5,(a,b) => a**b*-100);
// console.log(a);

    // -- наnисать функцию калькулятора с 3мя числами и колбеком
// function calc3(a,b,c,action) {
//     console.log(`calc(x:${a},y:${b},z:${c}) = `,action(a,b,c));
//     }
// calc3(100,5,20,(a,b,c)=>a/b===c?1:0)

// let o =    {name: 'olya', age: 35, status: false}
// function jo(object,fu) {
//     return fu(object)
// }
// let lll = jo(o,(object)=>{
//     object1 = Object.create(object)
//     object1.id = Math.random()*100
//     return object1
// })
// console.log(lll)
// console.log(o)
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [{producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan",engine: "ej204x", volume: 2, power: 400},
//     {producer: "subaru", model: "legacy", year: 2007,color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250},
//     {producer: "subaru",model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300},
//     {producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140},
//     {producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200},
//     {producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165},
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180},
//     {producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3.5, power: 400},
//     {producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230}];
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// let carsVolume3 = cars.filter((value) => value.volume > 3);
// console.log(carsVolume3);
// // - двигун = 2л
// let carsVolume2 = cars.filter(value => value.volume === 2);
// console.log(carsVolume2)
// // - виробник мерс
// let carsMers = cars.filter((object) => object.producer === 'mercedes');
// console.log(carsMers)
// // - двигун більше 3х літрів + виробник мерседес
// let carsMers2 = cars.filter((object) => object.producer === 'mercedes' && object.volume > 3);
// console.log(carsMers2)
//
// // - двигун більше 3х літрів + виробник субару
// let carsSubaru2 = cars.filter((object) => object.producer === 'subaru' && object.volume > 3);
// console.log(carsSubaru2)
//
// // - сили більше ніж 300
// // - сили більше ніж 300 + виробник субару
// // - мотор серіі ej
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// // - двигун меньше 3х літрів + виробник мерседес
// // - двигун більше 2л + сили більше 250
// // - сили більше 250  + виробник бмв



// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Bandery', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Ugorska', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Stryiska', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Kulparkivska', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Ch.Kalyny', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Syhivska', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Svobody', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Doroshenka', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Grincenka', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Chornovola', number: 121}}];

//     // -- отсортировать его по id пользователей
// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);

//     // -- отсортировать его по id пользователей в обратном опрядке
//     // -- отсортировать его по возрасту пользователей
//     // -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => b.age - a.age);

// //     // -- отсортировать его по имени пользователей
// //     // -- отсортировать его по имени пользователей в обратном порядке
// //     // -- отсортировать его по названию улицы  в алфавитном порядке
// // usersWithAddress.sort((a, b) => a.address.street > b.address.street ? 1 : -1)
//
//     // -- отсортировать его по номеру дома по возрастанию
//     // -- отфильтровать (оставить) тех кто младше 30
//     // -- отфильтровать (оставить) тех у кого отрицательный статус
//     // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let viсtim = usersWithAddress.filter(user => (user.age < 30)&&(user.status === false));
// console.log(viсtim);
// -- отфильтровать (оставить) тех у кого номер дома четный
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
//     // Створити обєкт автомобіля з полями:
//     //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     //     Власник автомобіля теж має бути обєкт, у якого є поля
//     // Імя, вік, стаж водіння.
//     //     Створити не менше 7 та не більше 20 машинок.
// class Cars  {
//     constructor(producer,model,year,price,power,driver) {
//         this.producer = producer;
//         this.model = model;
//         this.year = year;
//         this.price = price;
//         this.power = power;
//         this.driver = driver;
//     }
//     upgrade(percentToPower) {
//         this.power += this.power*percentToPower/100;
//         this.price += this.price*percentToPower/200
//     }
//     newDriver(name, age, experience) {
//         this.driver.name = name;
//         this.driver.age = age;
//         this.driver.experience = experience;
//     }
//     checkDrivers(minAge,minExperience){
//         if ((this.driver.age < minAge) || (this.driver.experience < minExperience)) {
//             alert(`Alarm! This driver _${this.driver.name}_ isn't in limits`);
//             confirm('Delete this Driver?..') ? delete this.driver : this.newDriver(prompt('name'),
//                                                                                     +prompt('age'),
//                                                                                     +prompt('experience'))
//         }
//     }
// }
//
// class Driver {
//     constructor(name, age, experience) {
//         this.name = name;
//         this.age = age;
//         this.experience = experience;
//     }
//     toStudying(minAge,maxExperience) {
//         (this.experience < maxExperience) && (this.age > minAge) ? this.experience++ : console.log('Ok')
//     }
// }


// let cars = [];
// let driver1 = new Driver('Vasya', 31, 10);
// let car1 = new Cars("subaru","wrx",2010,  20450, 400,driver1);
// cars.push(car1);
// let driver2 = new Driver('Osya', 16, 15);
// let car2 = new Cars("subaru","legacy", 2007, 32500, 250,driver2);
// cars.push(car2);
// let driver3 = new Driver('Nasya', 3, 0);
// let car3 = new Cars("subaru","tribeca", 2011, 33000, 300,driver3);
// cars.push(car3);
// let driver4 = new Driver('Pisya', 39, 4);
// let car4 = new Cars("subaru","leone", 1998, 15000, 140,driver4);
// cars.push(car4);
// let driver5 = new Driver('Kasya', 72, 60);
// let car5 = new Cars("subaru","impreza", 2014, 28000, 200,driver5);
// cars.push(car5);
// let driver6 = new Driver('Pesya', 99, 30);
// let car6 = new Cars("bmw", "115", 2013,  1980, 120,driver6);
// cars.push(car6);
// let driver7 = new Driver('Pusya', 15, 1);
// let car7 = new Cars("bmw", "650", 2009, 12400, 350,driver7);
// cars.push(car7);
// let driver8 = new Driver('Kisya', 66, 4);
// let car8 = new Cars("bmw", "320", 2012, 670, 180,driver8);
// cars.push(car8);
// let driver9 = new Driver('Misya', 26, -10);
// let car9 = new Cars("mercedes", "e200", 1990, 1200, 180,driver9);
// cars.push(car9);
// let driver10 = new Driver('Valera', 12, 1);
// let car10 = new Cars("mercedes", "e63", 2017, 48900, 400,driver10);
// cars.push(car10);
// let driver11 = new Driver('Ahmed', 24, 199);
// let car11 = new Cars("mercedes", "c250", 2017, 32600, 230,driver11);
// cars.push(car11);
//
// console.log(cars);

//     //     Зробили половинi автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// car1.upgrade(10);

//     // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// car1.newDriver('OTTO',333,50);

//     // Для початку вкладіть всі наші створені автомобілі в масив cars.
//     // Далі необхідно bрати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10%
//     та ціну на 5%
// for (let i = 2; i < cars.length; i+=2) {
//     const car = cars[i];
//     car.upgrade(10)
// }

//     // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// for (const car of cars) {
//     car.driver.toStudying(25,5)
//     car.checkDrivers(16,1)
// }

//     //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let cash = 0;
// for (const car of cars) {
//     cash += car.price
// }
// console.log(cash);

// ***********************************
    // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
    //     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
    //     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
    //
    // Пример:
    // 1. Key = 1
    // Answer: MinIndex = 0, MaxIndex = 0.
    // 2. Key = 4
    // Answer: MinIndex = 3, MaxIndex = 6.
const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
console.log(arr);

//         // 1-й варіант:
// const number = +prompt('Enter Number:');
// const  minIndex = arr.indexOf(number);
// const  maxIndex = arr.lastIndexOf(number);
// console.log('minIndex: ',minIndex,", ",'maxIndex: ',maxIndex);

//         // 2-й варіант:
// let nums = arr.filter((num) => num === number);
// const numsLength = nums.length;
// let minIndex, maxIndex;
// if (numsLength !== 0) {
//     minIndex = arr.indexOf(number);
//     maxIndex = minIndex + numsLength -1;
//     console.log(`number ${number} is at indexes from ${minIndex} to ${maxIndex}`)
// }else {
//     console.log(`-1; number ${number} isn't in array`)
// }

