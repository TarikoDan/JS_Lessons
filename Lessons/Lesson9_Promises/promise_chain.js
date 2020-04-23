// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
// let timeout = 0;
//
function wakeUp(time, deadLine) {
    time < 12 ? console.log(time + ' am') : console.log(time + ' pm');
    return new Promise((resolve, reject) => {
        time < deadLine ? timeout = 1000 : timeout = 0;
        setTimeout(() => {
            if (time < deadLine) {
                console.log('Slept Well!!! Good morning!! Have a nice Day!');
                console.log(`Awakening can take ${deadLine - time} hours`);
                time = deadLine;
                resolve({time, deadLine})
            } else {
                console.log('Hurry up!!!');
                console.log(`You late!!! It's already ${time} am!`);
                resolve({time, deadLine})
            }
            console.log("wakeUp", time, deadLine)
        }, timeout)
    })
}

function breakfast(time, deadline) {
    console.log('----',time,deadline);
    return new Promise((resolve, reject) => {
        time < deadline ? timeout = (deadline - time) * 1000 : timeout = 0;
        setTimeout(() => {
            if ((deadline - time) >= 0.5) {
                console.log('Bon appetit!');
                console.log(`You have ${deadline - time} hour for breakfast`);
                time = deadline;
                resolve({time: time,deadline1: deadline})
            } else if ((deadline - time) <= 0.5 && (deadline - time) > 0.2) {
                console.log("You haven't enough time for breakfast");
                console.log(`You have only ${(Math.floor((deadline - time) * 60))} min !`);
                time += 0.2;
                resolve({time: time, deadline1: deadline})
            } else {
                console.log("You haven't any time for breakfast");
                console.log(`Eat quickly!!! It's already ${time} am!`);
                resolve({time: time, deadline1: deadline})
            }
            console.log("breakfast", time, deadline)
        }, timeout)
    })
}

function goToOrFromWork(time, deadline) {
    return new Promise((resolve, reject) => {
        let isBrokenLeg = Math.round(Math.random());
        timeout = (deadline - time) > 0.5 ? (deadline - time) * 1000 : 500;
        setTimeout(() => {
            if (isBrokenLeg) {
                console.log('what a terrible day\n' +
                    'I have to go to the hospital');
                reject('Fuck!, Im broke my leg')
            } else {
                if ((deadline - time) > 0.5) {
                    console.log(`You have enough time for walking(${Math.round(deadline - time) * 60} min)`);
                    console.log('Get on the BUS or ride bike');
                    time = deadline;
                    resolve({time, deadlineW: deadline})
                } else {
                    console.log("You haven't enough time (((");
                    console.log('You must take TAXI');
                    time += 0.5;
                    resolve({time, deadlineW: deadline})
                }
                console.log("goWork", time, deadline)
            }
        }, timeout)
    })
}

function working(time, timeOn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ((time - timeOn) <= 0.5) {
                console.log('Have a good Work!');
                time += 2.5;
                resolve({time, timeOn})
            } else {
                console.log(`You are ${Math.round((time - timeOn) * 10) / 10} hour late`);
                console.log('Work without breaks');
                time += 2.5;
                resolve({time, timeOn})
            }
            console.log("working", time, timeOn)
        }, 2500)
    })
}

function coffeeBreak(time, timeOn) {
    return new Promise((resolve, reject) => {
        timeout = ((timeOn - time) >= 0.25) ? 250 : 0;
        setTimeout(() => {
            if ((timeOn - time) >= 0.25) {
                console.log("It's COFFEE time!!");
                console.log(`enjoy your coffee for ${Math.round(timeOn - time) * 60} min`);
                time += 0.25;
                resolve({time, timeOn})
            } else {
                console.log("You lost your time for coffee");
                console.log('...must work Hardly');
                resolve({time, timeOn})
            }
            console.log("coffeeBreak", time, timeOn)

        }, timeout)
    })

}

function lunch(time, timeOn) {
    console.log('Time for Lunch!!!');
    return new Promise((resolve, reject) => {
        let isForgotten = Math.round(Math.random());
        setTimeout(() => {
            time++;
            if (isForgotten === 0) {
                console.log('Go warm your Lunch & enjoy its');
                resolve({time, timeOn})
            } else {
                console.log('you forgot your Lunch...(((');
                console.log('let buy pizza');
                resolve({time, timeOn})
            }
            console.log("lunch", time, timeOn)
        }, 1000)
    })

}

function studying(time, deadline) {
    return new Promise((resolve, reject) => {
        timeout = (deadline > time) ? (deadline - time) * 1000 : 0;
        setTimeout(() => {
            if ((deadline - time) > 0.5) {
                console.log('Start studying');
                time = deadline;
                resolve({time, deadline})
            } else {
                console.log("it's too late for studying");
                console.log('go to sleep, maybe tomorrow...');
                resolve({time, deadline})
            }
            console.log("studying", time, deadline)
        }, timeout)
    })
}

function dinner(time, end) {
    console.log("I'm hungry, make dinner!");
    return new Promise((resolve, reject) => {
        let emptyFridge = Math.round(Math.random());
        timeout = emptyFridge ? 2000 : 1000;
        setTimeout(() => {
            if (emptyFridge) {
                console.log('Fuck, fridge is empty...');
                console.log('Go to the market now');
                time += 2;
                resolve({time, end})
            } else {
                console.log("O'key, lets dinner, mmmm!!!!");
                time++;
                resolve({time, end})
            }
            console.log("dinner", time, end)
        }, timeout)
    })
}

//*************************************************************

let awake = +prompt('Enter awake time');
wakeUp(awake, 8)
    .then((res) => {
        return breakfast(res.time, res.deadLine + 0.5)
    })
    .then((res) => {
        return goToOrFromWork(res.time, res.deadline1 + 1.5)
    })
    .then((res) => {
        return working(res.time, res.deadlineW + 2.5)
    })
    .then((res) => {
        return coffeeBreak(res.time, res.timeOn + 0.5)
    })
    .then((res) => {
        return working(res.time, res.timeOn + 2.5)
    })
    .then((res) => {
        return lunch(res.time, res.timeOn + 1)
    })
    .then((res) => {
        return working(res.time, res.timeOn + 2.5)
    })
    .then((res) => {
        return goToOrFromWork(res.time, res.timeOn + 1)
    })
    .then((res) => {
        return dinner(res.time, res.deadlineW + 1)
    })
    .then((res) => {
        return studying(res.time, res.end + 2)
    })
    .then(() => {
        console.log('brush teeth & go sleep,');
        console.log('Good night...')
    })
    .catch(alert);

//****************************************************************************
//****************************************************************************
//****************************************************************************

// function wakeUp(time, deadLine,cb) {
//     time < 12 ? console.log(time + ' am') : console.log(time + ' pm');
//     time < deadLine ? timeout = 1000 : timeout = 0;
//     setTimeout(() => {
//         if (time < deadLine) {
//             console.log('Slept Well!!! Good morning!! Have a nice Day!');
//             console.log(`Awakening can take ${deadLine - time} hours`);
//             cb(null, time, deadLine)
//         } else {
//             console.log('Hurry up!!!');
//             cb(`You late!!! It's already ${time} am!`, time, deadLine)
//         }
//     }, timeout)
// }
//
// function breakfast(time, deadline, cb) {
//     time < deadline ? timeout = (deadline - time) * 1000 : timeout = 0;
//     setTimeout(() => {
//         if ((deadline - time) >= 0.5) {
//             console.log('Bon appetit!');
//             console.log(`You have ${deadline - time} hour for breakfast`);
//             cb(null, time, deadline)
//         } else if ((deadline - time) <= 0.5 && (deadline - time) > 0.2) {
//             console.log("You haven't enough time for breakfast");
//             console.log(`You have only ${(Math.floor((deadline - time) * 60))} min !`);
//             cb(null, time, deadline)
//         } else {
//             console.log("You haven't any time for breakfast");
//             cb(`Eat quickly!!! It's already ${time} am!`, time, deadline)
//         }
//     }, timeout)
// }
//
// function goToOrFromWork(time, deadline, cb) {
//     timeout = (deadline - time) > 0.5 ? (deadline - time) * 1000 : 500;
//     setTimeout(() => {
//         if ((deadline - time) > 0.5) {
//             console.log(`You have enough time for walking(${Math.round(deadline - time) * 60} min)`);
//             console.log('Get on the BUS or ride bike');
//             cb(null, time, deadline)
//         } else {
//             console.log("You haven't enough time (((");
//             cb('You must take TAXI', time, deadline)
//         }
//     }, timeout)
// }
//
// function working(time, timeOn, cb) {
//     setTimeout(() => {
//         if ((time - timeOn) <= 0.5) {
//             console.log('Have a good Work!');
//             cb(null, time,timeOn)
//         } else {
//             console.log(`You are ${Math.round((time - timeOn) * 10) / 10} hour late`);
//             cb('Work without breaks', time,timeOn)
//         }
//     }, 2500)
// }
//
// function coffeeBreak(time, timeOn, cb) {
//     timeout = ((timeOn - time) >= 0.25) ? 250 : 0;
//     setTimeout(() => {
//         if ((timeOn - time) >= 0.25) {
//             console.log("It's COFFEE time!!");
//             console.log(`enjoy your coffee for ${Math.round(timeOn - time) * 60} min`);
//             cb(null, time,timeOn)
//         } else {
//             console.log("You lost your time for coffee");
//             cb('...must work Hardly', time,timeOn)
//         }
//     }, timeout)
// }
//
// function lunch(time, cb) {
//     console.log('Time for Lunch!!!');
//     let isForgotten = Math.round(Math.random());
//     setTimeout(() => {
//         if (isForgotten === 0) {
//             console.log('Go warm your Lunch & enjoy its');
//             cb(null, time)
//         } else {
//             console.log('you forgot your Lunch...(((');
//             cb('let buy pizza', time)
//         }
//     }, 1000)
// }
//
// function studying (time,deadline,cb) {
//     timeout = (deadline > time) ? (deadline - time)*1000 : 0;
//     setTimeout(() => {
//         if ((deadline - time) > 0.5) {
//             console.log('Start studying');
//             cb(null,time,deadline)
//         }else {
//             console.log("it's too late for studying");
//             cb('go to sleep, maybe tomorrow...',time,deadline)
//         }
//     },timeout)
// }
//
// function dinner (time,cb) {
//     console.log("I'm hungry, make dinner!");
//     let emptyFridge = Math.round(Math.random());
//     timeout = emptyFridge ? 2000 : 1000;
//     setTimeout(() => {
//         if (emptyFridge) {
//             console.log('Fuck, fridge is empty...');
//             cb('Go to the market now', time)
//         }else {
//             console.log("O'key, lets dinner, mmmm!!!!");
//             cb(null,time)
//         }
//     },timeout)
// }
//
// //****************************************************************
//
// wakeUp(7, 8, (late, time, deadline) => {
//     if (late) {
//         console.log(late)
//     } else {
//         time = (time < deadline) ? deadline : time
//     }
//     console.log(time);
//     breakfast(time, deadline + 0.5, (late, time, deadline) => {
//         if (late) {
//             console.log(late);
//             time += 0.2
//         } else {
//             time = ((deadline - time) <= 0.5 && (deadline - time) > 0.2) ? deadline : time + 0.2
//         }
//         console.log(time);
//         goToOrFromWork(time, deadline + 1.5, (late, time, deadline) => {
//             if (late) {
//                 console.log(late);
//                 time += 0.5
//             } else {
//                 time = (time < deadline) ? deadline : time
//             }
//             console.log(time);
//             working(time + 2.5, deadline + 2.5, (late, time,timeOn) => {
//                 late ? console.log(late) : false;
//                 console.log(time);
//                 coffeeBreak( time,timeOn + 0.25,(late, time,timeOn) => {
//                     late ? console.log(late) : time += 0.25;
//                     console.log(time);
//                     working(time + 2.5, timeOn + 2.5, (late, time,timeOn) => {
//                         late ? console.log(late) : false;
//                         console.log(time);
//                         lunch(time + 1, (err, time) => {
//                             timeOn++;
//                             err ? console.log(err) : false;
//                             console.log(time);
//                             working(time + 2.75, timeOn + 2.75, (late, time,timeOn) => {
//                                 late ? console.log(late) : false;
//                                 console.log(time);
//                                 goToOrFromWork(time, timeOn + 1, (late, time, deadline) => {
//                                     if (late) {
//                                         console.log(late);
//                                         time += 0.5
//                                     } else {
//                                         time += 1
//                                     }
//                                     console.log(time);
//                                     dinner(time,(err,time) => {
//                                         deadline++;
//                                         if (err) {
//                                             console.log(err);
//                                             time +=2
//                                         } else {
//                                             time++
//                                         }
//                                         console.log(time);
//                                         studying(time,deadline + 2,(late,time,deadline) => {
//                                             late ? console.log(late) : time = deadline;
//                                             console.log(time);
//                                             console.log('brush teeth & go sleep,');
//                                             console.log('Good night...')
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


