document.getElementById('btn-deposit').addEventListener('click', function () {
    //    deposit your money to account
    const inputDepositValue = inputValueId('deposit-input');
    const textDepositMoney = innerTextId('Deposit-money');
    const textDepositBalance = innerTextId('balance');
    const depositAddFunctionDeposit = totalAdd(inputDepositValue, textDepositMoney);
    const depositAddFunctionBalance = totalAdd(inputDepositValue, textDepositBalance);
    replaceToCurrentMoney('Deposit-money', depositAddFunctionDeposit);
    replaceToCurrentMoney('balance', depositAddFunctionBalance);

})