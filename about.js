console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your answers have been submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

//----- A mouseover pop-up is cancer -----//
document.getElementById('rubberDuck').addEventListener('mouseover', () => alert('You are twice as cool as this duck'));