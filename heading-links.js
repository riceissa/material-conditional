// Function to add navigation links to section headings
function addHeadingLinks() {
    // Select all h2 elements
    const headings = document.querySelectorAll('h2');

    // Process each h2 element
    headings.forEach(heading => {
        // Skip if the heading has id="toc-title"
        if (heading.id === 'toc-title') {
            return;
        }

        // Skip if the heading doesn't have an id
        if (!heading.id) {
            console.warn('Found h2 element without an id attribute:', heading);
            return;
        }

        // Create the link to this section
        const sectionLink = document.createElement('a');
        sectionLink.href = `#${heading.id}`;
        sectionLink.title = 'Link to this section';
        sectionLink.className = 'heading-marker';
        sectionLink.textContent = '#';

        // Create the "back to TOC" link
        const tocLink = document.createElement('a');
        tocLink.href = '#TOC';
        tocLink.title = 'Go back to the table of contents';
        tocLink.className = 'heading-marker';
        tocLink.innerHTML = '&#8617;';

        // Add spacing between the heading text and the links
        heading.appendChild(document.createTextNode(' '));

        // Append the links
        heading.appendChild(sectionLink);
        heading.appendChild(document.createTextNode(' '));
        heading.appendChild(tocLink);
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addHeadingLinks);
