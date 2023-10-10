// HW 1 (PART 1) e-mail CHECKER

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");


const regExp = /\w@gmail.com/;


gmailButton.addEventListener("click", () => {
	if (regExp.test(gmailInput.value)) {
		gmailResult.innerHTML = "OK";
		gmailResult.style.color = "green";
	} else {
		gmailResult.innerHTML = "NOT OK";
		gmailResult.style.color = "red";
	}
})



// HW 1 (PART 2) Move red block
const redCube = document.querySelector(".child_block");
let position = 0;

const moveBlock = () => {
	position++;
	if(position > 448) return;
	redCube.style.left = position + "px";
	setTimeout(moveBlock, 10);
}

moveBlock();