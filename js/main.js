//First item start here...
// first plus button event handler
const plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", function() {
  const currentPhoneQty = document.getElementById("currentPhoneQty").value++;
  const phonePrice = document.getElementById("phonePrice").innerText;
  const phonePriceNum = parseFloat(phonePrice);
  const priceAmount = phonePriceNum + 1219;

  document.getElementById("phonePrice").innerText = priceAmount;

  const subTotal = document.getElementById("subTotal").innerText;
  const firstTotal = parseFloat(subTotal);
  const firstTotalAmount = firstTotal + 1219;

  document.getElementById("subTotal").innerText = firstTotalAmount;
  document.getElementById("netPayable").innerText = firstTotalAmount;
});

// first minus button event handler

const minusButton = document.getElementById("minusButton");
minusButton.addEventListener("click", function() {
  const currentPhoneQty = document.getElementById("currentPhoneQty");
  if (currentPhoneQty.value <= 0 && minusValue <= 0) {
    currentPhoneQty.value = 0;
    minusValue = 0;
  } else {
    currentPhoneQty.value--;
  }
  const phonePrice = document.getElementById("phonePrice").innerText;
  const phonePriceNum = parseFloat(phonePrice);
  const phoneMinusAmount = phonePriceNum - 1219;

  document.getElementById("phonePrice").innerText = phoneMinusAmount;

  const subTotal = document.getElementById("subTotal").innerText;
  const firstTotal = parseFloat(subTotal);
  const minusValue = firstTotal - 1219;

  document.getElementById("subTotal").innerText = minusValue;
  document.getElementById("netPayable").innerText = minusValue;
});

// First item end here...

// Second item start Here...

// Second plus button event handler
const plusBtn2 = document.getElementById("plusButton2");
plusBtn2.addEventListener("click", function() {
  const currentCaseQty = document.getElementById("currentCaseQty").value++;
  const casePrice = document.getElementById("casePrice").innerText;
  const casePriceNum = parseFloat(casePrice);
  const casePriceAmount = casePriceNum + 59;

  document.getElementById("casePrice").innerText = casePriceAmount;

  const subTotal = document.getElementById("subTotal").innerText;
  const firstTotal = parseFloat(subTotal);
  const totalValue = firstTotal + 59;

  document.getElementById("subTotal").innerText = totalValue;
  document.getElementById("netPayable").innerText = totalValue;
});

// Second minus button event handler
const minusBtn2 = document.getElementById("minusButton2");
minusBtn2.addEventListener("click", function() {
  const currentCaseQty = document.getElementById("currentCaseQty");
  if (currentCaseQty.value <= 0 && minusValue2 <= 0) {
    currentCaseQty.value = 0;
    minusValue2 = 0;
  } else {
    currentCaseQty.value--;
  }
  const casePrice = document.getElementById("casePrice").innerText;
  const casePriceNum = parseFloat(casePrice);
  const minusCasePrice = casePrice - 59;

  document.getElementById("casePrice").innerText = minusCasePrice;

  const subTotal = document.getElementById("subTotal").innerText;
  const firstTotal = parseFloat(subTotal);
  const minusValue2 = firstTotal - 59;

  document.getElementById("subTotal").innerText = minusValue2;
  document.getElementById("netPayable").innerText = minusValue2;
});

//Remove item first

const remove = document.getElementById("remove");
remove.addEventListener("click", function() {
  const removePhoneItem = document.getElementById("phonePrice").innerText;
  const subTotal = document.getElementById("subTotal").innerText;
  const removeSubTotal = parseFloat(subTotal);
  const removeTotalAmount = removeSubTotal - removePhoneItem;

  document.getElementById("subTotal").innerText = removeTotalAmount;
  document.getElementById("netPayable").innerText = removeTotalAmount;

  const removeCart = document.getElementById("cart");
  removeCart.style.display = "none";
});

//Remove item second
const removeTwo = document.getElementById("removeTwo");
removeTwo.addEventListener("click", function() {
  const removeCaseItem = document.getElementById("casePrice").innerText;
  const subTotal = document.getElementById("subTotal").innerText;
  const firstTotal = parseFloat(subTotal);
  const removeCaseTotal = firstTotal - removeCaseItem;

  document.getElementById("subTotal").innerText = removeCaseTotal;
  document.getElementById("netPayable").innerText = removeCaseTotal;

  const removeCart = document.getElementById("cart2");
  removeCart.style.display = "none";
});
//Remove item End Here
