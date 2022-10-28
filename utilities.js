function innerTextId(fieldId) {
    const innerTextParent = document.getElementById(fieldId);
    const innerValueString = innerTextParent.innerText;
    const innerTextValue = parseFloat(innerValueString);
    return innerTextValue;
}
function inputValueId(inputId) {
    const inputValueParent = document.getElementById(inputId);
    const inputValueString = inputValueParent.value;
    const inputValue = parseFloat(inputValueString);
    inputValueParent.value = '';
    return inputValue;
}
function totalAdd(valueId1, valueId2) {
    const totalMoney = valueId1 + valueId2;
    return totalMoney;

}
function totalOdd(valueId1, valueId2) {
    const totalMoney = valueId1 - valueId2;
    return totalMoney;
}
function replaceToCurrentMoney(fieldId, value) {
    const newBalance = document.getElementById(fieldId);
    newBalance.innerText = value;
}
