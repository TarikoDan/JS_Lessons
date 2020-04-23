// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
let timeout = 0;

function wakeUp(time, deadLine, cb) {
    time < 12 ? console.log(time + ' am') : console.log(time + ' pm');
    time < deadLine ? timeout = 1000 : timeout = 0;
    setTimeout(() => {
        if (time < deadLine) {
            console.log('Slept Well!!! Good morning!! Have a nice Day!');
            console.log(`Awakening can take ${deadLine - time} hours`);
            cb(null, time, deadLine)
        } else {
            console.log('Hurry up!!!');
            cb(`You late!!! It's already ${time} am!`, time, deadLine)
        }
    }, timeout)
}

function breakfast(time, deadline, cb) {
    time < deadline ? timeout = (deadline - time) * 1000 : timeout = 0;
    setTimeout(() => {
        if ((deadline - time) >= 0.5) {
            console.log('Bon appetit!');
            console.log(`You have ${deadline - time} hour for breakfast`);
            cb(null, time, deadline)
        } else if ((deadline - time) <= 0.5 && (deadline - time) > 0.2) {
            console.log("You haven't enough time for breakfast");
            console.log(`You have only ${(Math.floor((deadline - time) * 60))} min !`);
            cb(null, time, deadline)
        } else {
            console.log("You haven't any time for breakfast");
            cb(`Eat quickly!!! It's already ${time} am!`, time, deadline)
        }
    }, timeout)
}

function goToOrFromWork(time, deadline, cb) {
    timeout = (deadline - time) > 0.5 ? (deadline - time) * 1000 : 500;
    setTimeout(() => {
        if ((deadline - time) > 0.5) {
            console.log(`You have enough time for walking(${Math.round(deadline - time) * 60} min)`);
            console.log('Get on the BUS or ride bike');
            cb(null, time, deadline)
        } else {
            console.log("You haven't enough time (((");
            cb('You must take TAXI', time, deadline)
        }
    }, timeout)
}

function working(time, timeOn, cb) {
    setTimeout(() => {
        if ((time - timeOn) <= 0.5) {
            console.log('Have a good Work!');
            cb(null, time,timeOn)
        } else {
            console.log(`You are ${Math.round((time - timeOn) * 10) / 10} hour late`);
            cb('Work without breaks', time,timeOn)
        }
    }, 2500)
}

function coffeeBreak(time, timeOn, cb) {
    timeout = ((timeOn - time) >= 0.25) ? 250 : 0;
    setTimeout(() => {
        if ((timeOn - time) >= 0.25) {
            console.log("It's COFFEE time!!");
            console.log(`enjoy your coffee for ${Math.round(timeOn - time) * 60} min`);
            cb(null, time,timeOn)
        } else {
            console.log("You lost your time for coffee");
            cb('...must work Hardly', time,timeOn)
        }
    }, timeout)
}

function lunch(time, cb) {
    console.log('Time for Lunch!!!');
    let isForgotten = Math.round(Math.random());
    setTimeout(() => {
        if (isForgotten === 0) {
            console.log('Go warm your Lunch & enjoy its');
            cb(null, time)
        } else {
            console.log('you forgot your Lunch...(((');
            cb('let buy pizza', time)
        }
    }, 1000)
}

function studying (time,deadline,cb) {
    timeout = (deadline > time) ? (deadline - time)*1000 : 0;
    setTimeout(() => {
        if ((deadline - time) > 0.5) {
            console.log('Start studying');
            cb(null,time,deadline)
        }else {
            console.log("it's too late for studying");
            cb('go to sleep, maybe tomorrow...',time,deadline)
        }
    },timeout)
}

function dinner (time,cb) {
    console.log("I'm hungry, make dinner!");
    let emptyFridge = Math.round(Math.random());
    timeout = emptyFridge ? 2000 : 1000;
    setTimeout(() => {
        if (emptyFridge) {
            console.log('Fuck, fridge is empty...');
            cb('Go to the market now', time)
        }else {
            console.log("O'key, lets dinner, mmmm!!!!");
            cb(null,time)
        }
    },timeout)
}

//****************************************************************

wakeUp(7, 8, (late, time, deadline) => {
    if (late) {
        console.log(late)
    } else {
        time = (time < deadline) ? deadline : time
    }
    console.log(time);
    breakfast(time, deadline + 0.5, (late, time, deadline) => {
        if (late) {
            console.log(late);
            time += 0.2
        } else {
            time = ((deadline - time) <= 0.5 && (deadline - time) > 0.2) ? deadline : time + 0.2
        }
        console.log(time);
        goToOrFromWork(time, deadline + 1.5, (late, time, deadline) => {
            if (late) {
                console.log(late);
                time += 0.5
            } else {
                time = (time < deadline) ? deadline : time
            }
            console.log(time);
            working(time + 2.5, deadline + 2.5, (late, time,timeOn) => {
                late ? console.log(late) : false;
                console.log(time);
                coffeeBreak( time,timeOn + 0.25,(late, time,timeOn) => {
                    late ? console.log(late) : time += 0.25;
                    console.log(time);
                    working(time + 2.5, timeOn + 2.5, (late, time,timeOn) => {
                        late ? console.log(late) : false;
                        console.log(time);
                        lunch(time + 1, (err, time) => {
                            timeOn++;
                            err ? console.log(err) : false;
                            console.log(time);
                            working(time + 2.75, timeOn + 2.75, (late, time,timeOn) => {
                                late ? console.log(late) : false;
                                console.log(time);
                                goToOrFromWork(time, timeOn + 1, (late, time, deadline) => {
                                    if (late) {
                                        console.log(late);
                                        time += 0.5
                                    } else {
                                        time += 1
                                    }
                                    console.log(time);
                                    dinner(time,(err,time) => {
                                        deadline++;
                                        if (err) {
                                            console.log(err);
                                            time +=2
                                        } else {
                                            time++
                                        }
                                        console.log(time);
                                        studying(time,deadline + 2,(late,time,deadline) => {
                                            late ? console.log(late) : time = deadline;
                                            console.log(time);
                                            console.log('brush teeth & go sleep,');
                                            console.log('Good night...')
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});


