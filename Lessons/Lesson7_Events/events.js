//     // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//     // чтобы при наведении на него "затухал" элемент с id="text". + цветной бордер по клику
// let div = document.createElement('div');
// div.style.width = '200px';
// div.style.height = '150px';
// div.style.margin = '20px';
// div.style.paddingTop = '50px';
// div.style.borderRadius = '120px';
// div.style.backgroundColor = '#fdaa87';
// div.innerHTML = 'Mouse over to hide  <br>  click to border';
// div.style.textAlign = 'center';
// document.body.appendChild(div);
// div.onmouseover = () => div.style.opacity = '0.1';
// div.onmouseout = () => div.style.opacity = '1';
// div.onmousedown = function (ev) {
//     let r = ev.clientX;
//     let g = ev.clientY;
//     let b = (r + g)/2;
//     console.log(`${r},${g},${b}`);
//     div.style.borderWidth = '10px';
//     div.style.borderStyle = 'solid';
//     div.style.borderColor = `RGB(${r},${g},${b})`;
// };

//     //     - Создайте кнопку, при клике на которую, она будет скрываться вместе с родителем
// let div2 = document.createElement('div');
// div2.style.width = '200px';
// div2.style.height = '100px';
// div2.style.backgroundColor = '#b3dcde';
// div2.style.margin = '20px';
// div2.id = 'text';
// document.body.appendChild(div2);
// let btn = document.createElement('button');
// btn.style.height = '30px';
// btn.innerText = 'Click it to hide block';
// div2.appendChild(btn);
// let divIdText = document.getElementById('text');
// btn.onclick = function () {
//     divIdText.style.visibility = 'hidden'
// };


//     // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// form.name = 'main';
// let inputAge = document.createElement('input');
// let inputCheck = document.createElement('input');
// inputAge.type = 'number';
// // inputAge.setAttribute('type', 'number');
// inputAge.name = 'age';
// inputAge.placeholder = 'Enter Your Age:';
// inputCheck.type ='submit';
// inputCheck.value = 'Click to check..';
// form.append(inputAge,inputCheck);
// document.body.append(form);
//
// inputCheck.onclick = function (ev) {
//     ev.preventDefault()
//     // let age = document.querySelector('input[name = age]');
//     let age = document.forms.main.age;
//                                                                         // ? Чому зникає console.log() ???
//     // age.value < 18 ? alert('Your age less 18 !!!') : console.log(age.value)
//     if (age.value < 18) {
//         alert('Your age less 18 !!!') ;
//         this.style.backgroundColor = 'red';
//         console.log(age.value)
//     }
// };


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.createElement('button');
// menu.style.backgroundColor = '#e1b149';
// menu.style.borderRadius = '20px';
// menu.style.borderWidth = '5px';
// menu.style.borderStyle = 'inset';
// menu.style.borderColor = `#b4ac3a`;
// menu.style.padding = '10px';
// menu.style.margin = '5px';
// menu.innerText = `MENU`;
// document.body.append(menu);
//
// let ol = document.createElement('ol');
// for (let i = 0; i < 5; i++) {
//     let li = document.createElement('li');
//     li.className = 'menuList';
//     li.style.backgroundColor = '#e1d93c';
//     li.style.borderRadius = '10px';
//     li.style.borderWidth = '1px';
//     li.style.borderStyle = 'solid';
//     li.style.borderColor = `#b4ac3a`;
//     li.style.display = 'inline-block';
//     li.style.padding = '10px';
//     li.style.margin = '5px';
//     li.innerText = `Text li${i+1}`;
//
//     let ul = document.createElement('ul');
//     for (let j = 0; j < 5; j++) {
//         let li = document.createElement('li');
//         li.style.backgroundColor = '#c7e140';
//         li.style.borderRadius = '5px';
//         li.style.borderWidth = '1px';
//         li.style.borderStyle = 'solid';
//         li.style.borderColor = `#95ae2f`;
//         li.style.padding = '10px';
//         li.style.margin = '5px';
//         li.innerText = `Text li${i+1},li${j+1}`;
//         li.style.listStyle = 'none';
//         li.style.opacity = '0.5';
//         li.onmouseover = function() {this.style.opacity = '1'};
//         li.onmouseout = function() {this.style.opacity = '0.5'};
//         li.onclick = function() {
//             this.style.opacity = '1';
//             this.style.borderWidth = '2px'
//         };
//         ul.append(li)
//     }
//     ul.style.width = '120px';
//     ul.style.display = 'none';
//     li.onmouseover = function() {
//         this.style.backgroundColor = '#ebe33c';
//         this.style.borderWidth = '2px';
//         ul.style.display = 'block';
//         this.style.position = 'relative';
//         ul.style.position = 'absolute';
//         ul.style.left = '-70%';
//         ul.style.top = '40px';
//
//     };
//     li.onmouseout = function() {
//         this.style.backgroundColor = '#e1d93c';
//         this.style.borderWidth = '1px';
//         ul.style.display = 'none'
//     };
//
//     li.append(ul);
//     ol.append(li);
//     ol.style.display = 'none'
// }
// document.body.append(ol);
// menu.onclick = function() {
//     ol.style.display === 'block' ? ol.style.display = 'none' : ol.style.display = 'block'
// };


//     // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     //     Вывести список комментариев в документ, каждый в своем блоке.
//     //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// class Comment {
//     constructor(title,body) {
//         this.title = title;
//         this.body = body;
//     }
//     loadToDiv (container) {
//         let div = document.createElement('div');
//         let h3 = document.createElement('h3');
//         let btn = document.createElement('button');
//         h3.innerText = this.title;
//         h3.style.color = 'blue';
//         let p = document.createElement('p');
//         p.innerText = this.body;
//         p.append(btn);
//         btn.innerText = "X";
//         btn.style.color = "red";
//         btn.style.backgroundColor = "rgba(255,66,25,0.24)";
//         btn.style.width = "30px";
//         btn.onclick = function() {
//             p.style.display = 'none';
//             h3.style.color = 'red';
//         };
//         h3.onclick = function(){
//             if (h3.style.color === 'red') {
//                 p.style.display = 'block';
//                 h3.style.color = 'blue';
//             }
//         };
//         div.append(h3,p);
//         container.append(div)
//     }
// }
// let container = document.createElement('div');
// container.id = 'container';
// document.body.appendChild(container);
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda doloremque fugit magni minima nostrum perspiciatis sapiente unde voluptas? Ipsum.'
// for (let i = 0; i < 10; i++) {
//     const comment = new Comment(`Title ${i+1}: `,text);
//     comment.loadToDiv(container)
// }


//     // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// for (let i = 0; i < 2; i++) {
//     let form = document.createElement('form');
//     form.name = `form${i+1}`;
//     let input1 = document.createElement('input');
//     input1.type = 'text';
//     input1.name = 'name';
//     let input2 = document.createElement('input');
//     input2.type = 'email';
//     input2.name = 'email';
//     form.append(input1,input2);
//     form.style.margin = '10px';
//     document.body.append(form)
// }
// let btn = document.createElement('button');
// const info = document.createElement('p');
// info.style.color = 'red';
// info.style.border = '1px solid red';
// const frame = document.createElement('div');
// document.body.append(info);
// document.body.append(btn);
// btn.style.display = 'block';
// btn.innerText = 'GET information';
// btn.type = 'submit';
// btn.onclick = function(){
//     let name1 = document.forms.form1.name.value;
//     let name2 = document.forms.form2.name.value;
//     let email1 = document.forms.form1.email.value;
//     let email2 = document.forms.form2.email.value;
//     frame.innerHTML = `${name1}:  ${email1} <br> ${name2}:  ${email2}`
// };
// document.body.appendChild(frame);
// let inputs = document.querySelectorAll('input');
// for (const input of inputs) {
//     input.onchange = function () {
//         info.innerHTML += this.value + '<br>'
//     }
// }


//     // - Створити функцію, яка генерує таблицю.
//     //     Перший аргумент визначає кількість строк.
//     //     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     //     Третій параметр визначає елемент в який потрібно таблицю додати.
// function table(rows,cells,conteiner) {
//     const table = document.createElement('table');
//     const row = document.createElement('tr');
//     for (let h = 0; h < cells; h++) {
//         const th = document.createElement('th');
//         th.innerText = `Col ${h+1}`;
//         row.append(th)
//     }
//     table.append(row);
//     for (let i = 0; i < rows; i++) {
//         const row = document.createElement('tr');
//         for (let j = 0; j < cells; j++) {
//             const cell = document.createElement('td');
//             cell.innerText = `cell  ${i+1} : ${j+1}`;
//             cell.style.border = '1px solid black';
//             cell.style.padding = '5px';
//             cell.style.backgroundColor = `rgb(${255-i*10},${255-i*10},${255-i*10})`;
//             row.append(cell)
//         }
//         table.append(row)
//     }
//     conteiner.append(table)
// }
// const  tableDiv = document.createElement('div');
// document.body.appendChild(tableDiv);
// table(5,10,tableDiv);


//     // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     // (Додатковачастина для завдання)
// let container = document.createElement('div');
// let container2 = document.createElement('div');
// let form = document.createElement('form');
// form.name = 'formTable';
// let inputRows = document.createElement('input');
// inputRows.name = 'rows';
// inputRows.type = 'numbers';
// inputRows.placeholder = 'Enter amount of rows';
// let inputCells = document.createElement('input');
// inputCells.name = 'cells';
// inputCells.type = 'numbers';
// inputCells.placeholder = 'Enter amount of Cells';
// let inputText = document.createElement('input');
// inputText.name = 'text';
// inputText.type = 'text';
// inputText.placeholder = 'Enter the Text';
// let submit = document.createElement('input');
// submit.name = 'submit';
// submit.type = 'submit';
// submit.value = 'Create the Table';
// form.append(inputRows,inputCells,inputText,submit);
// container.append(form);
// document.body.appendChild(container);
// submit.onclick = function (el) {
//     el.preventDefault()
//     let table = document.createElement('table');
//     for (let i = 0; i < inputRows.value; i++) {
//         const row = document.createElement('tr');
//         for (let j = 0; j < inputCells.value; j++) {
//             const cell = document.createElement('td');
//             cell.style.border = '1px solid grey';
//             cell.innerText = inputText.value;
//             row.append(cell);
//         }
//         table.append(row);
//     }
//     container.append(table)
// };



//
//
//     // - Сворити масив нецензцрних слів.
//     //     Сворити інпут текстового типу.
//     //     Якщо людина вводить текст і він містить слово з масиву нецензурних слів
//     // кинути алерт з попередженням.
//     //     Перевірку робити при натисканні на кнопку
// let fuckenWords = ['xxx', 'bbb', 'fuck'];
// let container = document.createElement('div');
// let text = document.createElement('textarea');
// text.autofocus = 'true';
// text.required = 'true';
// text.cols = '50';
// text.rows = '10';
// let btn = document.createElement('button');
// btn.innerText = 'check for cenzor';
// btn.style.backgroundColor = '#ffcd94';
// btn.style.display = 'block';
// container.append(text,btn);
// document.body.append(container);
// btn.onclick = function () {
//     console.log(typeof text.value);
//     for (const fuckenWord of fuckenWords) {
//         const word = text.value.toLowerCase();
//         // text.value.includes(fuckenWord) ? alert('the text contains obscene statements!!!!') : console.log('777')
//         if (word.includes(fuckenWord)) {
//             alert('the text contains obscene statements!!!!');
//             console.log(word.indexOf(fuckenWord),fuckenWord)
//         }
//     }
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 33, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 25, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

function openObject (object,container) {
    if (typeof object === 'object') {
        for (let key in object) {
            typeof object[key] !== 'object'
                ? container.innerText += `${key}: ${object[key]}; `
                : openObject(object[key],container)
        }
    }
}
function objectsToDivsInContainer (array,container) {
    for (const object of array) {
        let div = document.createElement('div');
        openObject(object, div);
        container.append(div)
    }
}

let container = document.createElement('div');
container.style.border = '1px solid red';
container.style.height = '210px';
objectsToDivsInContainer(usersWithAddress,container);
document.body.append(container);
let pStatus = document.createElement('p');
pStatus.style.color = 'blue';
pStatus.innerText = 'select users with status "false"';
let checkStatus = document.createElement('input');
checkStatus.type = 'checkbox';
checkStatus.name = 'checkStatus';
pStatus.append(checkStatus);
let pAge = document.createElement('p');
pAge.style.color = 'blue';
pAge.innerText = 'select users with Age over 28';
let checkAge = document.createElement('input');
checkAge.type = 'checkbox';
checkAge.name = 'checkAge';
pAge.append(checkAge);
let pCity = document.createElement('p');
pCity.style.color = 'blue';
pCity.innerText = 'select users with City "Kyiv"';
let checkCity = document.createElement('input');
checkCity.type = 'checkbox';
checkCity.name = 'checkCity';
pCity.append(checkCity);
let box = document.createElement('div');
box.append(pStatus,pAge,pCity);
document.body.append(box);




// checkStatus.addEventListener('click',  function () {
//     container.innerText = '';
//     let users = usersWithAddress.filter((object) => object.status === false);
//     let usersAge = users.filter((object) => object.age > 28);
//     let usersCity = users.filter((object) => object.address.city === 'Kyiv');
//     let usersAgeCity = usersAge.filter((object) => object.address.city === 'Kyiv');
//     if (checkStatus.checked) {
//         if (checkAge.checked) {
//             if (checkCity.checked) {
//                 objectsToDivsInContainer(usersAgeCity, container);
//             } else {
//                 objectsToDivsInContainer(usersAge, container);
//             }
//         } else {
//             if (checkCity.checked) {
//                 objectsToDivsInContainer(usersCity, container);
//             } else {
//                 objectsToDivsInContainer(users, container);
//             }
//         }
//     } else {
//         objectsToDivsInContainer(usersWithAddress, container);
//     }
// });
//
// checkCity.onclick = function () {
//     container.innerText = '';
//     if (checkCity.checked) {
//         let users = usersWithAddress.filter((object) => object.address.city === 'Kyiv')
//         objectsToDivsInContainer(users, container);
//     }else {
//         objectsToDivsInContainer(usersWithAddress, container);
//     }
// }
// checkAge.onclick = function () {
//     container.innerText = '';
//     if (checkAge.checked) {
//         let users = usersWithAddress.filter((object) => object.age > 28);
//         objectsToDivsInContainer(users, container);
//     }else {
//         objectsToDivsInContainer(usersWithAddress, container);
//     }
// }



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента
// и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
//     // // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let element = document.createElement('div');
// element.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto aspernatur consequatur deserunt fugit ipsam minima, modi neque repudiandae sed?'
// document.body.append(element);
// document.onmouseup = function (ev) {
//     element = ev.target;
//     text = element.innerText;
//     select = document.getSelection().toString().toUpperCase().bold().fontcolor('red');
//     start = document.getSelection().anchorOffset;
//     end = document.getSelection().focusOffset;
//     if (start < end) {
//         text1 = text.slice(0, start);
//         text2 = text.slice(end);
//     }else {
//         text1 = text.slice(0, end);
//         text2 = text.slice(start);
//     }
//     text = text1+select+text2;
//     element.innerHTML = text
// }