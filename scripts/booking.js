/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let DaySelected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, 
//and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const monday = document.getElementById("monday");
monday.addEventListener("click", function onclick(){

    monday.style.background = "#E5AF42";
    DaySelected++;
    
});

const tuesday = document.getElementById("tuesday");
tuesday.addEventListener("click", function onclick(){

    tuesday.style.background = "#E5AF42";
    DaySelected++;
    
});

const wednesday = document.getElementById("wednesday");
wednesday.addEventListener("click", function onclick(){

    wednesday.style.background = "#E5AF42";
    DaySelected++;
    
});

const thursday = document.getElementById("thursday");
thursday.addEventListener("click", function onclick(){

    thursday.style.background = "#E5AF42";
    DaySelected++;
    
});

const friday = document.getElementById("friday");
friday.addEventListener("click", function onclick(){

    friday.style.background = "#E5AF42";
    DaySelected++;
    
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
//any other relevant variables are reset, and the calculated cost is set to 0.
const clear = document.getElementById("clear-button");

clear.addEventListener("click", function onclick(){
    document.getElementById("monday").style.background = "";
    document.getElementById("tuesday").style.background = "";
    document.getElementById("wednesday").style.background = "";
    document.getElementById("thursday").style.background = "";
    document.getElementById("friday").style.background = "";
    document.getElementById("half").style.background = "";
    document.getElementById("full").style.background = "";


    DaySelected = 0;

    document.getElementById("calculated-cost").innerHTML = DaySelected;

});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, 
//add the "clicked" class to the "half" element, 
//remove it from the "full" element, and recalculate the total cost.

const half = document.getElementById("half");
half.addEventListener("click", function(){

//need to add the colour
    half.style.background = "#E5AF42";
    half.click = true;
    calculate();
});

  
// when the full-day button is clicked, the daily rate is set back to $35, 
//the clicked class is added to "full"
// and removed from "half", and the total cost is recalculated.

const full = document.getElementById("full");
full.addEventListener("click", function(){

    //need to add the colour
        full.style.background = "#E5AF42";
        full.click = true;
        calculate();
    });


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

//get the number of days selcect * 20 in the full button

function calculate(){
    const costLabel = document.getElementById("calculated-cost");
    let newTotal = 0;
    
    if(half.click == true){
        newTotal = DaySelected * 20;
        full.style.background = "";
        half.click = false;   
        
    } else if(full.click == true) {
        newTotal = DaySelected * 35; 
        half.style.background = "";
        full.click = false;
        
    }
    
    costLabel.innerHTML = newTotal;
    
}