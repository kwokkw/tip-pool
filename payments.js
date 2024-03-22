let billAmtInput = document.getElementById("billAmt");
let tipAmtInput = document.getElementById("tipAmt");
let paymentForm = document.getElementById("paymentForm");

let paymentTbody = document.querySelector("#paymentTable tbody");
let summaryTds = document.querySelectorAll("#summaryTable tbody tr td"); // Obj

let allPayments = {}; // Empty obj
let paymentId = 0;

paymentForm.addEventListener("submit", submitPaymentInfo);

// Add a curPayment object to allPayments, update html and reset input values
function submitPaymentInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let curPayment = createCurPayment(); // returning an object

  if (curPayment) {
    paymentId += 1;

    // Dynamically assigns `curPayment` obj to a payment property of `allPayments` object
    allPayments["payment" + paymentId] = curPayment;

    appendPaymentTable(curPayment);
    updateServerTable();
    updateSummary();

    billAmtInput.value = "";
    tipAmtInput.value = "";
  }
}

// createCurPayment() will return undefined with negative or empty inputs
// positive billAmt is required but tip can be 0
function createCurPayment() {
  let billAmt = billAmtInput.value; // string
  let tipAmt = tipAmtInput.value; // string

  if (billAmt === "" || tipAmt === "") return;

  // `Number()` function used to convert string value to numberic value before performing numerical comparisons.
  if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {
    // Returning an object
    return {
      billAmt: billAmt,
      tipAmt: tipAmt,
      tipPercent: calculateTipPercent(billAmt, tipAmt),
    };
  }
}

// Create table row element and pass to appendTd with input value
function appendPaymentTable(curPayment) {
  let newTr = document.createElement("tr");
  // Sets and assigns the id attribute of a newly created HTML element dinamically
  newTr.id = "payment" + paymentId;

  appendTd(newTr, "$" + curPayment.billAmt);
  appendTd(newTr, "$" + curPayment.tipAmt);
  appendTd(newTr, curPayment.tipPercent + "%");

  paymentTbody.append(newTr);
}

// Create table row element and pass to appendTd with calculated sum of all payment
function updateSummary() {
  let tipPercentAvg;
  let paymentTotal = sumPaymentTotal("tipPercent");
  let numberOfPayments = Object.keys(allPayments).length;
  // `Object.keys()` returns an array containing the keys (property names) of an object.
  // calculates the number of payments stored in the allPayments object by retrieving all the keys (property names) of the object and then determining the length of the resulting array of keys.

  if (paymentTotal === 0 && numberOfPayments === 0) {
    tipPercentAvg = 0;
  } else {
    tipPercentAvg = paymentTotal / Object.keys(allPayments).length;
  }

  summaryTds[0].innerHTML = "$" + sumPaymentTotal("billAmt");
  summaryTds[1].innerHTML = "$" + sumPaymentTotal("tipAmt");
  summaryTds[2].innerHTML = Math.round(tipPercentAvg) + "%";
}

/* 

In the `paymentForm.addEventListener("submit", submitPaymentInfo)`, that there are no parentheses () after submitPaymentInfo. Including parentheses would immediately invoke the function submitPaymentInfo and pass its return value to addEventListener. However, you want to pass a reference to the function itself, not the result of calling it.

If you were to add parentheses () after submitPaymentInfo like submitPaymentInfo(), it would execute the function submitPaymentInfo immediately, and whatever value it returns would be passed to addEventListener. This is not what you want when setting up an event listener.

reference to the function vs. invoke the function

*/
