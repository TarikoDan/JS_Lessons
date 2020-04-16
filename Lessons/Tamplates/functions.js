let user1 = [1,2,3,4,[5,6,7,8,[1,2,3,4,5]]]
let arrayTotalElementsAmount = (array) => {
    let sum = array.length;
    for (const element of array) {
        if (typeof element === 'object') {
            sum += arrayTotalElementsAmount(element);
        }
    }
    return sum
};
console.log(arrayTotalElementsAmount(user1));

let objectTotalKeysAmount = (object) => {
    let sum = 0;
    for (const objectKey in object) {
        sum +=1;
        if (typeof object[objectKey] === 'object') {
            sum += objectTotalKeysAmount(object[objectKey]);
        }
    }
    return sum
};
console.log(objectTotalKeysAmount(user1))


function namedObjectToDivs(object,name,h,father) {
    let boxObject = document.createElement('div');
    boxObject.classList.add(name);
    boxObject.style.padding = '0 20px';
    father.appendChild(boxObject);
    for (const key in object) {
        if (key === name ){
            let keyTitle = document.createElement('span');
            keyTitle.innerText = key;
            keyTitle.style.textDecoration = 'underline';
            boxObject.appendChild(keyTitle);
            let nameTitle = document.createElement(`h${h}`);
            nameTitle.innerText = object[key];
            nameTitle.style.marginTop = '0.1rem';
            boxObject.appendChild(nameTitle)
        }else if (typeof object[key] === 'object'){
            // let divProp = document.createElement('div');
            // divProp.classList.add(key)
            // divProp.innerText = `${key}:  `;
            // boxObject.appendChild(divProp)
            divProperty(key,'',boxObject);
            namedObjectToDivs(object[key],'name',h+1,father)
        }else {
            divProperty(key,object,boxObject)
        }
    }
}


function randomRGBa20() {
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    return `rgba(${r},${g},${b},0.2)`
}


function openObjectToDiv (object,container) {
    if (typeof object === 'object') {
        for (const key in object) {
            typeof object[key] !== 'object'
                ? container.innerText += `${key}: ${object[key]}; `
                : openObject(object[key],container)
        }
    }
}
