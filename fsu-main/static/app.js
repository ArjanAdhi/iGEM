function toggleReadMore(moreId, btn) {
    var moreText = document.getElementById(moreId);

    if (moreText.style.display === "none" || !moreText.style.display) {
        btn.textContent = "Read Less";
        moreText.style.display = "block"; // Show the hidden content
    } else {
        btn.textContent = "Read More";
        moreText.style.display = "none"; // Hide the content
    }
}

//footer js
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.slide-track');
    let shiftAmount = 0;
    const shiftLimit = -250 * (track.children.length - 4); // Adjust based on your layout and number of logos

    function slide() {
        if (shiftAmount > shiftLimit) {
            shiftAmount -= 250; // Change this to match the width of your logos including any margin or padding
            track.style.transform = `translateX(${shiftAmount}px)`;
        } else {
            shiftAmount = 0; // Resets to start position once it reaches the end
            track.style.transform = 'translateX(0px)';
        }
    }

    setInterval(slide, 4000); // Adjust timing here as needed for the pause
});


// Toggle visibility of section content for pages
function toggleSection(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block"; // Show the content
    } else {
        content.style.display = "none"; // Hide the content
    }
}

// for timeline
document.addEventListener('DOMContentLoaded', function() {
    var hoverPanel = document.getElementById('hover-panel');
    var expandableBox = document.getElementById('expandable-box');
    var arrowIndicator = document.getElementById('arrow-indicator');
    var timeline = document.getElementById('timeline');
    var pages = document.querySelectorAll('.page');
    var totalHeight = document.querySelector('.pagination-container').offsetHeight;

    // Expand the box when hovering over the panel
    hoverPanel.addEventListener('mouseover', function() {
        expandableBox.style.right = '0'; // Expand the box
        expandableBox.classList.add('expanded');
    });

    // Collapse the box when the mouse leaves the expandable area
    expandableBox.addEventListener('mouseleave', function() {
        expandableBox.style.right = '-200px'; // Collapse the box
        expandableBox.classList.remove('expanded');
    });

    // Loop through each page to add notches and links
    pages.forEach(function(page, index) {
        var pagePosition = page.offsetTop;
        var notchPosition = (pagePosition / totalHeight) * 100;

        // Create a clickable notch on the timeline
        var notchLink = document.createElement('a');
        notchLink.href = '#';
        notchLink.style.position = 'absolute';
        notchLink.style.left = '-15px';
        notchLink.style.width = '10px';
        notchLink.style.height = '2px';
        notchLink.style.backgroundColor = 'black';
        notchLink.style.top = notchPosition + '%';

        notchLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: pagePosition - 50, // Scroll to the page with a little offset
                behavior: 'smooth'
            });
        });

        // Create a label for each notch
        var notchLabel = document.createElement('span');
        notchLabel.innerText = 'P' + (index + 1);
        notchLabel.style.position = 'absolute';
        notchLabel.style.left = '-35px';
        notchLabel.style.top = notchPosition + '%';
        notchLabel.style.color = 'black';
        notchLabel.style.fontSize = '12px';

        // Append the notch and label to the timeline
        timeline.appendChild(notchLink);
        timeline.appendChild(notchLabel);

        // Add random date markers between the pages
        var randomDate = document.createElement('div');
        randomDate.innerText = 'Date ' + (index + 1); // Example Date Text
        randomDate.style.position = 'absolute';
        randomDate.style.left = '-100px'; // Adjust date position horizontally
        randomDate.style.top = (notchPosition + Math.random() * 5) + '%'; // Randomize position vertically
        randomDate.style.color = '#782f40'; // Set date color
        randomDate.style.fontSize = '12px';

        // Append the random date to the timeline
        timeline.appendChild(randomDate);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('bouncing-image');
    const container = document.querySelector('.container-title');

    let x = 50, y = 50; // Initial position
    let dx = 2, dy = 2; // Change in position (speed)

    function bounceImage() {
        const imgRect = img.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Change direction if image hits container edges
        if (x + imgRect.width >= containerRect.width || x <= 0) {
            dx = -dx;
        }

        if (y + imgRect.height >= containerRect.height || y <= 0) {
            dy = -dy;
        }

        // Update image position
        x += dx;
        y += dy;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        requestAnimationFrame(bounceImage); // Continue the animation
    }

    bounceImage(); // Start the animation
});


/* Timeline */

document.addEventListener('DOMContentLoaded', function() {
    var hoverPanel = document.getElementById('hover-panel');
    var expandableBox = document.getElementById('expandable-box');
    var arrowIndicator = document.getElementById('arrow-indicator');
    var timeline = document.getElementById('timeline');

    // Define sections manually, adjust this list to match the sections on your page
    var sections = [
        { id: 'section1', label: 'Section 1' },
        { id: 'section2', label: 'Section 2' },
        { id: 'section3', label: 'Section 3' }
    ];

    // Expand the box when hovering over the panel
    hoverPanel.addEventListener('mouseover', function() {
        expandableBox.style.right = '0'; // Expand the box
        expandableBox.classList.add('expanded');
    });

    // Collapse the box when the mouse leaves the expandable area
    expandableBox.addEventListener('mouseleave', function() {
        expandableBox.style.right = '-200px'; // Collapse the box
        expandableBox.classList.remove('expanded');
    });

    // Calculate the total height of the body for relative positioning of notches
    var totalHeight = document.body.offsetHeight;

    // Loop through each defined section to add notches and links
    sections.forEach(function(section, index) {
        var sectionElement = document.getElementById(section.id);
        if (sectionElement) {
            var sectionPosition = sectionElement.offsetTop;
            var notchPosition = (sectionPosition / totalHeight) * 100;

            // Create a clickable notch on the timeline
            var notchLink = document.createElement('a');
            notchLink.href = '#' + section.id;
            notchLink.style.position = 'absolute';
            notchLink.style.left = '-15px';
            notchLink.style.width = '10px';
            notchLink.style.height = '2px';
            notchLink.style.backgroundColor = 'black';
            notchLink.style.top = notchPosition + '%';

            notchLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: sectionPosition - 50, // Scroll to the section with a small offset
                    behavior: 'smooth'
                });
            });

            // Create a label for each notch
            var notchLabel = document.createElement('span');
            notchLabel.innerText = section.label;
            notchLabel.style.position = 'absolute';
            notchLabel.style.left = '-35px';
            notchLabel.style.top = notchPosition + '%';
            notchLabel.style.color = 'black';
            notchLabel.style.fontSize = '12px';

            // Append the notch and label to the timeline
            timeline.appendChild(notchLink);
            timeline.appendChild(notchLabel);
        }
    });
});

function toggleFooter() {
    const footerContent = document.getElementById('footer-content');
    const footerToggle = document.getElementById('footer-toggle');

    if (footerContent.classList.contains('collapsed')) {
        footerContent.classList.remove('collapsed');
        footerToggle.textContent = 'Hide';
    } 
    else {
        footerContent.classList.add('collapsed');
        footerToggle.textContent = 'Show';
    }
}

// function toggleFooter() {
//     const footerContent = document.getElementById('footer-content');
//     const footerToggle = document.getElementById('footer-toggle');

//     if (footerContent.classList.contains('collapsed')) {
//         footerContent.classList.remove('collapsed');
//         footerToggle.textContent = 'Collapse Footer';
//     } else {
//         footerContent.classList.add('collapsed');
//         footerToggle.textContent = 'Expand Footer';
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const footerToggle = document.getElementById('footer-toggle');
    footerToggle.addEventListener('click', toggleFooter);
});

