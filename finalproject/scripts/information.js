
/***********************modal grade cards*********/


document.addEventListener('DOMContentLoaded', () => {
	const activityGrid = document.getElementById('activityGrid');
	const activityModal = document.getElementById('activityModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalDescription = document.getElementById('modalDescription');
	const modalDetails = document.getElementById('modalDetails');
	const closeButton = document.querySelector('.close-button');

	const activities = [
		{
			id: 1,
			schoolLevel: 'elementary',
			title: 'Story Time Adventure',
			description: 'Engaging stories for young learners.',
			details: 'Interactive storytelling sessions with puppets and props, fostering creativity and imagination. Suitable for ages 5-8.'
		},
		{
			id: 2,
			schoolLevel: 'elementary',
			title: 'Art Exploration',
			description: 'Unleash your inner artist.',
			details: 'Discover various art techniques and create colorful masterpieces. Materials provided. Suitable for ages 6-9.'
		},
		{
			id: 3,
			schoolLevel: 'juniorHigh',
			title: 'Science Experiments',
			description: 'Hands-on scientific investigations.',
			details: 'Explore the wonders of science with exciting experiments and demonstrations. Topics include chemistry, physics, and biology. Suitable for ages 11-14.'
		},
		{
			id: 4,
			schoolLevel: 'juniorHigh',
			title: 'Coding Club',
			description: 'Learn the basics of programming.',
			details: 'Start your coding journey with fun projects and challenges in Python and JavaScript. No prior experience needed. Suitable for ages 12-15.'
		},
		{
			id: 5,
			schoolLevel: 'highSchool',
			title: 'Debate Team',
			description: 'Sharpen your public speaking and critical thinking skills.',
			details: 'Join the debate team to discuss current events, develop argumentation skills, and compete in tournaments. Suitable for ages 15-18.'
		},
		{
			id: 6,
			schoolLevel: 'highSchool',
			title: 'College Prep Workshop',
			description: 'Prepare for your academic future.',
			details: 'Comprehensive workshop covering college applications, essay writing, financial aid, and career exploration. Suitable for ages 16-18.'
		}
	];

	// Function to render activity cards
	const renderCards = () => {
		activityGrid.innerHTML = ''; // Clear existing cards
		activities.forEach(activity => {
			const card = document.createElement('div');
			card.classList.add('card');
			card.dataset.id = activity.id;
			card.innerHTML = `
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
                <small>Level: ${activity.schoolLevel.replace(/([A-Z])/g, ' $1').trim()}</small>
            `;
			activityGrid.appendChild(card);
		});
	};

	// Open modal on card click
	activityGrid.addEventListener('click', (event) => {
		const card = event.target.closest('.card');
		if (card) {
			const activityId = parseInt(card.dataset.id);
			const selectedActivity = activities.find(activity => activity.id === activityId);
			if (selectedActivity) {
				modalTitle.textContent = selectedActivity.title;
				modalDescription.textContent = selectedActivity.description;
				modalDetails.textContent = selectedActivity.details;
				activityModal.style.display = 'block';
				// Set focus to the modal for accessibility
				activityModal.focus();
				activityModal.setAttribute('aria-modal', 'true');
				activityModal.setAttribute('role', 'dialog');
				modalTitle.setAttribute('id', 'modal-title');
				activityModal.setAttribute('aria-labelledby', 'modal-title');
				modalDescription.setAttribute('id', 'modal-description');
				activityModal.setAttribute('aria-describedby', 'modal-description');
			}
		}
	});

	// Close modal
	closeButton.addEventListener('click', () => {
		activityModal.style.display = 'none';
		activityModal.removeAttribute('aria-modal');
		activityModal.removeAttribute('role');
		activityModal.removeAttribute('aria-labelledby');
		activityModal.removeAttribute('aria-describedby');
	});

	// Close modal on outside click
	window.addEventListener('click', (event) => {
		if (event.target === activityModal) {
			activityModal.style.display = 'none';
			activityModal.removeAttribute('aria-modal');
			activityModal.removeAttribute('role');
			activityModal.removeAttribute('aria-labelledby');
			activityModal.removeAttribute('aria-describedby');
		}
	});

	// Initial rendering of cards
	renderCards();
});
/***********************modal grade cards*********/



/***********index.html get more info button****/

const infoBtn = document.getElementById('infoBtn');
if (infoBtn) {
	infoBtn.addEventListener('click', () => {
		window.location.href = "information.html";//URL 
	});
}
/***********index.html get more info button****/

/***********************form data cards*********/

const reqinfoForm = document.getElementById('req-info-form');
if (reqinfoForm) {
	reqinfoForm.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent default form submission

		const timestamp = document.getElementById('timestamp');

		// Get the current date and time
		const now = new Date();


		timestamp.value = new Date().toISOString(); // ISO 8601 format
		document.getElementById('timestamp').value = timestamp;


		// Get the URL parameters
		const urlParams = new URLSearchParams(window.location.search);
		const parentFirst = urlParams.get('parentFirst');
		const parentLast = urlParams.get('parentLast');
		const studentFirst = urlParams.get('studentFirst');
		const studentLast = urlParams.get('studentLast');
		const email = urlParams.get('email');
		const phone = urlParams.get('phone');
		const gradeLevel = urlParams.get('gradeLevel');
		const registerTerm = urlParams.get('registerTerm');
		const reason = urlParams.get('reason');

		console.log(parentFirst);
		console.log(registerTerm);
		console.log(gradeLevel);

		// Construct the thank you message
		let message = "Thank you ${parentFirst}${parentLast} for your Interest in our ${registerTerm} term!";
		if (parentFirst) {
			message = 'Check us out! We believe that your ${gradeLevel} student, ${studentFirst} ${studentLast} will enjoy the unique opportunities and programs that we offer. Check your email: ${email} for further Data. Your mobile number is ${phone}.  Mark today, ${timestamp} as a great begining.'

		}
		// Store data in localStorage to pass to the next page
		localStorage.setItem('thankYouMessage', message);

		// Redirect to the thank you page
		window.location.href = 'thank-you.html';
		// Display the message
		if (thankYouMessage) {
			document.getElementById('displayMessage').textContent = thankYouMessage;
			localStorage.removeItem('thankYouMessage'); // Clear stored data
		} else {
			document.getElementById('displayMessage').textContent = "No message to display.";
		}
		//	document.getElementById('thankYouMessage').innerText = message;



	}
	)
};
