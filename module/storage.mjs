export class Storage {
    constructor(){
        this.balance = 0;
        this.income = 0;
        this.expense = 0;
    }
    addIncome(value){
        this.balance += value;
        this.income += value;
    }
    addExpense(value){
        this.balance -= value;
        this.expense += value;
    }
    addItem(value, type){
        const row = document.createElement('tr');
        const itemList = document.getElementById('itemList');
        
        const valueData = document.createElement('td');
        valueData.textContent = idr(value);
        valueData.classList.add('table-costum')
        
        const dateData = document.createElement('td');
        const currentDate = new Date();
        dateData.textContent = currentDate.toLocaleDateString();
        dateData.classList.add('table-costum')
    
        row.appendChild(valueData);
        row.appendChild(dateData);

        itemList.appendChild(row);

        if (type === 'income'){
            row.classList.add('table-income');
        } else if (type === 'expense') {
            row.classList.add('table-expense');
        }
    }
}

export function idr(value) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}
