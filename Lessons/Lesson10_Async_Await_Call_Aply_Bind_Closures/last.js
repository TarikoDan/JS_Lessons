// Створити карту користувача UserCard
class Operation {
    constructor(type,credits,time){
        this.type = type;
        this.credits = credits;
        this.time = time
    }
}
let userCard = function (num) {
    const key = num;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let transactionsCount = 0;

    let getCardOptions = function () {
        let cardInfo =  {key,balance,transactionLimit,transactionsCount,historyLogs};
        console.log(`Card${key}`,cardInfo);
        return cardInfo
    };
    let putCredits = function (credit) {
        balance += credit;
        transactionsCount++;
        let oparation = new Operation('putCredits',credit,new Date().toLocaleString());
        historyLogs.push(oparation)

    };
    let takeCredits = function (credit) {
        if (balance > credit) {
            if (transactionsCount < transactionLimit) {
                balance -= credit;
                transactionsCount++;
                let oparation = new Operation('takeCredits',credit,new Date().toLocaleString());
                historyLogs.push(oparation)
            }else {console.warn('Transactions limit has been exhausted, \n' +
                'try to enlarge the limit...')}
        }else {console.warn('not enough money, Put Credits...')}
    };
    let setTransactionsLimit = function (limit) {
        transactionLimit = limit;
        let oparation = new Operation('setTransactionsLimit',limit,new Date().toLocaleString());
        historyLogs.push(oparation)
    };
    let transferCredits = function (credit,cardX) {
        if (balance > credit*1.05) {
            if (transactionsCount < transactionLimit) {
                cardX.putCredits(credit);
                this.takeCredits(credit*1.05);
            }else {console.warn('Transactions limit has been exhausted, \n' +
                'try to enlarge the limit...')}
        }else {console.warn('not enough money, Put Credits...')}
    };
    let card = {getCardOptions,putCredits,takeCredits,setTransactionsLimit,transferCredits};

    return card
};

let card2 = userCard(2);
card2.putCredits(1000);
card2.takeCredits(100);
card2.setTransactionsLimit(10);
let card1 = userCard(1);
card2.transferCredits(500,card1);
card1.getCardOptions();
card2.getCardOptions();
console.log('*******************************************');

let card3 = userCard(3);

function card3Take1 ()  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            card3.takeCredits(1000);
            resolve (card3.getCardOptions());
        },1000)
    })
};
let card3SetLimit = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (card3.setTransactionsLimit(2));
            resolve (card3.getCardOptions())

        },2000)
    })
};
let card3Put = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (card3.putCredits(1000));
            resolve (card3.getCardOptions())

        },3000)
    })
};
let card3Take2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (card3.takeCredits(1000));
            resolve (card3.getCardOptions())

        }, 4000)
    })
};
async function oneDayCard3 () {
    card3.getCardOptions();
    try {
         await card3Take1();
         await card3SetLimit();
         await card3Put();
         await card3Take2()
    }
    catch (err) {
        console.warn(err)
    }
    await card3Take1();
    await card3SetLimit();
    await card3Put();
    await card3Take2();
    console.log('************************************')
}
oneDayCard3();  // ??? Чому блок кетч запускає функції? а не просто відловлює помилки...спрацьовує лічильник.

// card3Take1()
//     .then(card3SetLimit)
//     .then(card3Put)
//     .then(card3Take1)
//     // .catch(console.error)






