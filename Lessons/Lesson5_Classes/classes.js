// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// Таким чином описати теги


// ==============================================
// function TagConstructor (name,functionality,attributesArray) {
//     this.name = name;
//     this.functionality = functionality;
//     this.attributesArray = attributesArray;
// }
// const hrefFunct = 'Задає адресу документа, на який слід перейти';
// const href = new TagConstructor('href',hrefFunct);
// const targetFunct = 'Вказує, де відкрити документ при переході за посиланням';
// const target = new TagConstructor('target',targetFunct);
// const downloadFunct = 'Вказує, де відкрити документ при переході за посиланням';
// const download = new TagConstructor('download',downloadFunct);
// const aFunc = 'створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).';
// const aAttr = [href,target,download];
// const a = new TagConstructor('<a>',aFunc,aAttr);
// console.log(a);

// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// ==============================================

// class AttributeX {
//     constructor(name,functionality) {
//         this.name = name;
//         this.functionality = functionality;
//     }
// }
// class TagX extends AttributeX {
//     constructor(name,functionality,attributesArray) {
//         super(name,functionality);
//         this.attributesArray = attributesArray;
//     }
// }
// const typeFunct = 'Повідомляє браузеру, до якого типу належить елемент форми';
// const type = new AttributeX('type',typeFunct);
// const valueFunct = 'Задає значення елемента';
// const value = new AttributeX('value',valueFunct);
// const inputFunct = 'Створює різні елементи інтерфейсу для взаємодії з користувачем';
// const inputAttr = [type,value];
// const input = new TagX('<input>',inputFunct,inputAttr);
// console.log(input);
//
// class TagXX {
//     constructor(name, functionality, attributes) {
//         this.name = name || 'No name';
//         this.functionality = functionality || 'Without functionality';
//         this.attributes = [];
//         for (let i = 2; i < arguments.length; i++) {
//             this.attributes.push(arguments[i])
//
//         }
//     }
// }
//
// const alineFunct = 'Вирівнювання заголовку';
// const aline = new AttributeX('type', alineFunct);
// const styleFunct = 'Задає вбудований (inline) стиль для елемента';
// const style = new AttributeX('style', styleFunct);
// const h1Funct = 'Bизначає найбільш важливі заголовки';
// const h1 = new TagXX('<h1>', h1Funct, aline, style, 30, 40, 50);
// console.log(h1);


// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//     об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model,producter,manufactureYear,maxSpeed,engineVolume) {
//         this.model = model;
//         this.producter = producter;
//         this.manufactureYear = manufactureYear;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//     drive (speed) {
//         if (speed < this.maxSpeed) {
//             console.log(`We are driving ${speed} km / hour`)
//         }else {
//             console.log(`You can't driving ${speed} km / hour, it's more than MAXSpeed ${this.maxSpeed} km / hour`)
//         }
//     }
//     info() {
//         console.log(this.producter,this.model,this.manufactureYear,",",
//             'MaxSpeed:',this.maxSpeed,",",
//             'engineVolume:',this.engineVolume,',','Driver:',this.driver)
//     }
//     increaseVolume (increaseVolume) {
//         this.engineVolume += increaseVolume;
//         // while ()
//         this.maxSpeed += increaseVolume / 20;
//     }
//     changeYear (newValue) {
//         this.manufactureYear = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let bmwX5 = new Car('X5','BMW',2015,220,3000);
// const driver1 = {name:"Michael",age:28,country:"Brasil"};
// bmwX5.drive(300);
// bmwX5.info();
// bmwX5.increaseVolume(1000);
// bmwX5.info();
// bmwX5.changeYear(2020);
// bmwX5.increaseVolume(1000);
// bmwX5.addDriver(driver1);
// bmwX5.info();
// bmwX5.drive(300);


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// const bordel = [];
// for (let i = 0; i < 10; i++) {
//     bordel[i] = new Cinderella(`Cinderella${i+1}`,
//                                         Math.floor(Math.random()*(35-18)+18),
//                                         Math.floor(Math.random()*(40-34)+33))
// }
// console.log(bordel);
//
// class Prince extends Cinderella{
//     constructor(name,age,FindedShoe) {
//         super(name,age);
//         this.footSize = FindedShoe
//     }
// }
// const prince = new Prince('Albert',92,34)
// console.log(prince);
// for (const cinderella of bordel) {
//     (cinderella.footSize === prince.footSize) ? console.log("She's lucky - ",cinderella) : console.log('cinderella not founded')
// }

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

//  зробити компютерний клуб з горою компів.
//     // Має бути загальний клас компа від якого всі будуть наслідуватись.
//     // Мають бути стаціонрані компи, ноутбуки, ультрабуки, моноблоки і так далі.
//     // В деяких компів має бути метод який оновляє йому хартеристики. Деякі компи мають бути з жостики параметрами,
//     типу ультрабуків в яких ти не можеш нічого міняти.
//     // На кожному компі можна пограти ігри.
//     // Гра також має бути створена як клас з жанорм і симтемними вимогами.
//     // Гру ти передаєш як аргумент в метод. І якшо гра занадто важка для компа, ти маєш бачити шо її не запустити тут.
//     Якшо вона 1 в 1 як комп, то має бути повідомлення, що гра лагає. Якшо все чудово, то ти будеш грати в неї без проблем.
//     // Ну і мають бути компи на яких заборонено грати ігри.
//     // Наприклад моноблоки або сервери, які використовуються тільки для роботи

class Computer {
    constructor(CPU, GPU, RAM, HDD, SSD,) {
        this.GPU = GPU;
        this.CPU = CPU;
        this.RAM = RAM;
        this.HDD = HDD;
        this.SSD = SSD;
    }

}

class Game {
    constructor(CPU, GPU,) {
    }
}

const server = new Computer(3.2, 1, 16, 10000, 0);
