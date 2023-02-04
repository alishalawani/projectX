/**
 * Now play a knock knock game with the person beside you.
 * Go? Knock Knock who's there?
 * - Al
 * - Al who?
 * - Al be your valentine if you will be mine
 */
const questions = [
	{
		question: "What did the owl say to their crush on valentine's day?",
		answer: 'Owl be yours',
	},
	{
		question: 'What can fill a room but takes up no space?',
		answer: 'Love',
	},
	{
		question:
			"What is 5ft 3 inches, doesn't like pets, and is in love with you?",
		answer: 'Yepp, that one beside you.',
	},
];
console.log(window.location.href);
if (window.location.href[window.location.href.length - 1] == '/') {
	document.querySelector('.start-btn').addEventListener('click', onStart);
}
function onStart() {
	document.querySelector('#hide').id = '';
	document.querySelector('.first').id = 'hide';
}

const avatars = document.querySelectorAll('#avatar');
avatars.forEach((a) => {
	a.addEventListener('click', onAvatarSelect);
});

function onAvatarSelect(event) {
	const imgPath = event.target.src;
	window.localStorage.setItem('avatar', imgPath);
	avatars.forEach((a) => {
		a.removeEventListener('click', onAvatarSelect);
	});
	slideBeginText('.begin-text');
}

function slideBeginText(selector) {
	console.log('slide');
	document.querySelector(selector).classList.add('slide-text');
	setTimeout(() => {
		window.location.href = 'cheesy-riddles.html';
	}, 3000);
}
let index = 0;

if (window.location.href.includes('cheesy')) {
	document.querySelector('#profile-img').attributes.getNamedItem('src').value =
		window.localStorage.getItem('avatar');
	setNewRiddle();

	function setNewRiddle() {
		document.querySelector('#question').innerHTML = questions[index].question;
		document.querySelector('#answer').innerHTML = questions[index].answer;
	}

	document.querySelector('.prev-btn').addEventListener('click', onPrev);

	document.querySelector('.next-btn').addEventListener('click', onNext);

	function onNext() {
		if (index >= questions.length - 1) {
			window.location.href = 'knock-knock.html';
			return;
		}
		index++;
		greyIcon();
		setNewRiddle(index);
	}

	function onPrev() {
		if (index <= 0) {
			return;
		}
		index--;
		greyIcon();
		setNewRiddle(index);
	}
	function greyIcon() {
		const icon = document.querySelector('.prev-btn');
		if (index !== 0) {
			icon.style.opacity = '1';
		} else {
			icon.style.opacity = '0.4';
		}
	}
}

if (window.location.href.includes('knock-knock')) {
	document.querySelector('#profile-img').addEventListener
	('click', () => window.location.href = 'reveal.html');

	document.querySelector('#profile-img').attributes.getNamedItem('src').value =
		window.localStorage.getItem('avatar');

	let timeLeft = 30;
	let elem = document.querySelector('span');

	let timerId = setInterval(countdown, 1000);

	function countdown() {
		if (timeLeft == -1) {
			clearTimeout(timerId);
			const ps = document.querySelectorAll('p')
			ps[ps.length - 1].innerHTML = "== Click Avatar for a reveal ==";

		} else {
			elem.innerHTML = timeLeft;
			timeLeft--;
		}
	}
}
