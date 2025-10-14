document.addEventListener('DOMContentLoaded', function () {
	// Get the current count from localStorage, default to 0 if not found
	let reviewCount = localStorage.getItem('completedReviews');
	if (reviewCount === null) {
		reviewCount = 0;
	} else {
		reviewCount = parseInt(reviewCount);
	}

	// Display the initial count
	document.getElementById('reviewCount').textContent = reviewCount;

	// Handle form submission
	const reviewForm = document.getElementById('reviewForm');
	reviewForm.addEventListener('submit', function (event) {
		// Prevent default form submission to handle it with JavaScript
		// In a real application, you would handle the actual submission
		// (e.g., via AJAX) and then increment the counter upon success.
		event.preventDefault();

		// Simulate successful form submission
		// In a real application, this would be inside your AJAX success callback
		reviewCount++;
		localStorage.setItem('completedReviews', reviewCount);
		document.getElementById('reviewCount').textContent = reviewCount;

		alert('Review submitted successfully!'); // Simulate success message

		// Optionally, you can submit the form programmatically after updating the counter
		// reviewForm.submit();
	});
});