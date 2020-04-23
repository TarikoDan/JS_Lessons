// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let text1 = document.createElement('textarea');
text1.style.border = '3px dotted silver';
document.body.prepend(text1);
text1.value = localStorage.getItem('text1');
text1.oninput = () => localStorage.setItem('text1',text1.value);


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let name = document.getElementById('name');
let name2 = document.getElementById('name2');
name.oninput = () =>{
    name2.value = name.value
};
let elementToObject = (element,object) =>{
    if (element.id && element.name !== 'chec') {
        object[element.id] = element.value
    }else if (element.id && element.name === 'chec') {
        element.hasAttribute('checked')
        ? object[element.id] = 'checked'
        : object[element.id] = 'unchecked'
    }
};
let form1 = document.form1;
if (localStorage.getItem('form1') !== null)  {
    let formStorage = JSON.parse(localStorage.getItem('form1'));
    for (const element of form1) {
        if (element.id) {
            for (const key in formStorage) {
                key === element.id ? element.value = formStorage[key] :false;
                ((element.name === 'chec') && (formStorage[key] === 'checked'))
                    // ? element.setAttribute('checked','checked')
                    // : element.removeAttribute('checked')
                    ? element.checked = true
                    : element.checked = false
            }
        }
    }
}

form1.onchange = () => {
    let formObject = {};
    for (const child of form1.children) {
        if (child.innerHTML) {
            for (let i = 0; i < child.childElementCount; i++) {
                elementToObject(child.children[i],formObject)
            }
        }else{
            elementToObject(child,formObject)
        }
    }
    localStorage.setItem('form1',JSON.stringify(formObject));
};

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let form2 = document.forms.form2;
let text2 = document.getElementById('text2');
let btnSave = document.createElement('input');
btnSave.value = 'SAVE';
btnSave.type = 'button';
form2.appendChild(btnSave);
let btnPrev = document.createElement('input');
btnPrev.value = '<<PREV';
btnPrev.type = 'button';
btnPrev.style.visibility = 'hidden';
let btnNext = document.createElement('input');
btnNext.value = 'NEXT>>';
btnNext.type = 'button';
btnNext.style.visibility = 'hidden';
form2.prepend(btnPrev,btnNext);

const localArray = JSON.parse(localStorage.getItem('form2'));
let steps = localArray.length;
steps > 1 ? btnPrev.style.visibility = 'visible' : false;

localStorage.getItem('form2') ? text2.value = localArray[localArray.length-1] : false
let localStartArray = [];
btnSave.onclick = (ev) => {
    let text = text2.value;
    if (localStorage.getItem('form2')) {
        let localTempArray = JSON.parse(localStorage.getItem('form2'));
        localTempArray.push(text);
        localStorage.setItem('form2',JSON.stringify(localTempArray));
        btnPrev.style.visibility = 'visible'
    }else {
        localStartArray.push(text);
        localStorage.setItem('form2', JSON.stringify(localStartArray))
    }
};

if (localStorage.getItem('form2')) {
    let prevArray = JSON.parse(JSON.stringify(localArray));
    let click = 1
    btnPrev.onclick = () => {
        // click++
        btnNext.style.visibility = 'visible';
        text2.value = prevArray[prevArray.length - 1 - click];
        click < prevArray.length-1  ? click++ : btnPrev.style.visibility = 'hidden';
        // console.log(prevArray)
        return prevArray.length
    };

    btnNext.onclick = (ev) => {
        let w = true
        for (const step in prevArray) {
        // (prevArray[step] === text2.value) ? text2.value = prevArray[step+1] : false
            if (prevArray[step] === text2.value && w === true) {
                if (+step < prevArray.length-1) {
                    text2.value = prevArray[+step + 1];
                    w = false
                }else {
                    btnNext.style.visibility = 'hidden'
                }
            }
        }
    }

    // let nextArray = JSON.parse(JSON.stringify(localArray));
    // btnNext.onclick = () => {
    //     let steps = nextArray.length;
    //     console.log('steps', steps);
    //     text2.value = nextArray[0];
    //     nextArray.length > 1 ? nextArray.splice(0, 1) : btnNext.style.visibility = 'hidden';
    //     console.log(nextArray)
    // }
}


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// //

//************************************************************

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// window.open('https://owu.com.ua');
// window.close();
// window.moveTo(100,100);
// window.resizeTo(100,100);
// //SCREEN
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
//
//
// // NAVIGATOR
// // ВНИМАНИЕ!!!
// //     Информация из объекта navigator может вводить в заблуждение. Ее не следует использовать для определения версии браузера, так как:
// //
// //     разные браузеры могут использовать одно и то же имя
// // данные объекта navigator могут изменяться владельцем браузера
// // некоторые браузеры дают неверные идентификаторы о себе, чтобы обходить проверку сайтов
// // браузеры не могут сообщать о новых операционных системах, вышедших после самих браузеров
//
// console.log(navigator.platform);
// console.log(navigator.language);
// console.log(navigator.languages);
// console.log(navigator.onLine);
// console.log(navigator.maxTouchPoints);
// console.log(navigator.hardwareConcurrency);
//
// navigator.getBattery().then(value => {
// 	console.log(value);
// });
// navigator.geolocation.getCurrentPosition(position => {
// 	console.log(position.coords);
// });
// navigator.geolocation.watchPosition()
// console.log(window.navigator.mediaDevices);
// navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
// 	let video = document.getElementById('video');
// 	video.srcObject = stream;
// 	video.play();
// }).catch(function (e) {
// 	alert('а камера то есть?');
// 	console.log('Проблемка: ' + e.message);
// });


// navigator.mediaDevices.getUserMedia({audio: true}).then(function (stream) {
//     var audio = new Audio();
//     audio.srcObject = stream;
//     let audioBlock = document.getElementById('audio');
//     audio.play();
// });


// LOCATION
// console.log(location.host);
// console.log(location.href); // url path file
// console.log(location.pathname); // os path of file
// console.log(location.protocol); // http or https or ftp
// history.forward();
// history.back();

//========
// setTimeout(function () {
// 	console.log('hello');
//
// }, 2000);
//
// setInterval(function () {
//
// 	console.log('hello interval');
// }, 200);