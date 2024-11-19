document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const numberOfPanels = 100;  // Number of panels (squares) you want to generate

    // Array of image URLs (or you can customize as needed)
    const images = [
        'https://i.ytimg.com/vi/apfoJYeIeCg/maxresdefault.jpg',
        'https://ericalayne.co/wp-content/uploads/2019/05/Morning-Pages-1-683x1024.png',
        'https://i0.wp.com/hagengrowth.com/wp-content/uploads/2023/03/Gratitude-Journal-A-Beginners-Guide-to-Cultivate-Gratitude.jpg?resize=768%2C910&ssl=1',
        'https://kalynbrooke.com/wp-content/uploads/2016/08/brain-dump-color-coding.jpg',
        'https://artsupplyguide.com/wp-content/uploads/2015/11/art-journal-feature-1024x768.jpg',
    ]

    // Function to create a panel (square)
    function createPanel(index) {
        const panel = document.createElement('div');
        panel.classList.add('panel');
        
        // Assign background image from the array
        panel.style.backgroundImage = `url(${images[index % images.length]})`;
        panel.innerHTML = `<h3>Day ${index + 1}</h3>`;  // Optional: Add day label

        // Add event listener to handle 'active' class on click
        panel.addEventListener('click', () => {
            removeActiveClasses();  // Remove active class from all panels
            panel.classList.add('active');  // Add active class to clicked panel

        modal.style.display = 'block';
        modalText.innerHTML = `
        <h3>Details for Panel ${index + 1}</h3>
        <img src="${panel.style.backgroundImage.slice(5, -2)}" alt="Panel image" width="100%" />
        <p>This panel is about topic XYZ.</p>
    `;

        })

        return panel
    }

    // Function to remove the 'active' class from all panels
    function removeActiveClasses() {
        const panels = container.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
    }

    // Loop to generate the panels
    for (let i = 0; i < numberOfPanels; i++) {
        const panel = createPanel(i);
        container.appendChild(panel);
    }
})

// Select all the panels
const panels = document.querySelectorAll('.panel');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalText = document.getElementById('modal-text');

// Add click event listener to each panel
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        // Open the modal when a panel is clicked
        modal.style.display = 'block';

        // Add content to the modal based on the clicked panel
        // You can customize the content based on the panel or index
        modalText.innerHTML = `Details for Panel ${index + 1}`;
    });
})

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Close the modal when clicking anywhere outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})

