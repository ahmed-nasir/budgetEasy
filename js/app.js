// calculate total expenses
function calculateExpanses() {
    const food = document.getElementById('food');
    const foodValue = parseFloat(food.value);

    const rent = document.getElementById('rent');
    const rentValue = parseFloat(rent.value);

    const cloths = document.getElementById('cloths');
    const clothsValue = parseFloat(cloths.value);


    // 
    const totalExpenses = document.getElementById('totalExpanses');


    // console.log(totalExpenses);
    // calculate total expenses
    if (foodValue >= 0 && rentValue >= 0 && clothsValue >= 0) {
        const totalExp = foodValue + rentValue + clothsValue;
        // push vlaue to totalExpance innertext
        totalExpenses.innerText = totalExp;
    } else {
        document.getElementById("err-1").style.display = "block";
        // console.log('console Error');
    }
    const totalExpansesValue = parseFloat(totalExpenses.innerText);

    return totalExpansesValue;
}

// calculete balance 
function calculateBalance() {
    const income = document.getElementById('income');
    const incomeValue = income.value;
    const incomeValueFloat = parseFloat(incomeValue);

    const balance = document.getElementById('blance');
    let finalTotalBal = 0;
    // calculate balance & validation
    if (incomeValueFloat >= 0) {
        const totalBalance = incomeValueFloat - calculateExpanses();

        // push vlaue to balance innertext
        finalTotalBal = totalBalance;
        // console.log(balance.innerText);

    } else {
        document.getElementById("income-Error").style.display = "block";
    }

    // parse value into float number & put it in balanceValue

    if (finalTotalBal >= 0) {
        balance.innerText = finalTotalBal;
        // console.log('fianlTotalBal worked!')
        const balanceValue = parseFloat(balance.innerText);
        return balanceValue;
    } else {
        console.log('Insuficient income to spend');
        balance.style.display = "none";

        document.getElementById("bal-error").style.display = "block";
    }

}


// calculatae saving amount
function savings() {
    // input field value
    const wantToSave = document.getElementById('want-to-save');
    const wantToSaveValue = wantToSave.value;
    const wantToSaveValueFloat = parseFloat(wantToSaveValue);

    // icome 
    const income = document.getElementById('income');
    const incomeValue = income.value;
    const incomeValueFloat = parseFloat(incomeValue);

    let savingCalculation = 0;
    // clacutaion
    if (wantToSaveValueFloat <= 100) {

        savingCalculation = incomeValueFloat * (wantToSaveValueFloat / 100);
    } else {
        document.getElementById('saving-Error').style.display = 'block'

    }

    // html element value
    const savingAmount = document.getElementById('savingAmount');
    savingAmount.innerText = savingCalculation;

    return savingCalculation
}

// Calculate remaining balance 
function remainingBalance() {

    const balance = calculateBalance();
    const fromSavings = savings()
    if (fromSavings >= balance) {

        document.getElementById('saving-Error-2').style.display = 'block'
        document.getElementById('savingAmount').innerText = '';
    } else {
        const remainingBal = document.getElementById('remainingBalance');

        remainingBal.innerText = balance - fromSavings;
    }

}

// add Event listener to calculate btn
document.getElementById('expenseCalcBtn').addEventListener('click', function () {
    // get input
    /*  const food = document.getElementById('food');
     const foodValue = parseFloat(food.value);
 
     const rent = document.getElementById('rent');
     const rentValue = parseFloat(rent.value);
 
     const cloths = document.getElementById('cloths');
     const clothsValue = parseFloat(cloths.value); */

    // call claculateBalance fucntion
    calculateBalance();
    // call calculateExpanses function
    calculateExpanses();

});

// add event listener to save button
document.getElementById('saveBtn').addEventListener('click', function () {
    // call savings function to calculate saving
    savings();

    // call remainign balance to calculate remaining balance 
    remainingBalance();

});