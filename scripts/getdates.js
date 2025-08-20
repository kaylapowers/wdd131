

document.addEventListener('DOMContentLoaded', function () {
	var currentYear = new Date().getFullYear();
	var copyrightYearElement = document.getElementById('copyright-year');
	if (copyrightYearElement) {
		copyrightYearElement.textContent = currentYear;
	}
});

function updateLastModified() {
	const lastModifiedElement = document.getElementById('last-modified');
	if (lastModifiedElement) {
		lastModifiedElement.textContent = document.lastModified;
	}
window.onload = function() {
	updateLastModified();
}};

// Call the function when the page loads
window.onload = updateLastModified;