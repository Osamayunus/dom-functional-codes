document.getElementById('withdraw-btn').addEventListener('click', function () {
    // ending of deposit
    const textDepositBalance = innerTextId('balance');
    const withdrawTextField = innerTextId('withdraw-money');
    const inputWithdraw = inputValueId('input-withdraw');
    const addTotalWithdraw = totalAdd(withdrawTextField, inputWithdraw);
    replaceToCurrentMoney('withdraw-money', addTotalWithdraw)
    const reduceFromCurrent = totalOdd(textDepositBalance, inputWithdraw);
    replaceToCurrentMoney('balance', reduceFromCurrent)

    // starting of withdraw part
})