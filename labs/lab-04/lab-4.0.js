const readline = require('readline-sync');

const bankAccountA = {
    accountNumber: '123',
    routingNumber: '111',
    balance: 9999
}

const bankAccountB = JSON.parse(JSON.stringify(bankAccountA));
bankAccountB.accountNumber = '789';

const bankAccounts = [bankAccountA, bankAccountB];

bankApp();

function bankApp() {
    const userSelection = Number(readline.question('Please select option 1. Check Account information 2. Withdrawn money : '));
    switch (userSelection) {
        case 1:
            const foundAccount = findAccountNumber();
            if (foundAccount) {
                logAccountInfo(foundAccount);
            } else {
                console.log('Bank account number does not exist');
            }
            break;
        case 2:
            withdrawnMoney();
            break;
        default:
            console.log('Invalid option');
    }
}

function findAccountNumber() {
    const userAccNumber = getUserNumber();
    for (const account of bankAccounts) {
        if (userAccNumber === account.accountNumber) {
            return account;
        }
    }
    return null;
}

function withdrawnMoney() {
    const foundAccount = findAccountNumber();
    if (foundAccount) {
        logAccountInfo(foundAccount);

        const withdrawNumber = getWithdrawNumber();
        if (withdrawNumber <= foundAccount.balance) {
            foundAccount.balance -= withdrawNumber;
            console.log(`New Account balance: ${foundAccount.balance}`);
        } else {
            console.log('Insufficient balance to withdrawn');
        }
    }
    else {
        console.log('Bank account number does not exist');
    }
}

function logAccountInfo(account) {
    console.log(`Account number: ${account.accountNumber}`);
    console.log(`Account balance: ${account.balance}`);
}

function getUserNumber() {
    return readline.question('Please input account number:  ');
}

function getWithdrawNumber() {
    return Number(readline.question('Please input the number you want to withdrawn:  '));
}