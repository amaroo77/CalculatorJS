//CALCULATOR PROGRAM

const display = document.getElementById("display"); //make a constant variable from display

function appendToDisplay(input){ //making the appendToDisplay function working
	display.value += input;
}

function clearDisplay(){
	display.value = ""; //Clear out the display
}

function calculate(){
	try{ //use catch method to display the error
		display.value = eval(display.value); //do the math by evaluating the operation using built-in function
	}
	catch(error){
		display.value = "Error"; //Display Error if the operation is not right.
	}
}