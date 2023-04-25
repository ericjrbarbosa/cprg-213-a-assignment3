/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Full ($35) cost by default.
let costPerDay = 35;

// Defaults to 0 since no day is selected initially.
let numberOfDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");

function addClickEventListener(element) {
  element.addEventListener("click", function () {
    if (!element.classList.contains("clicked")) {
      element.classList.add("clicked");
      numberOfDays++;

      calculateCost();
    }
  });
}

addClickEventListener(mondayButton);
addClickEventListener(tuesdayButton);
addClickEventListener(wednesdayButton);
addClickEventListener(thursdayButton);
addClickEventListener(fridayButton);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function () {
  mondayButton.classList.remove("clicked");
  tuesdayButton.classList.remove("clicked");
  wednesdayButton.classList.remove("clicked");
  thursdayButton.classList.remove("clicked");
  fridayButton.classList.remove("clicked");

  numberOfDays = 0;
  costPerDay = 35;

  calculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById("half");
const fullButton = document.getElementById("full");

halfButton.addEventListener("click", function () {
  costPerDay = 20;

  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");

  calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function () {
  costPerDay = 35;

  halfButton.classList.remove("clicked");
  fullButton.classList.add("clicked");

  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculatedCostElement = document.getElementById("calculated-cost");

function calculateCost() {
  calculatedCostElement.innerHTML = costPerDay * numberOfDays;
}
