function calcAmount() {
	let price = 250;
	let amountInput = document.querySelector("input[name='amount-input']");
	let showAmount = document.querySelector("span.show-amount");
	
	let amountNumber = parseInt(amountInput.value);
	
	
	if (isNaN(amountNumber)) {
		amountNumber = 0;
	}
	
	if (amountNumber < 1) {
		alert("Minimum 1 terméket kell vásárolnia");
	} else if (amountNumber > 10) {
		alert("Maximum 10 terméket vásárolhat");
	} else {
		
		let amount = parseInt(amountInput.value)* price;
		showAmount.innerHTML = amount;
		tvalasztas();
		ovalasztas();
	}
	
}

function tvalasztas() {
	let showToltelek = document.querySelector("span.valasztott");
	
	let toltelek = document.getElementById("toltelekek");
	let toltelekText = (toltelekek.value);
	console.log(toltelekText);
    showToltelek.innerHTML = toltelekText;
    
}

function ovalasztas() {
	let showOntet = document.querySelector("span.ontet");
	
	let ontet = document.getElementById("ontetek");
	let ontetText = (ontetek.value);
	console.log(ontetText);
    showOntet.innerHTML = ontetText;
}
