
// MAP, FILTER, REDUCE

const names = [
    "Bella",
    "joohn",
    "Ethan",
    "Josh"
];

const usernames = [
    "porch",
    "doe",
    "hawk",
    "brolin"
];

const transactions = [
    {
        id: 1,
        name: "daniel",
        transaction_amount: 3000,
        transactionType: 'debit'
    },
    {
        id: 2,
        name: "daniel",
        transaction_amount: 30000,
        transactionType: 'credit'
    },
    {
        id: 3,
        name: "daniel",
        transaction_amount: 300000,
        transactionType: 'debit'
    },
    {
        id: 4,
        name: "daniel",
        transaction_amount: 560000,
        transactionType: 'credit'
    },
    {
        id: 5,
        name: "daniel",
        transaction_amount: 56000,
        transactionType: 'debit'
    }
]

const firstElements = transactions.reduce((accumulator, current) => {
    return accumulator + current.transaction_amount
}, 0);

function getCreditTransactions() {
    const creditTransactions = [];

    const filteredTransactions = transactions.filter((value, index) => {
        if (value.transactionType === 'debit') {
            return value;
        } else {
            creditTransactions.push(value);
        }
    })

    let acc = 0;
    const finalValue = filteredTransactions.map((item) => item.id)

    console.log(`credit transactions --------------------------------`)
    console.log(creditTransactions);
    console.log('----------------------------------------------------')
    return finalValue;
}

console.log(`Your total debit transaction is ${getCreditTransactions()}`);
