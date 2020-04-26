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

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = new Array(3)
    }
    addCard(num){
        if (this.cards[num-1]) {
            console.warn('Сard with this number already exists!')
        }else{
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
let tod = new UserAccount('Tod');

console.log(tod);
tod.addCard(1);
const todCard1 = tod.getCardByKey(1);
todCard1.putCredits(1000);
console.log('ad1');
todCard1.getCardOptions();
console.log(tod);
tod.addCard(2);
const todCard2 = tod.getCardByKey(2);
console.log('ad2');
todCard2.putCredits(1000);
todCard2.transferCredits(500,todCard1);
todCard1.getCardOptions();
todCard2.getCardOptions();
tod.addCard(4)
console.log(tod)
console.log('*******************************************************')
console.log('*******************************************************')

// function card3Take1 ()  {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             card3.takeCredits(1000);
//             resolve (card3.getCardOptions());
//         },1000)
//     })
// }
// let card3SetLimit = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             (card3.setTransactionsLimit(2));
//             resolve (card3.getCardOptions())
//
//         },2000)
//     })
// };
// let card3Put = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             (card3.putCredits(1000));
//             resolve (card3.getCardOptions())
//
//         },3000)
//     })
// };
// let card3Take2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             (card3.takeCredits(1000));
//             resolve (card3.getCardOptions())
//
//         }, 4000)
//     })
// };
// async function oneDayCard3 () {
//     card3.getCardOptions();
//     try {
//          await card3Take1();
//          await card3SetLimit();
//          await card3Put();
//          await card3Take2()
//     }
//     catch (err) {
//         console.warn(err)
//     }
//     await card3Take1();
//     await card3SetLimit();
//     await card3Put();
//     await card3Take2();
//     console.log('************************************')
// }
// oneDayCard3();  // ??? Чому блок кетч запускає функції? а не просто відловлює помилки...спрацьовує лічильник.
                // ??? Чому некоректна поведінка card3SetLimit - чому він запускається першим?
// card3Take1()
//     .then(card3SetLimit)
//     .then(card3Put)
//     .then(card3Take1)
//     // .catch(console.error)






