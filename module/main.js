import { Storage, idr } from "./storage.mjs";

const v = document.getElementById('value');
const totalBalance = document.getElementById('totalBalance');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const incomeBtn = document.getElementById('incomeBtn');
const expenseBtn = document.getElementById('expenseBtn');

let Wallet = new Storage();

function update(){
    totalBalance.textContent = idr(Wallet.balance);
    totalIncome.textContent = idr(Wallet.income);
    totalExpense.textContent = idr(Wallet.expense);
}

incomeBtn.addEventListener('click', () => {
    const value = parseFloat(v.value);
    if(!isNaN(value) && value !== null){
        Wallet.addIncome(value);
        Wallet.addItem(value, 'income');
        update();
        v.value = '';
    } else {
        alert('MASUKIN DUIT YANG BENER KONTOL')
        v.value = ''
    }
})
expenseBtn.addEventListener('click', () => {
    const value = parseFloat(v.value);
    if(!isNaN(value) && value !== null){
        Wallet.addExpense(value);
        Wallet.addItem(value, 'expense');
        update();
        v.value = '';
    } else {
        alert('MASUKIN DUIT YANG BENER KONTOL');
        v.value = '';
    }
})
update();