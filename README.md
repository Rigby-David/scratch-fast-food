Events	
On typing in the name input, the order name changes with each keystroke	1
On changing the food dropdown, the image for the food changes appropriately	1
On changing the side dropdown, the image for the side changes appropriately	1
On changing the drink dropdown, the image for the drink changes appropriately	1
On submitting a new extra instruction, it is displayed with all the other extra instructions in a list	2


Components	
App() : tracks state for foodId, sideId, drinkId, instructions, formInstruction, and orderName	2
App() : passes state as props correctly to OrderNameInput and OrderImages, InstructionsForm, InstructionsList. Also displays the order's name.	2
OrderNameInput({ setOrderName }) : on change, call setOrderName with the new e.target.value to change App.js state	1
OrderImages({ foodId, sideId, drinkId }) : use the 3 props to render the correct images that live in the public directory	2
InstructionsForm({ handleSubmit, setFormInstruction }) : On change of the input, set the formInstruction.	1
InstructionsForm({ handleSubmit, setFormInstruction }) : On submit of the form, this slogan is injected into App.js state using a callback state handler passed down as a prop.	2
InstructionsList({ instructions }) : maps through the instructions prop and renders an Instruction for each item in the array	2
FoodDropdown({ setFoodId }), SideItemDropdown({ setSideId }), DrinkDropdown({ setDrinkId }) : each of these components should take in a state handler and change App.js state on change	1
Instruction({ instruction } ) : renders the instruction prop however you like	1