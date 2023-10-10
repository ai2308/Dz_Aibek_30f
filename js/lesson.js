// PHONE CHECKER VALIDATOR

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
const mask = new IMask(phoneInput, {
	mask: "+{996} 000 00-00-00"
});

phoneButton.addEventListener("click", () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = "OK";
		phoneResult.style.color = "green";
	} else {
		phoneResult.innerHTML = "NOT OK";
		phoneResult.style.color = "red";
	}
})