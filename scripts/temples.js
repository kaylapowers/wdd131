const navBar = document.querySelector('#navigation-item');
const hambButton = document.querySelector('#hamb-btn');

hambButton.addEventListener('click', () => {
	hambButton.classList.toggle('show');
	navBar.classList.toggle('show');
});


/*1 footer copyright year and last modified date ------------asst Reference **********/

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
	window.onload = function () {
		updateLastModified();
	}
};



document.addEventListener('DOMContentLoaded', function () {
	const breadcrumbList = document.getElementById('page-title');
	const pathNames = window.location.pathname.split('/').filter(path => path);


	// Generate breadcrumbs from the URL path
	let currentPath = '';
	pathNames.forEach((item, index) => {
		currentPath += `/${item}`;
		const listItem = document.createElement('li');
		const link = document.createElement('a');

		link.href = currentPath;
		// Capitalize the first letter of each breadcrumb item
		link.textContent = item.charAt(0).toLowerCase() + item.slice(1).replace(/-/g, ' ');

		listItem.appendChild(link);

		if (index === pathNames.length - 1) {
			listItem.classList.add('page-title'); // Highlight the current page
		}
		breadcrumbList.appendChild(listItem);
	});
});

// Call the function when the page loads
window.onload = updateLastModified;

