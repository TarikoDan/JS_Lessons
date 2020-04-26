// Створити карту користувача UserCard
class Operation {
    constructor(type,credits,time){
        this.type = type;
        this.credits = credits;
        this.time = time
    }
}
let userCard = function (userName,numCard) {
    const key = numCard;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let transactionsCount = 0;
    let getCardOptions = function () {
        let cardInfo =  {key,balance,transactionLimit,transactionsCount,historyLogs};
        console.log(`User- ${userName}: Card${key}`,cardInfo);
        console.log('****************************************');
        return cardInfo
    };
    let putCredits = function (credit) {
        if (transactionsCount < transactionLimit) {
            balance += credit;
            transactionsCount++;
            let operation = new Operation('putCredits',credit,new Date().toLocaleString());
            historyLogs.push(operation)
        }else {console.warn('Transactions limit has been exhausted, \n' +
            'try to enlarge the limit...')}
    };
    let takeCredits = function (credit) {
        if (balance >= credit) {
            if (transactionsCount < transactionLimit) {
                balance = Math.round(balance - credit);
                transactionsCount++;
                let operation = new Operation('takeCredits',credit,new Date().toLocaleString());
                historyLogs.push(operation)
            }else {console.warn('Transactions limit has been exhausted, \n' +
                'try to enlarge the limit...')}
        }else {console.warn('not enough money, Put Credits...')}
    };
    let setTransactionsLimit = function (limit) {
        transactionLimit = limit;
        let operation = new Operation('setTransactionsLimit',limit,new Date().toLocaleString());
        historyLogs.push(operation)
    };
    let transferCredits = function (credit,cardX) {
        if (balance > credit*1.005) {
            if (transactionsCount < transactionLimit) {
                cardX.putCredits(credit);
                this.takeCredits(credit*1.005);
            }else {console.warn('Transactions limit has been exhausted, \n' +
                'try to enlarge the limit...')}
        }else {console.warn('not enough money, Put Credits...')}
    };
    let card = {getCardOptions,putCredits,takeCredits,setTransactionsLimit,transferCredits};

    return card
};

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = new Array(3)
    }
    addCard(num){
        if (this.cards[num-1]) {
            console.warn('Сard with this number already exists!')
        }else{
            num <= 3
                ? console.log(`Card ${num} has been added`)
                : console.warn(`${this.name} can only have 3 cards`);
            this.cards[num-1] = userCard(this.name,num);
            this.cards.length = 3
        }


    }
    getCardByKey(num) {
        if (this.cards[num-1]) {
            return this.cards[num-1]
        }else{
            console.warn('No card with this number!')
        }
    }
}

//*****************************************************************************

// let user1 = new UserAccount('Taras');
// console.log(user1);
// user1.addCard(1);
// const user1Card1 = user1.getCardByKey(1);
// user1.addCard(2);
// const user1Card2 = user1.getCardByKey(2);
// user1Card1.getCardOptions();
// console.log('*****************************************************')
//
//
// function user1Card1put1() {
//     setTimeout(() => {
//         console.log('=>>card1: putting 500');
//         user1Card1.putCredits(500);
//         user1Card1.getCardOptions();
//     },1000)
// };
// function user1Card1take1() {
//     setTimeout(() => {
//         console.log('<<=card1: taking 1500');
//         user1Card1.takeCredits(1500);
//         user1Card1.getCardOptions();
//
//     },2000)
// };
// function user1Card1put2() {
//     setTimeout(() => {
//         console.log('=>>card1: putting 1000');
//         user1Card1.putCredits(1000);
//         user1Card1.getCardOptions();
//     },3000)
// };
// function user1Card2take1() {
//     setTimeout(() => {
//         console.log('<<=card2: taking 1500');
//         user1Card2.takeCredits(1500);
//         user1Card2.getCardOptions()
//     },4000)
// };
// function user1Card1transfer1() {
//     setTimeout(() => {
//         console.log('card1 =>> card2: transferring 1400');
//         user1Card1.transferCredits(1400,user1Card2);
//         user1Card1.getCardOptions();
//         user1Card2.getCardOptions()
//     }, 5000)
// }
// function user1Card2take2() {
//     setTimeout(() => {
//         console.log('<<=card2: taking 1000');
//         user1Card2.takeCredits(1500);
//         user1Card2.getCardOptions()
//     },6000)
// };
//
// user1Card1put1();
// user1Card1take1();
// user1Card1put2();
// user1Card2take1();
// user1Card1transfer1();
// user1Card2take2();

//*****************************************************************************

let test = new UserAccount('Test');
test.addCard(1);
const card1 = test.getCardByKey(1);
test.addCard(2);
const card2 = test.getCardByKey(2);
card1.getCardOptions();
console.log('*****************************************************')


function card1Take1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('<<=card1: taking 1000');
            card1.takeCredits(1000);
            resolve(card1.getCardOptions());
        }, 1000)
    })
};
let card1SetLimit = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('<<--card1-->>: setting Limits');
            (card1.setTransactionsLimit(2));
            resolve (card1.getCardOptions())

        },2000)
    })
};
let card1Put = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('=>>card1: putting 1000');
            (card1.putCredits(1500));
            resolve (card1.getCardOptions())

        },3000)
    })
};
let card1Take2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('<<=card1: taking 1000');
            (card1.takeCredits(1000));
            resolve (card1.getCardOptions())

        }, 4000)
    })
};
function card2Take1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('<<=card2: taking 500');
            card2.takeCredits(500);
            resolve(card2.getCardOptions());
        }, 5000)
    })
};
function card1transfer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('card1 =>> card2: transferring 400');
            card1.transferCredits(400,card2);
            card1.getCardOptions();
            card2.getCardOptions()
        }, 6000)
    })
}


// async function oneDayCard1 () {
//     card1.getCardOptions();
//     try {
//         await card1Take1();
//         await card1SetLimit();
//         await card1Put();
//         await card1Take2();
//         await card2Take1();
//         await card1transfer();
//
//     }
//     catch (err) {
//         console.warn(err)
//     }
//
//     console.log('******************end*******************')
// }
// oneDayCard1();

//***********************************************************************

card1Take1()
    .then (card1SetLimit)
    .then(card1Put)
    .then(card1Take1)
    .then (card1Take2)
    .then (card2Take1)
    .then (card1transfer)
    .catch(console.error);






